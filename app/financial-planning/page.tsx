'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function FinancialPlanningPage() {
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
              <Link href="/">Home</Link> / <span>Financial Planning</span>
            </div>
            <h1 className="service-hero-title">
              <span className="service-icon-large">📈</span>
              Financial Planning
            </h1>
            <p className="service-hero-description">
              Clear, practical guidance to help you grow savings, invest wisely, and retire with confidence.
              Retirement planning, budgeting and cash flow, investment management, risk planning, and more.
            </p>
            <div className="service-hero-stats">
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Clients Advised</span>
              </div>
              <div className="stat">
                <span className="stat-number">$1,200+</span>
                <span className="stat-label">Avg Annual Savings Found</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Fiduciary Advice</span>
              </div>
            </div>
            <div className="service-hero-buttons">
              <button className="btn-primary large" onClick={scrollToCalculator}>Build My Plan</button>
              <button className="btn-secondary large" onClick={scrollToContact}>Book a Consultation</button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works" id="how-it-works" aria-labelledby="how-title">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title" id="how-title">How It Works</h2>
            <p className="section-subtitle">A simple path from questions to confidence</p>
          </div>
          <div className="coverage-grid">
            <div className="coverage-card">
              <div className="coverage-header">
                <h3>1) Free Intro Call</h3>
                <div className="coverage-price">15–20 minutes</div>
              </div>
              <div className="coverage-icon">☎️</div>
              <p className="coverage-description">We learn about your goals and outline next steps. No pressure, no sales.</p>
              <ul className="coverage-features">
                <li>Understand your priorities</li>
                <li>Confirm fit and scope</li>
                <li>Clear next-step plan</li>
              </ul>
            </div>
            <div className="coverage-card featured">
              <div className="coverage-badge">Most Helpful</div>
              <div className="coverage-header">
                <h3>2) Build Your Plan</h3>
                <div className="coverage-price">1–2 weeks</div>
              </div>
              <div className="coverage-icon">🧭</div>
              <p className="coverage-description">We organize your finances, set targets, and design a clear, practical roadmap.</p>
              <ul className="coverage-features">
                <li>Budget and savings setup</li>
                <li>Investment and risk plan</li>
                <li>Retirement and tax strategies</li>
              </ul>
            </div>
            <div className="coverage-card">
              <div className="coverage-header">
                <h3>3) Implement & Support</h3>
                <div className="coverage-price">Ongoing</div>
              </div>
              <div className="coverage-icon">🚀</div>
              <p className="coverage-description">We help you take action and adjust as life changes so you stay on track.</p>
              <ul className="coverage-features">
                <li>Step‑by‑step actions</li>
                <li>Easy progress tracking</li>
                <li>Check‑ins when you need them</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="trust-strip" id="trust" aria-labelledby="trust-title">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title" id="trust-title">Why Choose Us</h2>
            <p className="section-subtitle">Advice you can understand and act on</p>
          </div>
          <div className="calculator-features">
            <div className="calculator-feature">
              <div className="feature-icon">🛡️</div>
              <div>
                <h4>Fiduciary Commitment</h4>
                <p>Your interests come first—always.</p>
              </div>
            </div>
            <div className="calculator-feature">
              <div className="feature-icon">🔍</div>
              <div>
                <h4>Transparent Pricing</h4>
                <p>Simple, clear fees with no commissions.</p>
              </div>
            </div>
            <div className="calculator-feature">
              <div className="feature-icon">🧠</div>
              <div>
                <h4>Plain‑English Advice</h4>
                <p>We explain the why, not just the what.</p>
              </div>
            </div>
            <div className="calculator-feature">
              <div className="feature-icon">🤝</div>
              <div>
                <h4>Coordinated Care</h4>
                <p>We'll work with your CPA and attorney when needed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Options */}
      <section className="coverage-options" id="coverage-options">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Financial Planning Services</h2>
            <p className="section-subtitle">Clear, actionable guidance for your money goals</p>
          </div>
          <div className="coverage-grid">
            <div className="coverage-card">
              <div className="coverage-header">
                <h3>Budget & Cash Flow</h3>
                <div className="coverage-price">Typical focus: <span>0–12 months</span></div>
              </div>
              <div className="coverage-icon">💵</div>
              <p className="coverage-description">
                Build a simple spending plan, organize bills, and map where each dollar goes
                so you can save more without feeling restricted.
              </p>
              <ul className="coverage-features">
                <li>Track income and expenses clearly</li>
                <li>Automate savings and bill payments</li>
                <li>Build 3–6 months emergency fund</li>
                <li>Reduce high‑interest debt with a plan</li>
                <li>Simple monthly dashboard</li>
              </ul>
              <div className="coverage-best-for">
                <strong>Best for:</strong> Young families, freelancers, anyone getting organized
              </div>
            </div>

            <div className="coverage-card featured">
              <div className="coverage-badge">Most Popular</div>
              <div className="coverage-header">
                <h3>Retirement Planning</h3>
                <div className="coverage-price">Typical focus: <span>5–30 years</span></div>
              </div>
              <div className="coverage-icon">🎯</div>
              <p className="coverage-description">
                Clarify when you can retire, how much you need, and the steps to get there
                with a simple, realistic roadmap.
              </p>
              <ul className="coverage-features">
                <li>Goal and timeline planning</li>
                <li>Tax‑smart saving strategies</li>
                <li>Social Security timing guidance</li>
                <li>Withdrawal and income plan</li>
                <li>Risk and downside protection</li>
              </ul>
              <div className="coverage-best-for">
                <strong>Best for:</strong> 5–15 years from retirement or recently retired
              </div>
            </div>

            <div className="coverage-card">
              <div className="coverage-header">
                <h3>Investment Management</h3>
                <div className="coverage-price">Typical focus: <span>Risk & growth</span></div>
              </div>
              <div className="coverage-icon">📊</div>
              <p className="coverage-description">
                Match your investments to your goals and comfort with risk, using
                diversified, low‑cost portfolios.
              </p>
              <ul className="coverage-features">
                <li>Personalized portfolio design</li>
                <li>Diversified, low‑cost funds</li>
                <li>Automatic rebalancing</li>
                <li>Tax‑efficient strategies</li>
                <li>Transparent, simple fees</li>
              </ul>
              <div className="coverage-best-for">
                <strong>Best for:</strong> Busy professionals, DIY investors wanting a partner
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Insurance Calculator Placeholder */}
      <section className="calculator-section" id="calculator" hidden>
        <div className="container">
          <div className="calculator-content">
            <div className="calculator-info">
              <h2 className="section-title">Financial Goal Planner</h2>
              <p className="calculator-description">
                Estimate your future balance and see if you're on track for goals like
                retirement, a home, or college—then adjust your plan.
              </p>
              <div className="calculator-features">
                <div className="calculator-feature">
                  <div className="feature-icon">💰</div>
                  <div>
                    <h4>Savings Rate</h4>
                    <p>See how contributions impact your goals</p>
                  </div>
                </div>
                <div className="calculator-feature">
                  <div className="feature-icon">📆</div>
                  <div>
                    <h4>Timeline</h4>
                    <p>Project balances over different timeframes</p>
                  </div>
                </div>
                <div className="calculator-feature">
                  <div className="feature-icon">⚖️</div>
                  <div>
                    <h4>Risk Level</h4>
                    <p>See how risk choices change outcomes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="calculator-placeholder">
              <div className="calculator-coming-soon" id="goal-planner" aria-labelledby="goal-planner-title">
                <h3 id="goal-planner-title">Interactive Financial Goal Planner</h3>
                <p>Adjust the inputs to see your projected balance over time. This is a simple estimate for planning only.</p>

                <form className="planner-form" aria-describedby="planner-note">
                  <div className="planner-grid">
                    <div className="planner-field">
                      <label htmlFor="gp-current">Current Savings ($)</label>
                      <input id="gp-current" type="number" inputMode="decimal" min="0" step="100" defaultValue="25000" aria-describedby="gp-current-hint" />
                      <div id="gp-current-hint" className="field-hint">Approximate existing investable savings</div>
                    </div>
                    <div className="planner-field">
                      <label htmlFor="gp-monthly">Monthly Contribution ($)</label>
                      <input id="gp-monthly" type="number" inputMode="decimal" min="0" step="50" defaultValue="600" />
                    </div>
                    <div className="planner-field">
                      <label htmlFor="gp-years">Years Until Goal</label>
                      <input id="gp-years" type="number" inputMode="numeric" min="1" max="60" step="1" defaultValue="25" />
                    </div>
                    <div className="planner-field">
                      <label htmlFor="gp-return">Expected Annual Return (%)</label>
                      <input id="gp-return" type="number" inputMode="decimal" min="0" max="20" step="0.1" defaultValue="6.5" />
                    </div>
                    <div className="planner-field">
                      <label htmlFor="gp-inflation">Inflation (%)</label>
                      <input id="gp-inflation" type="number" inputMode="decimal" min="0" max="10" step="0.1" defaultValue="2.5" />
                    </div>
                    <div className="planner-field">
                      <label htmlFor="gp-risk">Risk Level</label>
                      <select id="gp-risk">
                        <option value="conservative">Conservative</option>
                        <option value="balanced">Balanced</option>
                        <option value="growth">Growth</option>
                      </select>
                    </div>
                  </div>
                  <div className="planner-actions">
                    <button type="button" className="btn-secondary" id="gp-reset">Reset</button>
                    <button type="button" className="btn-primary" id="gp-run">Update Projection</button>
                  </div>
                  <div id="planner-note" className="field-hint">Assumes monthly contributions made at month end. Returns are hypothetical and not guaranteed.</div>
                </form>

                <div className="planner-output">
                  <div className="planner-metrics" aria-live="polite">
                    <div className="metric">
                      <div className="metric-label">Projected Future Balance</div>
                      <div className="metric-value" id="gp-fv">—</div>
                    </div>
                    <div className="metric">
                      <div className="metric-label">Total Contributions</div>
                      <div className="metric-value" id="gp-contrib">—</div>
                    </div>
                    <div className="metric">
                      <div className="metric-label">Growth Earned</div>
                      <div className="metric-value" id="gp-growth">—</div>
                    </div>
                    <div className="metric">
                      <div className="metric-label">Today's Dollars</div>
                      <div className="metric-value" id="gp-real">—</div>
                    </div>
                  </div>
                  <div className="planner-chart">
                    <canvas id="gp-chart" height="220" aria-label="Projected balance over time" role="img"></canvas>
                  </div>
                </div>

                <button className="btn-primary" onClick={scrollToContact}>Get Personal Plan</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section" id="faq">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Financial Planning FAQ</h2>
            <p className="section-subtitle">Simple answers to common money questions</p>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h3 className="faq-question">What's included in a financial plan?</h3>
              <p className="faq-answer">
                We cover your goals, budget and savings, debt, investing, retirement, insurance
                needs, and taxes at a high level—then give you a simple action list.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">How do you charge for planning?</h3>
              <p className="faq-answer">
                Transparent, flat or percentage‑based pricing depending on your needs. No
                commissions for recommendations—our advice is always in your best interest.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Do I need a lot of money to start?</h3>
              <p className="faq-answer">
                No. We work with people at every stage. The earlier you start, the easier it
                is to reach your goals.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">What's your investment approach?</h3>
              <p className="faq-answer">
                Diversified, low‑cost funds with the right risk level for you. We focus on
                long‑term results, not market timing.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">How often will we meet?</h3>
              <p className="faq-answer">
                We meet as needed—usually quarterly at first, then at least once a year or when
                life changes.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Will you coordinate with my CPA or attorney?</h3>
              <p className="faq-answer">
                Yes. With your permission, we'll coordinate to keep your tax, legal, and
                financial strategies aligned.
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
              <h2 className="section-title">Ready to Build Your Financial Plan?</h2>
              <p className="contact-description">
                Talk with a planner who listens, explains clearly, and helps you take the next
                best step—no jargon, no pressure.
              </p>
              <div className="contact-benefits">
                <div className="contact-benefit">
                  <div className="benefit-icon">✓</div>
                  <span>Fee‑only, transparent guidance</span>
                </div>
                <div className="contact-benefit">
                  <div className="benefit-icon">✓</div>
                  <span>Fiduciary standard (your interests first)</span>
                </div>
                <div className="contact-benefit">
                  <div className="benefit-icon">✓</div>
                  <span>Personalized, step‑by‑step roadmap</span>
                </div>
                <div className="contact-benefit">
                  <div className="benefit-icon">✓</div>
                  <span>Ongoing support as life changes</span>
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
                    <p><strong>plan@theinsurancebox.com</strong><br />Get a response within 2 hours</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form className="quote-form">
                <h3>Start Your Financial Plan</h3>
                <div className="form-row">
                  <input type="text" placeholder="First Name" required />
                  <input type="text" placeholder="Last Name" required />
                </div>
                <div className="form-row">
                  <input type="email" placeholder="Email Address" required />
                  <input type="tel" placeholder="Phone Number" required />
                </div>
                <div className="form-row">
                  <input type="number" placeholder="Approx. Investable Assets ($)" required />
                  <select required>
                    <option value="">Time Horizon</option>
                    <option value="lt1">Less than 1 year</option>
                    <option value="1-3">1–3 years</option>
                    <option value="3-10">3–10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
                <select required>
                  <option value="">Service Interested In</option>
                  <option value="retirement">Retirement Planning</option>
                  <option value="investments">Investment Management</option>
                  <option value="budgeting">Budget & Cash Flow</option>
                  <option value="comprehensive">Comprehensive Plan</option>
                  <option value="unsure">Not sure - need guidance</option>
                </select>
                <textarea placeholder="Tell us about your goals (retire age, big purchases, etc.)" rows={4}></textarea>
                <button type="submit" className="btn-primary">Get My Plan</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
