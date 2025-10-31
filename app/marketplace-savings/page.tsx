'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function MarketplaceSavingsPage() {
  const [income, setIncome] = useState('')
  const [status, setStatus] = useState('')
  const [showStatus, setShowStatus] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const incomeValue = Math.max(0, parseInt(income || '0', 10) || 0)

    if (typeof window !== 'undefined') {
      sessionStorage.setItem('mp_income', String(incomeValue))
      // After step 3, go to health page and auto-run search
      window.location.href = '/health-insurance#calculator'
    }
  }

  return (
    <>
      <section className="service-hero" style={{ paddingTop: '140px' }}>
        <div className="container">
          <div className="service-hero-content">
            <h1 className="service-hero-title">Savings</h1>
            <p className="service-hero-description">Step 3 of 3 – Household Income</p>
          </div>
        </div>
      </section>

      <section className="calculator-section">
        <div className="container">
          <div className="calculator-interactive" style={{ maxWidth: '760px', margin: '0 auto' }}>
            <div className="calculator-header">
              <h3>What is your annual household income?</h3>
              <p>This helps estimate savings and tax credits. You can adjust later.</p>
            </div>
            <form id="savingsForm" className="calculator-form" onSubmit={handleSubmit}>
              <div className="calc-row">
                <div className="calc-field" style={{ gridColumn: 'span 2' }}>
                  <label htmlFor="income">Annual Household Income</label>
                  <input
                    type="number"
                    id="income"
                    min="0"
                    step="1000"
                    placeholder="e.g., 60000"
                    value={income}
                    onChange={(e) => setIncome(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="results-actions" style={{ marginTop: '0.5rem' }}>
                <Link className="btn-secondary" href="/marketplace-household">
                  Back
                </Link>
                <button type="submit" className="btn-primary">
                  See Plans
                </button>
              </div>
              {showStatus && <div className="mp-status">{status}</div>}
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
