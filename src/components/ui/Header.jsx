import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'Services', path: '/services-hub', icon: 'Briefcase' },
    { name: 'Work', path: '/work-portfolio', icon: 'FolderOpen' },
    { name: 'Innovation Lab', path: '/interactive-taxi-ads-innovation-lab', icon: 'Lightbulb' },
    { name: 'About', path: '/about-experience', icon: 'Users' },
  ];

  const secondaryItems = [
    { name: 'Growth Assessment', path: '/growth-assessment-contact', icon: 'TrendingUp' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location?.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const Logo = () => (
    <img
      src="/assets/images/logo-full.svg"
      alt="Descale Agency"
      className="h-12 w-auto"
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
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/homepage" className="block hover-lift" aria-label="Descale Agency home">
              <Logo />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <a
                key={item?.path}
                href={item?.path}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-brand-fast hover-lift ${
                  isActivePath(item?.path)
                    ? 'bg-primary text-primary-foreground shadow-brand'
                    : 'text-foreground hover:bg-muted hover:text-primary'
                }`}
              >
                {item?.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="default"
              size="sm"
              iconName="TrendingUp"
              iconPosition="left"
              onClick={() => window.location.href = '/growth-assessment-contact'}
              className="hover-brand"
            >
              Growth Assessment
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
              ? 'max-h-screen opacity-100 border-t border-border' :'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-background/98 backdrop-blur-brand px-4 py-6 space-y-2">
            {navigationItems?.map((item) => (
              <a
                key={item?.path}
                href={item?.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-semibold transition-all duration-brand-fast ${
                  isActivePath(item?.path)
                    ? 'bg-primary text-primary-foreground shadow-brand'
                    : 'text-foreground hover:bg-muted hover:text-primary'
                }`}
              >
                <Icon name={item?.icon} size={20} />
                <span>{item?.name}</span>
              </a>
            ))}

            <div className="pt-4 border-t border-border">
              {secondaryItems?.map((item) => (
                <a
                  key={item?.path}
                  href={item?.path}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-semibold text-primary hover:bg-primary/10 transition-all duration-brand-fast"
                >
                  <Icon name={item?.icon} size={20} />
                  <span>{item?.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
