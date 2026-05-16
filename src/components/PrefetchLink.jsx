import React, { useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

const prefetched = new Set();

const triggerPrefetch = (prefetch) => {
  if (typeof prefetch !== 'function') return;
  const key = prefetch.toString();
  if (prefetched.has(key)) return;
  prefetched.add(key);
  try {
    const p = prefetch();
    if (p && typeof p.then === 'function') {
      p.catch(() => prefetched.delete(key));
    }
  } catch (_) {
    prefetched.delete(key);
  }
};

const idle = (cb) => {
  if (typeof window === 'undefined') return;
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(cb, { timeout: 500 });
  } else {
    setTimeout(cb, 1);
  }
};

const PrefetchLink = ({ to, prefetch, children, onClick, ...rest }) => {
  const ref = useRef(null);

  const handlePrefetch = useCallback(() => {
    idle(() => triggerPrefetch(prefetch));
  }, [prefetch]);

  useEffect(() => {
    if (!prefetch || !ref.current) return;
    if (typeof IntersectionObserver === 'undefined') {
      handlePrefetch();
      return;
    }
    const el = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            handlePrefetch();
            observer.disconnect();
            break;
          }
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [handlePrefetch, prefetch]);

  return (
    <Link
      ref={ref}
      to={to}
      onMouseEnter={handlePrefetch}
      onFocus={handlePrefetch}
      onTouchStart={handlePrefetch}
      onClick={onClick}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default PrefetchLink;
