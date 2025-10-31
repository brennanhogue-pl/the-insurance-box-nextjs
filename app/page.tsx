'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="title-main">Protecting What</span>
              <span className="title-accent" data-text="Matters Most">
                Matters Most
              </span>
            </h1>
            <p className="hero-description">
              Simple, personalized coverage for your family. We compare top carriers and guide you
              to the right plan.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" aria-label="Get your free insurance quote">
                Get Your Quote
              </button>
              <button
                className="btn-secondary"
                onClick={() =>
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
                }
                aria-label="Explore our insurance services"
              >
                Explore Services
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">1,200+</span>
                <span className="stat-label">Families Served</span>
              </div>
              <div className="stat">
                <span className="stat-number">15</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">A+</span>
                <span className="stat-label">Top Carriers</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-container">
              <Image
                src="/hero-image.png"
                alt="The Insurance Box - Professional Insurance Services"
                width={600}
                height={600}
                className="hero-image"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Insurance Solutions</h2>
            <p className="section-subtitle">
              Professional guidance tailored to your needs and your family's future
            </p>
          </div>
          <div className="services-grid">
            <ServiceCard
              icon="/icons/yellow-lock.png"
              title="Life Insurance"
              description="Secure your family's financial future with personalized life insurance coverage that protects what matters most."
              features={[
                'Term & whole life options',
                'Competitive rates',
                'Flexible coverage amounts',
                'Expert guidance',
              ]}
              href="/life-insurance"
            />
            <ServiceCard
              icon="/icons/blue-megaphone.svg"
              title="Health Insurance"
              description="Find the right health insurance plan for you and your family with comprehensive coverage options."
              features={[
                'Individual & family plans',
                'Marketplace navigation',
                'Subsidy assistance',
                'Plan comparison',
              ]}
              href="/health-insurance"
            />
            <ServiceCard
              icon="/icons/yellow-document.svg"
              title="Medicare"
              description="Navigate Medicare with confidence. We help you understand your options and choose the right plan."
              features={[
                'Medicare Supplement plans',
                'Medicare Advantage',
                'Part D prescription coverage',
                'Annual enrollment help',
              ]}
              href="/medicare"
            />
            <ServiceCard
              icon="/icons/blue-hand-coins.svg"
              title="Long-Term Care"
              description="Protect your independence and assets with comprehensive long-term care insurance solutions."
              features={[
                'In-home care coverage',
                'Nursing home protection',
                'Asset preservation',
                'Family peace of mind',
              ]}
              href="/long-term-care"
            />
            <ServiceCard
              icon="/icons/yellow-lock.png"
              title="Disability Insurance"
              description="Protect your income and maintain your lifestyle if you're unable to work due to illness or injury."
              features={[
                'Short & long-term coverage',
                'Income replacement',
                'Benefit period options',
                'Affordable premiums',
              ]}
              href="/disability-insurance"
            />
            <ServiceCard
              icon="/icons/blue-dollar.svg"
              title="Annuities"
              description="Build a secure retirement income stream with our range of annuity products and expert guidance."
              features={[
                'Fixed & variable annuities',
                'Guaranteed income options',
                'Tax-deferred growth',
                'Retirement planning',
              ]}
              href="/annuities"
            />
            <ServiceCard
              icon="/icons/yellow-computer.svg"
              title="Financial Planning"
              description="Comprehensive financial planning and investment guidance to help you achieve your financial goals."
              features={[
                'Retirement planning',
                'Investment strategies',
                'Risk assessment',
                'Portfolio management',
              ]}
              href="/financial-planning"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">Why Choose The Insurance Box?</h2>
              <p className="about-description">
                With over 15 years of experience in the insurance industry, we've built our reputation
                on trust, reliability, and exceptional customer service. Our team of expert agents works
                tirelessly to find you the perfect coverage at the best possible rates.
              </p>
              <div className="about-features">
                <div className="feature">
                  <div className="feature-icon">⚡</div>
                  <div className="feature-content">
                    <h4>Fast Claims Processing</h4>
                    <p>Get your claims processed quickly with our streamlined digital process.</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature-icon">🤝</div>
                  <div className="feature-content">
                    <h4>Personal Agent Support</h4>
                    <p>Work directly with dedicated agents who understand your unique needs.</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature-icon">💰</div>
                  <div className="feature-content">
                    <h4>Competitive Rates</h4>
                    <p>Save money with our competitive rates and multi-policy discounts.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Get Started Today</h2>
            <p className="section-subtitle">
              Reach out to discuss your insurance needs and get a free, no-obligation quote
            </p>
          </div>
          <div className="contact-content">
            <form className="contact-form">
              <div className="form-row">
                <input type="text" placeholder="First Name" className="form-input" required />
                <input type="text" placeholder="Last Name" className="form-input" required />
              </div>
              <div className="form-row">
                <input type="email" placeholder="Email" className="form-input" required />
                <input type="tel" placeholder="Phone" className="form-input" required />
              </div>
              <textarea placeholder="Tell us about your insurance needs..." className="form-textarea" rows={5} required></textarea>
              <button type="submit" className="btn-primary">
                Request Quote
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceCard({
  icon,
  title,
  description,
  features,
  href,
}: {
  icon: string;
  title: string;
  description: string;
  features: string[];
  href: string;
}) {
  return (
    <div className="service-card">
      <div className="service-icon">
        <Image src={icon} alt={`${title} Icon`} width={60} height={60} className="service-icon-img" loading="lazy" />
      </div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
      <ul className="service-features">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <Link href={href} className="service-btn" aria-label={`Learn more about ${title.toLowerCase()}`}>
        Learn More
      </Link>
    </div>
  );
}
