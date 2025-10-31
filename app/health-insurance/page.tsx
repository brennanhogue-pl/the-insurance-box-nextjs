'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function HealthInsurance() {
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
              <Link href="/">Home</Link> / <span>Health Insurance</span>
            </div>
            <h1 className="service-hero-title">
              <span className="service-icon-large">🏥</span>
              Health Insurance
            </h1>
            <p className="service-hero-description">
              Find the right health insurance plan for you and your family. We&apos;ll help you navigate
              the marketplace, understand your options, and secure quality coverage you can afford.
            </p>
            <div className="service-hero-stats">
              <div className="stat">
                <span className="stat-number">ACA</span>
                <span className="stat-label">Compliant Plans</span>
              </div>
              <div className="stat">
                <span className="stat-number">0–8.5%</span>
                <span className="stat-label">Income-Based Cap</span>
              </div>
              <div className="stat">
                <span className="stat-number">Free</span>
                <span className="stat-label">Plan Comparison</span>
              </div>
            </div>
            <div className="service-hero-buttons">
              <button className="btn-primary large" onClick={scrollToCalculator}>Compare Plans</button>
              <button className="btn-secondary large" onClick={scrollToContact}>Speak with Agent</button>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Options */}
      <section className="coverage-options">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Health Insurance Plan Types</h2>
            <p className="section-subtitle">Choose the plan type that best fits your healthcare needs and budget</p>
          </div>
          <div className="coverage-grid">
            <div className="coverage-card">
              <div className="coverage-header">
                <h3>HMO Plans</h3>
                <div className="coverage-price">Costs vary by age and location</div>
              </div>
              <div className="coverage-icon">🏥</div>
              <p className="coverage-description">
                Health Maintenance Organization plans offer comprehensive care through
                a network of providers with lower out-of-pocket costs.
              </p>
              <ul className="coverage-features">
                <li>Lower monthly premiums</li>
                <li>Primary care physician required</li>
                <li>Referrals needed for specialists</li>
                <li>Lower out-of-pocket costs</li>
                <li>Preventive care covered 100%</li>
              </ul>
              <div className="coverage-best-for">
                <strong>Best for:</strong> Budget-conscious families, routine healthcare needs
              </div>
            </div>

            <div className="coverage-card featured">
              <div className="coverage-badge">Most Popular</div>
              <div className="coverage-header">
                <h3>PPO Plans</h3>
                <div className="coverage-price">Costs vary by age and location</div>
              </div>
              <div className="coverage-icon">🌐</div>
              <p className="coverage-description">
                Preferred Provider Organization plans offer flexibility to see any provider
                while providing better coverage for in-network care.
              </p>
              <ul className="coverage-features">
                <li>No referrals needed</li>
                <li>Out-of-network coverage available</li>
                <li>Higher flexibility</li>
                <li>Direct specialist access</li>
                <li>Nationwide provider networks</li>
              </ul>
              <div className="coverage-best-for">
                <strong>Best for:</strong> Those wanting flexibility, frequent travelers
              </div>
            </div>

            <div className="coverage-card">
              <div className="coverage-header">
                <h3>High Deductible Plans</h3>
                <div className="coverage-price">Costs vary by age and location</div>
              </div>
              <div className="coverage-icon">💰</div>
              <p className="coverage-description">
                High Deductible Health Plans paired with Health Savings Accounts
                offer lower premiums and tax advantages.
              </p>
              <ul className="coverage-features">
                <li>Lower monthly premiums</li>
                <li>HSA eligible</li>
                <li>Tax-deductible contributions</li>
                <li>Preventive care covered 100%</li>
                <li>Catastrophic protection</li>
              </ul>
              <div className="coverage-best-for">
                <strong>Best for:</strong> Healthy individuals, those building savings
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Health Insurance FAQ</h2>
            <p className="section-subtitle">Get answers to common health insurance questions</p>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h3 className="faq-question">When can I enroll in health insurance?</h3>
              <p className="faq-answer">
                Open enrollment is typically November 1 - January 15. You can also enroll during
                special enrollment periods if you have qualifying life events like marriage,
                job loss, or moving.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">What&apos;s the difference between deductible and out-of-pocket max?</h3>
              <p className="faq-answer">
                Your deductible is what you pay before insurance starts covering costs.
                The out-of-pocket maximum is the most you&apos;ll pay in a year, including
                deductibles, copays, and coinsurance.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Do I qualify for premium tax credits?</h3>
              <p className="faq-answer">
                Many households qualify for premium tax credits based on income and family size.
                Under current law, the share you&apos;re expected to contribute toward the benchmark
                silver plan is capped on a sliding scale from 0% up to 8.5% of household income
                (through 2025, subject to change). Eligibility also depends on whether you have
                access to affordable employer coverage.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">What if my doctor isn&apos;t in network?</h3>
              <p className="faq-answer">
                Out-of-network care typically costs more. Check provider networks before
                enrolling, or consider plans with out-of-network benefits if seeing
                specific doctors is important to you.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Are prescription drugs covered?</h3>
              <p className="faq-answer">
                Most health plans cover prescription drugs, but coverage varies by plan.
                Check the plan&apos;s formulary to see if your medications are covered and
                what tier they&apos;re on.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">What&apos;s covered under preventive care?</h3>
              <p className="faq-answer">
                Preventive services like annual checkups, vaccinations, and screenings
                are covered 100% by most plans when you use in-network providers.
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
              <h2 className="section-title">Ready to Find Your Health Plan?</h2>
              <p className="contact-description">
                Our licensed health insurance specialists will help you navigate the marketplace
                and find quality coverage that fits your needs and budget.
              </p>
              <div className="contact-benefits">
                <div className="contact-benefit">
                  <div className="benefit-icon">✓</div>
                  <span>Free plan comparison</span>
                </div>
                <div className="contact-benefit">
                  <div className="benefit-icon">✓</div>
                  <span>Subsidy calculation assistance</span>
                </div>
                <div className="contact-benefit">
                  <div className="benefit-icon">✓</div>
                  <span>Provider network verification</span>
                </div>
                <div className="contact-benefit">
                  <div className="benefit-icon">✓</div>
                  <span>Year-round enrollment support</span>
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
                    <p><strong>health@theinsurancebox.com</strong><br />Get a response within 2 hours</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form className="quote-form">
                <h3>Get Your Health Insurance Quote</h3>
                <div className="form-row">
                  <input type="text" placeholder="First Name" required />
                  <input type="text" placeholder="Last Name" required />
                </div>
                <div className="form-row">
                  <input type="email" placeholder="Email Address" required />
                  <input type="tel" placeholder="Phone Number" required />
                </div>
                <div className="form-row">
                  <input type="number" placeholder="Household Income" required />
                  <select required>
                    <option value="">Family Size</option>
                    <option value="1">1 person</option>
                    <option value="2">2 people</option>
                    <option value="3">3 people</option>
                    <option value="4">4 people</option>
                    <option value="5plus">5+ people</option>
                  </select>
                </div>
                <select required>
                  <option value="">Type of Plan Interested In</option>
                  <option value="hmo">HMO Plan</option>
                  <option value="ppo">PPO Plan</option>
                  <option value="hdhp">High Deductible Plan</option>
                  <option value="unsure">Not sure - need guidance</option>
                </select>
                <textarea placeholder="Tell us about your healthcare needs..." rows={4}></textarea>
                <button type="submit" className="btn-primary">Get My Health Insurance Quote</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
