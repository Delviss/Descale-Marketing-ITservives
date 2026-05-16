import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';
import { routePrefetch } from '../../Routes';

const prefetched = new Set();
const warm = (path) => {
  const fn = routePrefetch?.[path];
  if (!fn || prefetched.has(path)) return;
  prefetched.add(path);
  try {
    const p = fn();
    if (p && typeof p.then === 'function') p.catch(() => prefetched.delete(path));
  } catch (_) {
    prefetched.delete(path);
  }
};

const Header = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigationItems = [
    { name: 'Marketing', path: '/marketing', icon: 'Megaphone', matches: ['/', '/marketing'] },
    { name: 'IT Services', path: '/it', icon: 'Cpu', matches: ['/it'] },
    { name: 'About', path: '/about', icon: 'Users', matches: ['/about', '/about-experience'] },
    { name: 'Help', path: '/help', icon: 'LifeBuoy', matches: ['/help', '/faq'] },
  ];

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 20);
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location?.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActivePath = (item) => {
    return item?.matches?.includes(location?.pathname);
  };

  const Logo = () => (
    <img
      src={`${import.meta.env.BASE_URL}assets/images/descale-logo.png`}
      alt="Descale Agency"
      width={606}
      height={182}
      className="h-12 sm:h-14 md:h-16 w-auto select-none object-contain"
      draggable={false}
      decoding="async"
      fetchpriority="high"
    />
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-fixed transition-all duration-brand-fast bg-background/90 backdrop-blur-brand ${
        isScrolled
          ? 'shadow-brand-md border-b border-border'
          : 'border-b border-border/40'
      } ${className}`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 md:h-20 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="block hover-lift" aria-label="Descale Agency home">
              <Logo />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                onMouseEnter={() => warm(item?.path)}
                onFocus={() => warm(item?.path)}
                onTouchStart={() => warm(item?.path)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-brand-fast hover-lift ${
                  isActivePath(item)
                    ? 'bg-primary text-primary-foreground shadow-brand'
                    : 'text-foreground hover:bg-muted hover:text-primary'
                }`}
              >
                {item?.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="default"
              size="sm"
              iconName="ArrowUpRight"
              iconPosition="right"
              onMouseEnter={() => warm('/get-started')}
              onFocus={() => warm('/get-started')}
              onClick={() => navigate('/get-started')}
              className="hover-brand"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="hover-brand text-foreground"
              aria-label="Toggle menu"
            >
              <Icon
                name={isMenuOpen ? "X" : "Menu"}
                size={24}
                className="transition-transform duration-brand-fast"
              />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden transition-all duration-brand-normal overflow-hidden ${
            isMenuOpen
              ? 'max-h-[80vh] opacity-100 border-t border-border overflow-y-auto' :'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-background/98 backdrop-blur-brand px-4 py-6 space-y-2">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                onTouchStart={() => warm(item?.path)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-semibold transition-all duration-brand-fast ${
                  isActivePath(item)
                    ? 'bg-primary text-primary-foreground shadow-brand'
                    : 'text-foreground hover:bg-muted hover:text-primary'
                }`}
              >
                <Icon name={item?.icon} size={20} />
                <span>{item?.name}</span>
              </Link>
            ))}

            <div className="pt-4 border-t border-border">
              <Link
                to="/get-started"
                onTouchStart={() => warm('/get-started')}
                className="flex items-center justify-center space-x-2 px-4 py-3 rounded-lg text-base font-semibold bg-primary text-primary-foreground shadow-brand hover:opacity-95 transition-all duration-brand-fast"
              >
                <span>Get Started</span>
                <Icon name="ArrowUpRight" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
