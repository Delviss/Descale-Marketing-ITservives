import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Icon from '../../components/AppIcon';
import { COMPANY, emailHref, SITE_URL } from '../../config/company';

// Turns a path segment like "campaign-terms" into "Campaign Terms" for the
// auto-generated breadcrumb trail.
const humanizeSegment = (segment) =>
  segment.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

const LegalLayout = ({ title, description, lastUpdated, children, jsonLd }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    window.scrollTo(0, 0);
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  // Auto-generated from the actual URL so it can't drift from the route
  // structure: /moveads/legal/campaign-terms -> Home / Moveads / Legal /
  // Campaign Terms. Flat top-level pages (/privacy, /terms, /cookies) have
  // no real "legal" URL segment to group under, so a non-clickable "Legal"
  // label is inserted visually only (real_item: null) — it's left out of
  // the JSON-LD, which only ever references real, resolvable URLs.
  const segments = pathname.split('/').filter(Boolean);
  const middleCrumbs =
    segments.length > 1
      ? segments.slice(0, -1).map((seg, i) => ({
          name: humanizeSegment(seg),
          item: `${SITE_URL}/${segments.slice(0, i + 1).join('/')}`,
        }))
      : [{ name: 'Legal', item: null }];
  const breadcrumbTrail = [
    { name: 'Home', item: SITE_URL },
    ...middleCrumbs,
    { name: title, item: `${SITE_URL}${pathname}` },
  ];
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbTrail
      .filter((crumb) => crumb.item)
      .map((crumb, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: crumb.name,
        item: crumb.item,
      })),
  };
  const jsonLdBlocks = [jsonLd, breadcrumbJsonLd].filter(Boolean);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{`${title} | Descale Agency`}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={`${title} | Descale Agency`} />
        <meta property="og:description" content={description} />
        <meta name="robots" content="index, follow" />
        {jsonLdBlocks.map((block, i) => (
          <script key={i} type="application/ld+json">{JSON.stringify(block)}</script>
        ))}
      </Helmet>
      <Header />
      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-10 flex flex-wrap items-center gap-3 text-xs font-medium tracking-[0.2em] text-foreground/50 uppercase">
            {breadcrumbTrail.slice(0, -1).map((crumb) => (
              <React.Fragment key={crumb.name}>
                {crumb.item ? (
                  <Link to={crumb.item.replace(SITE_URL, '') || '/'} className="hover:text-foreground/80 transition-colors">
                    {crumb.name}
                  </Link>
                ) : (
                  <span>{crumb.name}</span>
                )}
                <span>/</span>
              </React.Fragment>
            ))}
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
                <div className="font-semibold text-foreground">{COMPANY.legalName}</div>
                <div>{COMPANY.address.streetAddress}</div>
                <div>{COMPANY.address.postalCode} Warszawa, Poland</div>
                <div className="mt-2">NIP: {COMPANY.taxId}</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-foreground/50 mb-2">Contact</div>
                <a href={emailHref} className="block text-foreground hover:text-primary transition-colors">
                  {COMPANY.email}
                </a>
                <a href={COMPANY.phone.href} className="block text-foreground/80 hover:text-primary transition-colors">
                  {COMPANY.phone.display}
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
