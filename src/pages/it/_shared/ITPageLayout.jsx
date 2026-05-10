import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../../components/ui/Header';
import Footer from '../../../components/ui/Footer';

const ITPageLayout = ({ title, description, ogTitle, ogDescription, jsonLd, children }) => {
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
