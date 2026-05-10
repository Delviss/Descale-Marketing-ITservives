import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Icon from '../../components/AppIcon';

const Contact = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    window.scrollTo(0, 0);
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Descale Agency',
    description:
      'Contact Descale Agency in Warsaw, Poland. Marketing and IT services for EU and US clients.',
    publisher: {
      '@type': 'Organization',
      name: 'Travomate Sp. z o.o.',
      legalName: 'Travomate Sp. z o.o.',
      taxID: '7011239205',
      email: 'Info@travomate.com.pl',
      telephone: '+48 506 762 423',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'ul. Nowogrodzka 31',
        postalCode: '00-511',
        addressLocality: 'Warszawa',
        addressRegion: 'Mazowieckie',
        addressCountry: 'PL',
      },
      areaServed: ['EU', 'US', 'UK', 'Poland'],
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Contact — Descale Agency · Warsaw, Poland</title>
        <meta
          name="description"
          content="Talk to Descale Agency. Marketing systems and IT engineering, headquartered in Warsaw, Poland — delivering across the EU, UK, and US."
        />
        <meta property="og:title" content="Contact — Descale Agency" />
        <meta
          property="og:description"
          content="Talk to a senior team in Warsaw. Marketing + IT delivery across EU, UK, and US."
        />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <Header />

      <main className="pt-32 pb-24">
        <section className="relative overflow-hidden">
          <div aria-hidden className="absolute inset-0 bg-mesh-light opacity-90" />
          <div aria-hidden className="absolute top-24 right-[-10%] w-[520px] h-[520px] bg-primary/10 blur-[120px] rounded-full animate-float-orb" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-foreground/60 uppercase mb-6"
            >
              <span className="w-8 h-px bg-foreground/40" />
              Contact
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.02] tracking-tight max-w-5xl"
            >
              Let&rsquo;s build something{' '}
              <span className="font-serif-accent italic text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent">
                worth scaling.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8 max-w-2xl text-lg md:text-xl text-foreground/70 leading-relaxed"
            >
              Headquartered in Warsaw, Poland. Delivering across the EU, UK, and US. Send us a brief, book a
              call, or stop by the office — whichever moves the project forward fastest.
            </motion.p>

            <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-3xl border border-border bg-card p-8 hover-lift"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <Icon name="Mail" size={22} />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">Email</h3>
                <p className="text-foreground/70 text-sm mb-4">
                  Project briefs, partnerships, press. We reply within one business day.
                </p>
                <a
                  href="mailto:Info@travomate.com.pl"
                  className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium"
                >
                  Info@travomate.com.pl
                  <Icon name="ArrowUpRight" size={14} />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="rounded-3xl border border-border bg-card p-8 hover-lift"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <Icon name="Phone" size={22} />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">Phone</h3>
                <p className="text-foreground/70 text-sm mb-4">
                  Mon–Fri, 09:00–18:00 CET. Calls in English, Polish, French and Spanish.
                </p>
                <a
                  href="tel:+48506762423"
                  className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium"
                >
                  +48 506 762 423
                  <Icon name="ArrowUpRight" size={14} />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="rounded-3xl border border-border bg-card p-8 hover-lift"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <Icon name="MapPin" size={22} />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">Office</h3>
                <p className="text-foreground/70 text-sm mb-4">Walk-ins by appointment.</p>
                <address className="not-italic text-foreground font-medium">
                  ul. Nowogrodzka 31<br />
                  00-511 Warszawa, Poland
                </address>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mt-12 flex flex-wrap gap-4"
            >
              <Link
                to="/get-started"
                className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-all duration-300 shadow-brand"
              >
                Send a project brief
                <span className="w-8 h-8 rounded-full bg-background/15 group-hover:bg-background/25 flex items-center justify-center transition-colors">
                  <Icon name="ArrowUpRight" size={16} />
                </span>
              </Link>
              <Link
                to="/get-started"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-foreground/15 text-foreground/80 hover:text-foreground hover:border-foreground/40 transition-all duration-300"
              >
                Take the growth assessment
                <Icon name="ArrowRight" size={16} />
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="relative py-24 lg:py-32 mt-12 bg-card/30 border-t border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-foreground/60 uppercase mb-4">
                <span className="w-8 h-px bg-foreground/40" />
                Company information
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-[1.05] tracking-tight">
                Legal entity &amp;{' '}
                <span className="font-serif-accent italic">business identification.</span>
              </h2>
              <p className="mt-4 text-foreground/70">
                Required disclosures under Polish commercial law and EU Directive 2000/31/EC on electronic
                commerce.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <div className="rounded-3xl border border-border bg-card p-8">
                <h3 className="font-display text-xl font-bold mb-5">Registered entity</h3>
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-foreground/60">Legal name</dt>
                    <dd className="text-foreground font-medium">Travomate Sp. z o.o.</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-foreground/60">Trading as</dt>
                    <dd className="text-foreground font-medium">Descale Agency</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-foreground/60">Registered office</dt>
                    <dd className="text-foreground font-medium text-right">
                      ul. Nowogrodzka 31<br />00-511 Warszawa, Poland
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-foreground/60">NIP (tax ID)</dt>
                    <dd className="text-foreground font-medium">7011239205</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-foreground/60">Country</dt>
                    <dd className="text-foreground font-medium">Poland (EU)</dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-3xl border border-border bg-card p-8">
                <h3 className="font-display text-xl font-bold mb-5">Compliance</h3>
                <ul className="space-y-3 text-sm text-foreground/75">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-0.5 shrink-0" />
                    <span>EU GDPR (Regulation 2016/679) data controller</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-0.5 shrink-0" />
                    <span>Polish Personal Data Protection Act (10 May 2018)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-0.5 shrink-0" />
                    <span>EU ePrivacy Directive 2002/58/EC and Polish Telecommunications Law (Art. 173)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-0.5 shrink-0" />
                    <span>EU Digital Services Act (Regulation 2022/2065)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-0.5 shrink-0" />
                    <span>EU Accessibility Act (Directive 2019/882)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-0.5 shrink-0" />
                    <span>WCAG 2.2 AA accessibility</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
