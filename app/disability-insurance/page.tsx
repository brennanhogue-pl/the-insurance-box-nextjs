'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function DisabilityInsurance() {
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
              <Link href="/">Home</Link> / <span>Disability Insurance</span>
            </div>
            <h1 className="service-hero-title">
              <span className="service-icon-large">🛡️</span>
              Disability Insurance
            </h1>
            <p className="service-hero-description">
              Replace a portion of your paycheck if you can&apos;t work due to illness or injury.
              Explore short-term and long-term coverage with options tailored to your occupation and income.
            </p>
            <div className="service-hero-stats">
              <div className="stat">
                <span className="stat-number">20+</span>
                <span className="stat-label">Top Carriers</span>
              </div>
              <div className="stat">
                <span className="stat-number">1–3%</span>
                <span className="stat-label">Typical Premium (of income)</span>
              </div>
              <div className="stat">
                <span className="stat-number">Free</span>
                <span className="stat-label">Consultation</span>
              </div>
            </div>
            <div className="service-hero-buttons">
              <button className="btn-primary large" onClick={scrollToCalculator}>Estimate Benefit</button>
              <button className="btn-secondary large" onClick={scrollToContact}>Speak with Agent</button>
            </div>
          </div>
        </div>
      </section>

      {/* Disability Details */}
      <section className="di-details" id="di-details">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How Disability Insurance Works</h2>
            <p className="section-subtitle">Key definitions, optional riders, and what to expect in a claim</p>
          </div>

          <div className="coverage-grid">
            <div className="coverage-card">
              <div className="coverage-header">
                <h3>Key Definitions</h3>
              </div>
              <div className="coverage-icon">📚</div>
              <ul className="coverage-features">
                <li><strong>Own‑Occupation:</strong> Benefits pay if you can&apos;t do the main duties of your specific job.</li>
                <li><strong>Any‑Occupation:</strong> Benefits pay only if you can&apos;t work in any suitable job.</li>
                <li><strong>Elimination Period:</strong> Waiting time before benefits start (e.g., 30/60/90 days).</li>
                <li><strong>Benefit Period:</strong> How long benefits can be paid (e.g., 2 years, 5 years, to age 65/67).</li>
                <li><strong>Residual/Partial:</strong> Pays a partial benefit if you can work but with reduced income.</li>
              </ul>
            </div>

            <div className="coverage-card">
              <div className="coverage-header">
                <h3>Popular Riders</h3>
              </div>
              <div className="coverage-icon">➕</div>
              <ul className="coverage-features">
                <li><strong>COLA:</strong> Cost‑of‑living adjustment increases your benefit over time.</li>
                <li><strong>Future Purchase Option (FPO):</strong> Increase coverage later without medical exam.</li>
                <li><strong>Residual/Partial Disability:</strong> Helps if income drops due to limited capacity.</li>
                <li><strong>Catastrophic Disability:</strong> Extra benefit for severe impairments.</li>
                <li><strong>Own‑Occ Upgrade:</strong> Strengthens the definition for specialized roles.</li>
              </ul>
            </div>

            <div className="coverage-card">
              <div className="coverage-header">
                <h3>Claims Process</h3>
              </div>
              <div className="coverage-icon">📝</div>
              <ol className="coverage-features">
                <li><strong>File a claim:</strong> Tell your carrier and submit your claim forms.</li>
                <li><strong>Provide proof:</strong> Doctor&apos;s statements and work details support your claim.</li>
                <li><strong>Wait period:</strong> Benefits begin after the elimination period ends.</li>
                <li><strong>Receive benefits:</strong> Monthly payments continue while you meet the definition.</li>
                <li><strong>Ongoing review:</strong> Periodic updates confirm continued eligibility.</li>
              </ol>
            </div>
          </div>

          <div className="service-hero-buttons mt-6">
            <button className="btn-primary" onClick={scrollToCalculator}>Estimate My Benefit</button>
            <button className="btn-secondary" onClick={scrollToContact}>Talk to a Specialist</button>
          </div>
        </div>
      </section>

      {/* Coverage Options */}
      <section className="coverage-options">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Disability Insurance Basics</h2>
            <p className="section-subtitle">Protect your paycheck if an illness or injury keeps you from working</p>
          </div>
          <div className="coverage-grid">
            <div className="coverage-card">
              <div className="coverage-header">
                <h3>Short‑Term Disability (STD)</h3>
                <div className="coverage-price">Typical cost: <span>0.5–1% of income</span></div>
              </div>
              <div className="coverage-icon">⏱️</div>
              <p className="coverage-description">
                Replaces part of your income for a short period after a waiting (elimination) period.
                Common benefit lengths are 3–6 months.
              </p>
              <ul className="coverage-features">
                <li>Pays a portion of your paycheck (often 50–70%)</li>
                <li>Elimination period: 0–14 days is common</li>
                <li>Good for recovery from birth, surgery, or short illnesses</li>
                <li>Often offered by employers; supplemental coverage available</li>
              </ul>
              <div className="coverage-best-for">
                <strong>Best for:</strong> Short recovery periods and immediate income needs
              </div>
            </div>

            <div className="coverage-card featured">
              <div className="coverage-badge">Most Chosen</div>
              <div className="coverage-header">
                <h3>Long‑Term Disability (LTD)</h3>
                <div className="coverage-price">Typical cost: <span>1–3% of income</span></div>
              </div>
              <div className="coverage-icon">🛡️</div>
              <p className="coverage-description">
                Provides longer‑lasting protection if you can&apos;t work for months or years due to illness or injury.
                Benefit periods commonly range from 2 years to age 65/67.
              </p>
              <ul className="coverage-features">
                <li>Own‑occupation and any‑occupation definitions available</li>
                <li>Typical benefit: 60–70% of gross income (tax treatment varies)</li>
                <li>Common elimination period: 60–180 days</li>
                <li>Optional riders: COLA, residual/partial, future purchase option</li>
              </ul>
              <div className="coverage-best-for">
                <strong>Best for:</strong> Protecting long‑term income and career
              </div>
            </div>

            <div className="coverage-card">
              <div className="coverage-header">
                <h3>Supplemental & Own‑Occ DI</h3>
                <div className="coverage-price">Tailored pricing</div>
              </div>
              <div className="coverage-icon">📈</div>
              <p className="coverage-description">
                Adds protection on top of employer plans or focuses on your specific job duties
                so you can receive benefits even if you can work in a different job.
              </p>
              <ul className="coverage-features">
                <li>Bridges gaps from employer group DI</li>
                <li>True own‑occupation definitions for specialized roles</li>
                <li>High‑income earners can increase benefit caps</li>
                <li>Pairs well with residual/partial disability riders</li>
              </ul>
              <div className="coverage-best-for">
                <strong>Best for:</strong> Specialists and those with employer plans that fall short
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Disability Insurance FAQ</h2>
            <p className="section-subtitle">Clear answers to common questions about protecting your paycheck</p>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h3 className="faq-question">What is disability insurance?</h3>
              <p className="faq-answer">
                It&apos;s insurance that pays part of your income if you can&apos;t work because of an illness or injury.
                Think of it as a safety net for your paycheck.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">How much coverage do I need?</h3>
              <p className="faq-answer">
                Many people choose 60–70% of their gross income. If premiums are paid with after‑tax dollars,
                benefits are typically tax‑free.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">What&apos;s the difference between short‑term and long‑term?</h3>
              <p className="faq-answer">
                Short‑term fills the gap for a few months after a short waiting period. Long‑term kicks in after
                a longer waiting period and can last years or to retirement age.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">What is an elimination period?</h3>
              <p className="faq-answer">
                It&apos;s how long you wait after becoming disabled before benefits begin. Common options are 30, 60,
                90, or 180 days. Longer waits usually lower the premium.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">What is &quot;own‑occupation&quot; coverage?</h3>
              <p className="faq-answer">
                It means you can receive benefits if you can&apos;t perform the main duties of your specific job,
                even if you could work in another job.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Can I get coverage if I&apos;m self‑employed?</h3>
              <p className="faq-answer">
                Yes. Individual long‑term disability plans are available for self‑employed people and small
                business owners. We&apos;ll help you document income and choose features.
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
              <h2 className="section-title">Ready to Protect Your Paycheck?</h2>
              <p className="contact-description">
                Our licensed disability insurance specialists will help you choose the right benefits,
                waiting period, and riders for your job and budget.
              </p>
              <div className="contact-benefits">
                <div className="contact-benefit">
                  <div className="benefit-icon">✓</div>
                  <span>Carrier comparison and custom quotes</span>
                </div>
                <div className="contact-benefit">
                  <div className="benefit-icon">✓</div>
                  <span>Occupation‑specific guidance</span>
                </div>
                <div className="contact-benefit">
                  <div className="benefit-icon">✓</div>
                  <span>Rider recommendations (COLA, residual, FPO)</span>
                </div>
                <div className="contact-benefit">
                  <div className="benefit-icon">✓</div>
                  <span>Claims support</span>
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
                    <p><strong>di@theinsurancebox.com</strong><br />Get a response within 2 hours</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form className="quote-form">
                <h3>Get Your Disability Insurance Quote</h3>
                <div className="form-row">
                  <input type="text" placeholder="First Name" required />
                  <input type="text" placeholder="Last Name" required />
                </div>
                <div className="form-row">
                  <input type="email" placeholder="Email Address" required />
                  <input type="tel" placeholder="Phone Number" required />
                </div>
                <div className="form-row">
                  <input type="number" placeholder="Monthly Income (before taxes)" required />
                  <input type="text" placeholder="Occupation" required />
                </div>
                <div className="form-row">
                  <select required>
                    <option value="">Employer DI Coverage?</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    <option value="unsure">Not sure</option>
                  </select>
                  <select required>
                    <option value="">Coverage Type Interested In</option>
                    <option value="std">Short‑Term Disability</option>
                    <option value="ltd">Long‑Term Disability</option>
                    <option value="supplemental">Supplemental / Own‑Occupation</option>
                    <option value="unsure">Not sure - need guidance</option>
                  </select>
                </div>
                <textarea placeholder="Tell us about your work, income, and any employer coverage..." rows={4}></textarea>
                <button type="submit" className="btn-primary">Get My Disability Insurance Quote</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
