'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function LifeInsurance() {
  const scrollToCalculator = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <div className="breadcrumb">
              <Link href="/">Home</Link> / <span>Life Insurance</span>
            </div>
            <h1 className="service-hero-title">
              <span className="service-icon-large">❤️</span>
              Life Insurance
            </h1>
            <p className="service-hero-description">
              Protect your family&apos;s financial future with comprehensive life insurance coverage.
              Whether you need term life for temporary needs or whole life for permanent protection,
              we&apos;ll help you find the right policy at the right price.
            </p>
            <div className="service-hero-stats">
              <div className="stat">
                <span className="stat-number">$500K+</span>
                <span className="stat-label">Average Coverage</span>
              </div>
              <div className="stat">
                <span className="stat-number">$30/mo</span>
                <span className="stat-label">Starting Premiums</span>
              </div>
              <div className="stat">
                <span className="stat-number">24hrs</span>
                <span className="stat-label">Quick Approval</span>
              </div>
            </div>
            <div className="service-hero-buttons">
              <button className="btn-primary large" onClick={scrollToCalculator}>Calculate Your Needs</button>
              <button className="btn-secondary large" onClick={scrollToContact}>Speak with Agent</button>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Options */}
      <section className="coverage-options">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Life Insurance Options</h2>
            <p className="section-subtitle">Choose the coverage that fits your family&apos;s needs and budget</p>
          </div>
          <div className="coverage-grid">
            <div className="coverage-card">
              <div className="coverage-header">
                <h3>Term Life Insurance</h3>
                <div className="coverage-price">Starting at <span>$25/month</span></div>
              </div>
              <div className="coverage-icon">⏰</div>
              <p className="coverage-description">
                Affordable protection for a specific period (10, 20, or 30 years).
                Perfect for young families and those with temporary financial obligations.
              </p>
              <ul className="coverage-features">
                <li>Lower premiums than whole life</li>
                <li>Coverage periods: 10, 20, 30 years</li>
                <li>Convertible to permanent coverage</li>
                <li>Level premiums during term</li>
                <li>No medical exam options available</li>
              </ul>
              <div className="coverage-best-for">
                <strong>Best for:</strong> Young families, mortgage protection, temporary needs
              </div>
            </div>

            <div className="coverage-card featured">
              <div className="coverage-badge">Most Popular</div>
              <div className="coverage-header">
                <h3>Whole Life Insurance</h3>
                <div className="coverage-price">Starting at <span>$75/month</span></div>
              </div>
              <div className="coverage-icon">🏛️</div>
              <p className="coverage-description">
                Permanent protection with cash value that grows over time.
                Provides lifelong coverage with guaranteed premiums.
              </p>
              <ul className="coverage-features">
                <li>Guaranteed death benefit</li>
                <li>Cash value accumulation</li>
                <li>Fixed premiums for life</li>
                <li>Dividend potential</li>
                <li>Policy loans available</li>
              </ul>
              <div className="coverage-best-for">
                <strong>Best for:</strong> Estate planning, permanent protection, wealth transfer
              </div>
            </div>

            <div className="coverage-card">
              <div className="coverage-header">
                <h3>Universal Life Insurance</h3>
                <div className="coverage-price">Starting at <span>$50/month</span></div>
              </div>
              <div className="coverage-icon">🔄</div>
              <p className="coverage-description">
                Flexible permanent life insurance with adjustable premiums and death benefits.
                Cash value earns interest based on current rates.
              </p>
              <ul className="coverage-features">
                <li>Flexible premium payments</li>
                <li>Adjustable death benefit</li>
                <li>Interest-sensitive cash value</li>
                <li>Transparency in costs</li>
                <li>Investment options available</li>
              </ul>
              <div className="coverage-best-for">
                <strong>Best for:</strong> Those wanting flexibility, retirement planning
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Get answers to common life insurance questions</p>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h3 className="faq-question">How much life insurance do I need?</h3>
              <p className="faq-answer">
                A general rule is 10-12 times your annual income, but it depends on your debts,
                family size, and financial goals. Our calculator and agents can help determine
                the right amount for your situation.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">What&apos;s the difference between term and whole life?</h3>
              <p className="faq-answer">
                Term life provides temporary coverage at lower cost, while whole life offers
                permanent protection with cash value accumulation. Term is ideal for temporary
                needs, whole life for long-term wealth planning.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Do I need a medical exam?</h3>
              <p className="faq-answer">
                Not always. We offer no-exam policies up to certain coverage amounts.
                For larger policies, a simple medical exam may be required, but we make
                the process as convenient as possible.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">How quickly can I get coverage?</h3>
              <p className="faq-answer">
                Many policies can be approved within 24-48 hours for healthy applicants.
                Some no-exam policies offer instant approval with immediate coverage.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Can I change my coverage later?</h3>
              <p className="faq-answer">
                Yes, many policies offer flexibility. Term policies can often be converted
                to permanent coverage, and some policies allow you to increase coverage
                without additional underwriting.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">What if I have health issues?</h3>
              <p className="faq-answer">
                We work with multiple insurance companies to find coverage even for those
                with health conditions. Options include simplified issue and guaranteed
                acceptance policies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="service-contact" id="contact">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2 className="section-title">Ready to Protect Your Family?</h2>
              <p className="contact-description">
                Our licensed life insurance specialists are here to help you find the
                perfect coverage for your family&apos;s needs and budget.
              </p>
              <div className="contact-benefits">
                <div className="contact-benefit">
                  <div className="benefit-icon">✓</div>
                  <span>No-obligation quotes</span>
                </div>
                <div className="contact-benefit">
                  <div className="benefit-icon">✓</div>
                  <span>Compare multiple carriers</span>
                </div>
                <div className="contact-benefit">
                  <div className="benefit-icon">✓</div>
                  <span>Expert guidance throughout</span>
                </div>
                <div className="contact-benefit">
                  <div className="benefit-icon">✓</div>
                  <span>Fast application process</span>
                </div>
              </div>
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">📞</div>
                  <div className="method-content">
                    <h4>Call for Immediate Help</h4>
                    <p><strong>(385) 248-0612</strong><br />8AM-6PM M-F</p>
                  </div>
                </div>
                <div className="contact-method">
                  <div className="method-icon">✉️</div>
                  <div className="method-content">
                    <h4>Email Us</h4>
                    <p><strong>life@theinsurancebox.com</strong><br />Get a response within 2 hours</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form className="quote-form">
                <h3>Get Your Life Insurance Quote</h3>
                <div className="form-row">
                  <input type="text" placeholder="First Name" required />
                  <input type="text" placeholder="Last Name" required />
                </div>
                <div className="form-row">
                  <input type="email" placeholder="Email Address" required />
                  <input type="tel" placeholder="Phone Number" required />
                </div>
                <div className="form-row">
                  <input type="date" placeholder="Date of Birth" required />
                  <select required>
                    <option value="">Coverage Amount Needed</option>
                    <option value="100000">$100,000</option>
                    <option value="250000">$250,000</option>
                    <option value="500000">$500,000</option>
                    <option value="750000">$750,000</option>
                    <option value="1000000">$1,000,000</option>
                    <option value="more">More than $1M</option>
                  </select>
                </div>
                <select required>
                  <option value="">Type of Coverage Interested In</option>
                  <option value="term">Term Life Insurance</option>
                  <option value="whole">Whole Life Insurance</option>
                  <option value="universal">Universal Life Insurance</option>
                  <option value="unsure">Not sure - need guidance</option>
                </select>
                <textarea placeholder="Tell us about your family's protection needs..." rows={4}></textarea>
                <button type="submit" className="btn-primary">Get My Life Insurance Quote</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
