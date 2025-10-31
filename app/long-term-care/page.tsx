'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function LongTermCare() {
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
              <Link href="/">Home</Link> / <span>Long-Term Care</span>
            </div>
            <h1 className="service-hero-title">
              <span className="service-icon-large">🏥</span>
              Long-Term Care Insurance
            </h1>
            <p className="service-hero-description">
              Protect your independence and assets with comprehensive long-term care insurance.
              Coverage for in-home care, nursing homes, and asset preservation for peace of mind.
            </p>
            <div className="service-hero-stats">
              <div className="stat">
                <span className="stat-number">Up to $400/day</span>
                <span className="stat-label">Daily Benefit Options</span>
              </div>
              <div className="stat">
                <span className="stat-number">30–180 days</span>
                <span className="stat-label">Elimination Periods</span>
              </div>
              <div className="stat">
                <span className="stat-number">1–6 years</span>
                <span className="stat-label">Benefit Periods</span>
              </div>
            </div>
            <div className="service-hero-buttons">
              <button className="btn-primary large" onClick={scrollToCalculator}>Estimate Costs</button>
              <button className="btn-secondary large" onClick={scrollToContact}>Speak with Agent</button>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Options */}
      <section className="coverage-options" id="coverage-options">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Long-Term Care Coverage Types</h2>
            <p className="section-subtitle">Choose the coverage that matches your care goals, budget, and family plan</p>
          </div>
          <div className="coverage-grid">
            <div className="coverage-card">
              <div className="coverage-header">
                <h3>Traditional LTC Insurance</h3>
                <div className="coverage-price">Benefit-focused <span>custom premiums</span></div>
              </div>
              <div className="coverage-icon">🛡️</div>
              <p className="coverage-description">
                Pure long-term care coverage that pays a daily or monthly benefit for
                qualified care at home, in assisted living, or in a nursing facility.
              </p>
              <ul className="coverage-features">
                <li>Choose daily/monthly benefit amount</li>
                <li>Select 1–6 year benefit period</li>
                <li>Pick elimination period (30–180 days)</li>
                <li>Optional inflation protection (3%–5% compound)</li>
                <li>Shared care and return-of-premium riders available</li>
              </ul>
              <div className="coverage-best-for">
                <strong>Best for:</strong> Maximum care value with flexible benefits
              </div>
            </div>

            <div className="coverage-card featured">
              <div className="coverage-badge">Popular</div>
              <div className="coverage-header">
                <h3>Hybrid Life + LTC</h3>
                <div className="coverage-price">Asset-based <span>with guarantees</span></div>
              </div>
              <div className="coverage-icon">🔁</div>
              <p className="coverage-description">
                Combines permanent life insurance with long-term care benefits so your
                money provides value whether you need care or not.
              </p>
              <ul className="coverage-features">
                <li>Use for care, leave to heirs, or both</li>
                <li>Premiums often guaranteed</li>
                <li>Lump-sum or pay-over-time options</li>
                <li>Inflation riders available</li>
                <li>Cash value and death benefit</li>
              </ul>
              <div className="coverage-best-for">
                <strong>Best for:</strong> People wanting guarantees and legacy planning
              </div>
            </div>

            <div className="coverage-card">
              <div className="coverage-header">
                <h3>Short-Term Care</h3>
                <div className="coverage-price">Lower-cost <span>limited duration</span></div>
              </div>
              <div className="coverage-icon">⏳</div>
              <p className="coverage-description">
                More affordable coverage that helps with the first months of care,
                often easier to qualify for than traditional LTC.
              </p>
              <ul className="coverage-features">
                <li>Benefit periods up to 12 months</li>
                <li>Home health and facility care options</li>
                <li>Flexible elimination periods</li>
                <li>May accept certain health conditions</li>
                <li>Can complement existing savings</li>
              </ul>
              <div className="coverage-best-for">
                <strong>Best for:</strong> Budget-conscious or those needing lighter coverage
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section" id="faq">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Long-Term Care FAQ</h2>
            <p className="section-subtitle">Clear answers to common long-term care questions</p>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h3 className="faq-question">What is long-term care?</h3>
              <p className="faq-answer">
                Help with everyday activities like bathing, dressing, and eating. It can
                be provided at home, in assisted living, or in a nursing facility.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Who needs long-term care coverage?</h3>
              <p className="faq-answer">
                Most people who live a long life will need some care. Planning ahead helps
                protect savings and gives you more choices for where and how you receive care.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">When should I buy?</h3>
              <p className="faq-answer">
                Many people explore coverage in their 50s or early 60s while they are
                healthy and premiums are more affordable.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">What does it cover?</h3>
              <p className="faq-answer">
                Care at home, adult day care, assisted living, memory care, and nursing
                facilities when you meet benefit triggers (like help needed with 2+ ADLs).
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">What is an elimination period?</h3>
              <p className="faq-answer">
                It&apos;s the waiting period before benefits begin (like a deductible in time).
                Common options are 30, 60, 90, or 180 days.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">How does inflation protection work?</h3>
              <p className="faq-answer">
                An optional rider that increases your benefits each year (like 3% or 5%
                compound) so your coverage grows with care costs.
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
              <h2 className="section-title">Ready to Plan for Long-Term Care?</h2>
              <p className="contact-description">
                Our licensed specialists will help you design a plan that fits your goals
                and budget, and explain options in plain language.
              </p>
              <div className="contact-benefits">
                <div className="contact-benefit">
                  <div className="benefit-icon">✓</div>
                  <span>Personalized plan design</span>
                </div>
                <div className="contact-benefit">
                  <div className="benefit-icon">✓</div>
                  <span>Carrier and option comparisons</span>
                </div>
                <div className="contact-benefit">
                  <div className="benefit-icon">✓</div>
                  <span>Medicaid coordination guidance</span>
                </div>
                <div className="contact-benefit">
                  <div className="benefit-icon">✓</div>
                  <span>Claims and policy support</span>
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
                    <p><strong>ltc@theinsurancebox.com</strong><br />Get a response within 2 hours</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form className="quote-form">
                <h3>Get Your Long-Term Care Quote</h3>
                <div className="form-row">
                  <input type="text" placeholder="First Name" required />
                  <input type="text" placeholder="Last Name" required />
                </div>
                <div className="form-row">
                  <input type="email" placeholder="Email Address" required />
                  <input type="tel" placeholder="Phone Number" required />
                </div>
                <div className="form-row">
                  <input type="number" placeholder="Age" required />
                  <input type="text" placeholder="State" required />
                </div>
                <select required>
                  <option value="">Coverage Type</option>
                  <option value="traditional">Traditional LTC Insurance</option>
                  <option value="hybrid">Hybrid Life + LTC</option>
                  <option value="short-term">Short-Term Care</option>
                  <option value="unsure">Not sure - need guidance</option>
                </select>
                <textarea placeholder="Tell us about your care preferences (home care, assisted living, budget)..." rows={4}></textarea>
                <button type="submit" className="btn-primary">Get My Long-Term Care Quote</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
