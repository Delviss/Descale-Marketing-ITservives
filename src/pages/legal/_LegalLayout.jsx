import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Icon from '../../components/AppIcon';

const LegalLayout = ({ title, description, lastUpdated, children, jsonLd }) => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    window.scrollTo(0, 0);
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{`${title} | Descale Agency`}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
      </Helmet>
      <Header />
      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-10 flex flex-wrap items-center gap-3 text-xs font-medium tracking-[0.2em] text-foreground/50 uppercase">
            <Link to="/" className="hover:text-foreground/80 transition-colors">Home</Link>
            <span>/</span>
            <span>Legal</span>
            <span>/</span>
            <span className="text-foreground/80">{title}</span>
          </div>

          <h1 className="font-display text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-4">
            {title}
          </h1>
          <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl">{description}</p>
          {lastUpdated && (
            <p className="mt-6 text-sm text-foreground/50">
              <Icon name="Calendar" size={14} className="inline mr-2" />
              Last updated: {lastUpdated}
            </p>
          )}

          <div className="mt-12 prose-content space-y-8 text-foreground/80 leading-relaxed">
            {children}
          </div>

          <div className="mt-16 pt-10 border-t border-border">
            <h3 className="font-display text-2xl font-bold mb-4">Data Controller</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-foreground/75">
              <div>
                <div className="text-xs uppercase tracking-wider text-foreground/50 mb-2">Company</div>
                <div className="font-semibold text-foreground">Travomate Sp. z o.o.</div>
                <div>ul. Nowogrodzka 31</div>
                <div>00-511 Warszawa, Poland</div>
                <div className="mt-2">NIP: 7011239205</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-foreground/50 mb-2">Contact</div>
                <a href="mailto:Info@travomate.com.pl" className="block text-foreground hover:text-primary transition-colors">
                  Info@travomate.com.pl
                </a>
                <a href="tel:+48506762423" className="block text-foreground/80 hover:text-primary transition-colors">
                  +48 506 762 423
                </a>
                <div className="mt-2 text-xs text-foreground/50">EU GDPR Article 4(7) data controller</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LegalLayout;
