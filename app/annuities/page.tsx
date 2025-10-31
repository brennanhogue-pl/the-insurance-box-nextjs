'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function AnnuitiesPage() {
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
              <Link href="/">Home</Link> / <span>Annuities</span>
            </div>
            <h1 className="service-hero-title">
              <span className="service-icon-large">💵</span>
              Annuities
            </h1>
            <p className="service-hero-description">
              Build a secure retirement income stream with our range of annuity products and expert guidance.
              Fixed and variable annuities with guaranteed income options and tax-deferred growth.
            </p>
            <div className="service-hero-stats">
              <div className="stat">
                <span className="stat-number">30+</span>
                <span className="stat-label">Carrier Partners</span>
              </div>
              <div className="stat">
                <span className="stat-number">5–6%</span>
                <span className="stat-label">Typical Fixed Rates</span>
              </div>
              <div className="stat">
                <span className="stat-number">Free</span>
                <span className="stat-label">Consultation</span>
              </div>
            </div>
            <div className="service-hero-buttons">
              <button className="btn-primary large" onClick={scrollToCalculator}>Estimate Income</button>
              <button className="btn-secondary large" onClick={scrollToContact}>Speak with Advisor</button>
            </div>
          </div>
        </div>
      </section>

      {/* Annuity Types */}
      <section className="coverage-options">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Annuity Types</h2>
            <p className="section-subtitle">Pick the annuity that matches your timeline, risk comfort, and income needs</p>
          </div>
          <div className="coverage-grid">
            <div className="coverage-card">
              <div className="coverage-header">
                <h3>Fixed Annuities</h3>
                <div className="coverage-price">Current rates up to <span>6%+</span></div>
              </div>
              <div className="coverage-icon">🛡️</div>
              <p className="coverage-description">
                Guaranteed rate for a set term with tax-deferred growth and principal protection.
              </p>
              <ul className="coverage-features">
                <li>Predictable, guaranteed interest rate</li>
                <li>Terms typically 2–10 years</li>
                <li>Penalty-free withdrawal options may apply</li>
                <li>Convert to lifetime income later</li>
                <li>Backed by highly rated carriers</li>
              </ul>
              <div className="coverage-best-for">
                <strong>Best for:</strong> Safety-first savers wanting steady growth
              </div>
            </div>

            <div className="coverage-card featured">
              <div className="coverage-badge">Most Popular</div>
              <div className="coverage-header">
                <h3>Fixed Indexed Annuities</h3>
                <div className="coverage-price">Growth potential with <span>downside protection</span></div>
              </div>
              <div className="coverage-icon">📈</div>
              <p className="coverage-description">
                Earn interest linked to a market index (like the S&P 500) with a 0% floor—no market-loss risk.
              </p>
              <ul className="coverage-features">
                <li>0% floor against market losses</li>
                <li>Multiple crediting strategies (caps, participation, spreads)</li>
                <li>Optional income riders for lifetime payouts</li>
                <li>Tax-deferred growth</li>
                <li>Flexible surrender schedules</li>
              </ul>
              <div className="coverage-best-for">
                <strong>Best for:</strong> Moderate growth seekers who want protection
              </div>
            </div>

            <div className="coverage-card">
              <div className="coverage-header">
                <h3>Immediate Annuities</h3>
                <div className="coverage-price">Income starts in <span>30–90 days</span></div>
              </div>
              <div className="coverage-icon">⏱️</div>
              <p className="coverage-description">
                Turn a lump sum into guaranteed income you cannot outlive, starting almost right away.
              </p>
              <ul className="coverage-features">
                <li>Lifetime or period-certain payouts</li>
                <li>Customizable payment frequencies</li>
                <li>Joint-life options for couples</li>
                <li>Optional refund/period guarantees</li>
                <li>Insulates retirement from market swings</li>
              </ul>
              <div className="coverage-best-for">
                <strong>Best for:</strong> Near-retirees needing dependable monthly income now
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Annuity Income Estimator */}
      <section className="calculator-section" id="calculator" hidden>
        <div className="container">
          <div className="calculator-content">
            <div className="calculator-info">
              <h2 className="section-title">Annuity Income Estimator</h2>
              <p className="calculator-description">
                Estimate potential monthly income based on your lump sum, deferral time, and payout option.
                This is a simplified model for education only—final quotes come from carriers.
              </p>
              <div className="calculator-features">
                <div className="calculator-feature">
                  <div className="feature-icon">🔒</div>
                  <div>
                    <h4>Guaranteed Income Options</h4>
                    <p>Lifetime or period-certain payout structures</p>
                  </div>
                </div>
                <div className="calculator-feature">
                  <div className="feature-icon">⏳</div>
                  <div>
                    <h4>Deferral Flexibility</h4>
                    <p>Start income now or later to potentially increase payouts</p>
                  </div>
                </div>
                <div className="calculator-feature">
                  <div className="feature-icon">📈</div>
                  <div>
                    <h4>Tax-Deferred Growth</h4>
                    <p>Grow assets tax-deferred until you take income</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="calculator-interactive" id="annuity-estimator">
              <div className="calculator-header">
                <h3>Estimate Your Income</h3>
                <p>Adjust inputs and see an instant estimate. Talk with an advisor for precise quotes.</p>
              </div>
              <form className="calculator-form" id="annuity-estimator-form" noValidate>
                <div className="calc-section">
                  <h4>Basic Inputs</h4>
                  <div className="calc-row">
                    <div className="calc-field">
                      <label htmlFor="premium">Investment Amount ($)</label>
                      <input id="premium" type="number" min="1000" step="500" defaultValue="250000" required />
                    </div>
                    <div className="calc-field">
                      <label htmlFor="deferralYears">Deferral Period (years)</label>
                      <input id="deferralYears" type="number" min="0" max="30" step="1" defaultValue="10" required />
                    </div>
                  </div>
                  <div className="calc-row">
                    <div className="calc-field">
                      <label htmlFor="currentAge">Current Age</label>
                      <input id="currentAge" type="number" min="18" max="95" step="1" defaultValue="55" required />
                    </div>
                    <div className="calc-field">
                      <label htmlFor="expectedRate">Expected Rate / Index Credit (%)</label>
                      <input id="expectedRate" type="number" min="0" max="12" step="0.1" defaultValue="5.0" required />
                    </div>
                  </div>
                </div>

                <div className="calc-section">
                  <h4>Payout Options</h4>
                  <div className="calc-row">
                    <div className="calc-field">
                      <label htmlFor="payoutOption">Select Option</label>
                      <select id="payoutOption">
                        <option value="life-single">Lifetime (single)</option>
                        <option value="life-joint">Lifetime (joint, 100%)</option>
                        <option value="period-10">Period-Certain (10 years)</option>
                        <option value="period-20">Period-Certain (20 years)</option>
                      </select>
                    </div>
                    <div className="calc-field">
                      <label htmlFor="assumedPayoutAPR">Assumed Payout APR (%)</label>
                      <input id="assumedPayoutAPR" type="number" min="0" max="8" step="0.1" defaultValue="3.0" />
                      <small className="mcf-help-text">Used for period-certain amortization only</small>
                    </div>
                  </div>
                </div>

                <button type="button" className="btn-primary calc-button" id="estimateBtn">Estimate Income</button>
              </form>

              <div className="calculator-results" id="annuity-results" hidden>
                <div className="results-header">
                  <h3>Your Estimate</h3>
                </div>
                <div className="results-summary">
                  <div className="result-main">
                    <span className="result-label">Estimated Monthly Income</span>
                    <span className="result-amount" id="resultMonthly">$0</span>
                  </div>
                  <div className="result-subtitle" id="resultSubtitle">Based on inputs and assumptions below.</div>
                </div>
                <div className="results-breakdown">
                  <h4>Breakdown</h4>
                  <div className="breakdown-item"><span>Future Value at Start</span><span id="resultFV">$0</span></div>
                  <div className="breakdown-item"><span>Effective Payout Rate</span><span id="resultPayoutRate">0%</span></div>
                  <div className="breakdown-item"><span>Payout Option</span><span id="resultOption">-</span></div>
                  <div className="breakdown-item final"><span>Monthly Income</span><span id="resultMonthlyFinal">$0</span></div>
                </div>
                <div className="results-actions">
                  <button className="btn-secondary" type="button" onClick={scrollToContact}>Get Personal Recommendation</button>
                </div>
              </div>
              <p className="mcf-help-text">This tool provides a simplified estimate and is not a guarantee. Actual carrier quotes may differ.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Annuities FAQ</h2>
            <p className="section-subtitle">Simple answers to common annuity questions</p>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h3 className="faq-question">What is an annuity in plain English?</h3>
              <p className="faq-answer">
                An annuity is a contract with an insurance company. You put in money (once or over time) and
                can receive guaranteed income later—often for life. It can also grow tax-deferred while you wait.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">How are fixed and indexed annuities different?</h3>
              <p className="faq-answer">
                Fixed annuities pay a set interest rate for a term. Fixed indexed annuities credit interest
                based on a market index with a 0% floor—so you're protected from market losses while still having
                growth potential.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">When does income start?</h3>
              <p className="faq-answer">
                Immediate annuities begin paying in about 30–90 days. Deferred annuities can start income years
                later—often producing larger payments because the money had time to grow.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Are annuities safe?</h3>
              <p className="faq-answer">
                They're backed by the issuing insurance company. We work with highly rated carriers and help you
                choose features and guarantees that match your risk comfort.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">What about fees and liquidity?</h3>
              <p className="faq-answer">
                Many fixed and indexed annuities have no annual fees unless you add optional riders. Most have
                surrender schedules and include limited penalty‑free withdrawals. We'll walk you through all details.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">How are annuities taxed?</h3>
              <p className="faq-answer">
                Growth is tax-deferred. When you take income, the gains are typically taxed as ordinary income.
                Tax treatment can vary—consult your tax advisor for your situation.
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
              <h2 className="section-title">Ready to Build Guaranteed Retirement Income?</h2>
              <p className="contact-description">
                Our licensed annuity specialists compare highly rated carriers to design a plan that
                fits your income goals, timeline, and risk comfort.
              </p>
              <div className="contact-benefits">
                <div className="contact-benefit">
                  <div className="benefit-icon">✓</div>
                  <span>Personalized annuity recommendations</span>
                </div>
                <div className="contact-benefit">
                  <div className="benefit-icon">✓</div>
                  <span>Fixed and indexed rate shopping</span>
                </div>
                <div className="contact-benefit">
                  <div className="benefit-icon">✓</div>
                  <span>Lifetime income and rider guidance</span>
                </div>
                <div className="contact-benefit">
                  <div className="benefit-icon">✓</div>
                  <span>Clear fees and liquidity review</span>
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
                    <p><strong>annuities@theinsurancebox.com</strong><br />Get a response within 2 hours</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form className="quote-form">
                <h3>Get Your Annuity Recommendation</h3>
                <div className="form-row">
                  <input type="text" placeholder="First Name" required />
                  <input type="text" placeholder="Last Name" required />
                </div>
                <div className="form-row">
                  <input type="email" placeholder="Email Address" required />
                  <input type="tel" placeholder="Phone Number" required />
                </div>
                <div className="form-row">
                  <input type="number" placeholder="Investment Amount ($)" required />
                  <select required>
                    <option value="">Desired Start</option>
                    <option value="immediate">Immediate (30–90 days)</option>
                    <option value="1-5">In 1–5 years</option>
                    <option value="6-10">In 6–10 years</option>
                    <option value="10+">In 10+ years</option>
                  </select>
                </div>
                <select required>
                  <option value="">Annuity Type Interested In</option>
                  <option value="fixed">Fixed</option>
                  <option value="indexed">Fixed Indexed</option>
                  <option value="immediate">Immediate</option>
                  <option value="unsure">Not sure - need guidance</option>
                </select>
                <textarea placeholder="Tell us your income goal, timeline, and any preferences..." rows={4}></textarea>
                <button type="submit" className="btn-primary">Request My Annuity Plan</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
