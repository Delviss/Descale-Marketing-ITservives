import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../../components/ui/Header';
import Footer from '../../../components/ui/Footer';

const ITPageLayout = ({ title, description, ogTitle, ogDescription, jsonLd, noindex, children }) => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    document.documentElement.classList.add('dark');
    document.body.classList.add('dark');
    document.body.setAttribute('data-domain', 'it');
    document.body.style.backgroundColor = 'var(--color-background)';
    window.scrollTo(0, 0);
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
      document.body.removeAttribute('data-domain');
      document.body.style.backgroundColor = '';
    };
  }, []);

  // index.html ships a single static <meta name="robots"> for the default
  // "index, follow" case. Helmet only appends tags, it doesn't replace
  // pre-existing static ones, so a noindex page mutates that tag in place
  // instead of rendering a second, conflicting one.
  useEffect(() => {
    if (!noindex) return undefined;
    const tag = document.querySelector('meta[name="robots"]');
    if (!tag) return undefined;
    const previous = tag.getAttribute('content');
    tag.setAttribute('content', 'noindex, nofollow');
    return () => tag.setAttribute('content', previous);
  }, [noindex]);

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={ogTitle || title} />
        <meta property="og:description" content={ogDescription || description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={ogTitle || title} />
        <meta name="twitter:description" content={ogDescription || description} />
        {jsonLd && (
          <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        )}
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default ITPageLayout;
