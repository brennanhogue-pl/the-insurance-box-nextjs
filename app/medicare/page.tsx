'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Medicare() {
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
              <Link href="/">Home</Link> / <span>Medicare</span>
            </div>
            <h1 className="service-hero-title">
              <span className="service-icon-large">🏥</span>
              Medicare
            </h1>
            <p className="service-hero-description">
              Navigate Medicare with confidence. We help you understand your options and choose the right plan.
              Medicare Supplement plans, Medicare Advantage, and Part D prescription coverage.
            </p>
            <div className="service-hero-stats">
              <div className="stat">
                <span className="stat-number">100+</span>
                <span className="stat-label">Plan Options</span>
              </div>
              <div className="stat">
                <span className="stat-number">$200/mo</span>
                <span className="stat-label">Average Premium</span>
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
      <section className="coverage-options" id="coverage-options">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Medicare Coverage Options</h2>
            <p className="section-subtitle">Learn how Parts A, B, C, D and Medigap work together</p>
          </div>
          <div className="coverage-grid">
            <div className="coverage-card" id="part-a">
              <div className="coverage-header">
                <h3>Part A — Hospital Insurance</h3>
                <div className="coverage-price">Premium: <span>$0 for most</span></div>
              </div>
              <div className="coverage-icon">🏥</div>
              <p className="coverage-description">
                Helps cover inpatient hospital stays, skilled nursing facility care, hospice,
                and limited home health care under Original Medicare.
              </p>
              <ul className="coverage-features">
                <li>Inpatient hospital and skilled nursing facility coverage</li>
                <li>Hospice care benefits</li>
                <li>Limited home health services</li>
                <li>Costs include deductibles and coinsurance</li>
              </ul>
              <div className="coverage-best-for">
                <strong>Best for:</strong> Hospital-related coverage with Original Medicare
              </div>
            </div>

            <div className="coverage-card" id="part-b">
              <div className="coverage-header">
                <h3>Part B — Medical Insurance</h3>
                <div className="coverage-price">Premium: <span>Monthly (set by Medicare)</span></div>
              </div>
              <div className="coverage-icon">👩‍⚕️</div>
              <p className="coverage-description">
                Covers doctor visits, outpatient care, preventive services, lab work,
                imaging, and durable medical equipment.
              </p>
              <ul className="coverage-features">
                <li>Outpatient visits and specialist care</li>
                <li>Preventive screenings and vaccines</li>
                <li>80/20 cost share after deductible (most services)</li>
                <li>Durable medical equipment</li>
              </ul>
              <div className="coverage-best-for">
                <strong>Best for:</strong> Day-to-day medical needs with Original Medicare
              </div>
            </div>

            <div className="coverage-card featured" id="part-c">
              <div className="coverage-badge">Most Popular</div>
              <div className="coverage-header">
                <h3>Part C — Medicare Advantage</h3>
                <div className="coverage-price">Premiums: <span>$0 on many plans</span></div>
              </div>
              <div className="coverage-icon">🌐</div>
              <p className="coverage-description">
                All-in-one private plans that combine Part A and Part B, and often Part D.
                Many include dental, vision, hearing, and other extra benefits.
              </p>
              <ul className="coverage-features">
                <li>HMO and PPO networks with out-of-pocket maximums</li>
                <li>Drug coverage included on many plans</li>
                <li>Extra benefits like dental, vision, and hearing</li>
                <li>Local and nationwide network options</li>
              </ul>
              <div className="coverage-best-for">
                <strong>Best for:</strong> Simpler bundled coverage and predictable costs
              </div>
            </div>

            <div className="coverage-card" id="part-d">
              <div className="coverage-header">
                <h3>Part D — Prescription Drugs</h3>
                <div className="coverage-price">Premiums: <span>Vary by plan</span></div>
              </div>
              <div className="coverage-icon">💊</div>
              <p className="coverage-description">
                Stand-alone drug plans (or included in many Advantage plans) that help pay
                for prescription medications. Formularies and pharmacy networks apply.
              </p>
              <ul className="coverage-features">
                <li>Covers generic and brand-name drugs</li>
                <li>Tiered formularies and preferred pharmacies</li>
                <li>Deductible and coverage stages may apply</li>
                <li>Late enrollment penalties without creditable coverage</li>
              </ul>
              <div className="coverage-best-for">
                <strong>Best for:</strong> Anyone who takes prescription medications
              </div>
            </div>

            <div className="coverage-card" id="medigap">
              <div className="coverage-header">
                <h3>Medigap — Medicare Supplement</h3>
                <div className="coverage-price">Premiums: <span>Vary by age/location</span></div>
              </div>
              <div className="coverage-icon">🛡️</div>
              <p className="coverage-description">
                Private plans that help pay Part A & B deductibles, copays, and coinsurance
                while you keep Original Medicare and freedom to see any Medicare provider.
              </p>
              <ul className="coverage-features">
                <li>Use any doctor who accepts Medicare</li>
                <li>No network referrals required</li>
                <li>Standardized plan options (e.g., G, N)</li>
                <li>Does not include drug coverage (pair with Part D)</li>
              </ul>
              <div className="coverage-best-for">
                <strong>Best for:</strong> Lowest out-of-pocket costs and broad provider choice
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section" id="faq">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Medicare FAQ</h2>
            <p className="section-subtitle">Clear answers to common Medicare questions</p>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h3 className="faq-question">When can I enroll in Medicare?</h3>
              <p className="faq-answer">
                Your Initial Enrollment Period starts 3 months before your 65th birthday month
                and lasts 7 months total. Annual Enrollment (Oct 15–Dec 7) is when you can
                switch Part D or Medicare Advantage plans for the next year. Special Enrollment
                Periods apply if you lose employer coverage or move.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Medigap vs. Medicare Advantage — what&apos;s the difference?</h3>
              <p className="faq-answer">
                Medigap pairs with Original Medicare (Parts A & B) to cover deductibles and
                coinsurance. You can see any provider that accepts Medicare; you add a Part D
                drug plan separately. Medicare Advantage replaces Original Medicare with a
                private plan (often includes drug coverage and extras) but uses provider
                networks and plan rules.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Do I need Part D if I don&apos;t take medications?</h3>
              <p className="faq-answer">
                You can delay Part D, but if you go 63+ days without creditable drug coverage
                after your Initial Enrollment Period, a late enrollment penalty may apply when
                you sign up later. Many people choose a low-cost Part D plan to avoid penalties.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Can I keep my doctors?</h3>
              <p className="faq-answer">
                With Original Medicare + Medigap, you can see any doctor that accepts Medicare
                nationwide. With Medicare Advantage, you typically use in-network providers to
                get the lowest costs. We&apos;ll check your doctors and hospitals against plan
                networks for you.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">How do prescriptions work on Medicare?</h3>
              <p className="faq-answer">
                Drug coverage is through Part D (stand-alone) or included in many Advantage
                plans. Each plan has a formulary, tiers, and preferred pharmacies that affect
                your costs. We&apos;ll run your medication list to estimate monthly costs.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">What happens if I delay Part B?</h3>
              <p className="faq-answer">
                If you delay Part B without qualifying employer coverage, you may owe a
                permanent late enrollment penalty and have to wait for the General Enrollment
                Period to sign up. Talk with us before you delay to avoid penalties.
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
              <h2 className="section-title">Ready to Review Your Medicare Options?</h2>
              <p className="contact-description">
                Our licensed Medicare agents compare Original Medicare + Medigap + Part D versus
                Medicare Advantage, check your doctors and drugs, and guide your enrollment.
              </p>
              <div className="contact-benefits">
                <div className="contact-benefit">
                  <div className="benefit-icon">✓</div>
                  <span>Free Medicare plan comparison</span>
                </div>
                <div className="contact-benefit">
                  <div className="benefit-icon">✓</div>
                  <span>Doctor and prescription list review</span>
                </div>
                <div className="contact-benefit">
                  <div className="benefit-icon">✓</div>
                  <span>Medigap rate shopping</span>
                </div>
                <div className="contact-benefit">
                  <div className="benefit-icon">✓</div>
                  <span>AEP/OEP/SEP enrollment support</span>
                </div>
              </div>
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">📞</div>
                  <div className="method-content">
                    <h4>Call for Medicare Help</h4>
                    <p><strong>(385) 248-0612</strong><br />8AM-6PM M-F</p>
                  </div>
                </div>
                <div className="contact-method">
                  <div className="method-icon">✉️</div>
                  <div className="method-content">
                    <h4>Email Medicare Team</h4>
                    <p><strong>medicare@theinsurancebox.com</strong><br />Get a response within 2 hours</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form className="quote-form">
                <h3>Get Your Medicare Plan Review</h3>
                <div className="form-row">
                  <input type="text" placeholder="First Name" required />
                  <input type="text" placeholder="Last Name" required />
                </div>
                <div className="form-row">
                  <input type="email" placeholder="Email Address" required />
                  <input type="tel" placeholder="Phone Number" required />
                </div>
                <div className="form-row">
                  <input type="text" placeholder="Medicare Start Month (MM/YYYY)" required />
                  <select required>
                    <option value="">Enrollment Status</option>
                    <option value="turning65">Turning 65 soon</option>
                    <option value="on-medicare">Already on Medicare</option>
                    <option value="leaving-employer">Leaving employer/retiring</option>
                    <option value="disability">Disability/SSDI</option>
                  </select>
                </div>
                <select required>
                  <option value="">Interested In</option>
                  <option value="advantage">Medicare Advantage (Part C)</option>
                  <option value="medigap">Medigap + Part D</option>
                  <option value="part-d">Part D only</option>
                  <option value="unsure">Not sure - need guidance</option>
                </select>
                <textarea placeholder="List your doctors and prescriptions (optional)..." rows={4}></textarea>
                <button type="submit" className="btn-primary">Start My Medicare Review</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
