import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, Link } from 'react-router-dom';
import Button from 'components/ui/Button';
import Header from 'components/ui/Header';
import Footer from 'components/ui/Footer';

const sections = [
  { name: 'Marketing', href: '/' },
  { name: 'IT Services', href: '/it' },
  { name: 'Our Work', href: '/work' },
  { name: 'Builders', href: '/builders' },
  { name: 'Help Center', href: '/help' },
  { name: 'Contact', href: '/contact' },
];

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  // index.html ships a single static <meta name="robots"> (index, follow).
  // react-helmet-async only APPENDS tags, it never replaces a statically-
  // authored one, so rendering a second <meta name="robots"> via Helmet
  // here would leave two conflicting robots tags in the document instead of
  // one noindex. Mutate the existing tag in place instead (same pattern
  // ITPageLayout uses for its own noindex pages).
  useEffect(() => {
    const tag = document.querySelector('meta[name="robots"]');
    if (!tag) return undefined;
    const previous = tag.getAttribute('content');
    tag.setAttribute('content', 'noindex, nofollow');
    return () => tag.setAttribute('content', previous);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Page not found | Descale Agency</title>
        <meta name="description" content="The page you're looking for doesn't exist. Find your way back to Descale Agency's marketing, IT services, or help center." />
      </Helmet>
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center p-4 pt-32 pb-16">
        <div className="text-center max-w-md">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <h1 className="text-9xl font-bold text-primary opacity-20">404</h1>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-foreground mb-2">Page not found</h2>
          <p className="text-text-secondary mb-8">
            The page you're looking for doesn't exist. Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button
              variant="default"
              iconName="ArrowLeft"
              iconPosition="left"
              onClick={() => window.history?.back()}
            >
              Go Back
            </Button>

            <Button
              variant="outline"
              iconName="Home"
              iconPosition="left"
              onClick={handleGoHome}
            >
              Back to Home
            </Button>
          </div>

          <nav aria-label="Main sections">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-secondary mb-4">
              Or explore
            </p>
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {sections.map((section) => (
                <li key={section.href}>
                  <Link
                    to={section.href}
                    className="text-sm font-medium text-foreground hover:text-primary underline underline-offset-4 transition-colors inline-flex min-h-[44px] items-center"
                  >
                    {section.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
