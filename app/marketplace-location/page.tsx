'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function MarketplaceLocationPage() {
  const [zip, setZip] = useState('')
  const [counties, setCounties] = useState<Array<{ name: string; fips: string }>>([])
  const [selectedCounty, setSelectedCounty] = useState('')
  const [state, setState] = useState('')
  const [status, setStatus] = useState('')
  const [showStatus, setShowStatus] = useState(false)

  const sanitizeZip = (v: string) => v.replace(/[^0-9]/g, '').slice(0, 5)

  const lookupCounties = async (zipCode: string) => {
    setShowStatus(true)
    setStatus('Looking up your county...')
    setCounties([])
    setSelectedCounty('')

    try {
      const res = await fetch(`/api/marketplace/counties?zip=${encodeURIComponent(zipCode)}`, {
        headers: { 'Accept': 'application/json' }
      })

      if (!res.ok) {
        const text = await res.text()
        throw new Error(text || `HTTP ${res.status}`)
      }

      const data = await res.json()
      const items = Array.isArray(data?.counties) ? data.counties : (Array.isArray(data) ? data : [])

      if (!items.length) {
        setStatus('No counties found for this ZIP. Please check and try again.')
        return
      }

      setShowStatus(false)

      // Autofill state from first item
      const st = items[0].state || items[0].state_code || items[0].usps || items[0].state_abbr || ''
      setState(st)

      // Populate counties
      const countyList = items.map((c: any) => ({
        name: c.name || c.county || `County ${c.fips || ''}`,
        fips: String(c.countyfips || c.fips || c.county_fips || '')
      }))

      setCounties(countyList)
    } catch (err: any) {
      setStatus(`Could not fetch counties: ${err?.message || 'Unknown error'}`)
    }
  }

  const handleZipChange = (value: string) => {
    const sanitized = sanitizeZip(value)
    setZip(sanitized)
    if (sanitized.length === 5) {
      lookupCounties(sanitized)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedCounty) return

    // Persist to sessionStorage and move to next step
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('mp_zip', zip)
      sessionStorage.setItem('mp_state', state)
      sessionStorage.setItem('mp_countyfips', selectedCounty)
      window.location.href = '/marketplace-household'
    }
  }

  return (
    <>
      <section className="service-hero" style={{ paddingTop: '140px' }}>
        <div className="container">
          <div className="service-hero-content">
            <h1 className="service-hero-title">Find Affordable Health Coverage</h1>
            <p className="service-hero-description">Step 1 of 3 – Location</p>
          </div>
        </div>
      </section>

      <section className="calculator-section">
        <div className="container">
          <div className="calculator-interactive" style={{ maxWidth: '760px', margin: '0 auto' }}>
            <div className="calculator-header">
              <h3>Where do you live?</h3>
              <p>Enter your ZIP Code. We'll look up your county and state automatically.</p>
            </div>
            <form id="locationForm" className="calculator-form" onSubmit={handleSubmit}>
              <div className="calc-row">
                <div className="calc-field" style={{ gridColumn: 'span 2' }}>
                  <label htmlFor="locZip">ZIP Code</label>
                  <input
                    type="text"
                    id="locZip"
                    inputMode="numeric"
                    maxLength={5}
                    pattern="[0-9]{5}"
                    placeholder="e.g., 84020"
                    value={zip}
                    onChange={(e) => handleZipChange(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="calc-row">
                <div className="calc-field">
                  <label htmlFor="locCounty">County</label>
                  <select
                    id="locCounty"
                    value={selectedCounty}
                    onChange={(e) => setSelectedCounty(e.target.value)}
                    required
                  >
                    <option value="">Select county</option>
                    {counties.map((county) => (
                      <option key={county.fips} value={county.fips}>
                        {county.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="calc-field">
                  <label htmlFor="locState">State</label>
                  <input type="text" id="locState" placeholder="State" value={state} readOnly />
                </div>
              </div>
              <div className="results-actions" style={{ marginTop: '0.5rem' }}>
                <button type="submit" className="btn-primary" id="locNextBtn" disabled={!selectedCounty}>
                  Continue
                </button>
                <Link className="btn-secondary" href="/health-insurance">
                  Cancel
                </Link>
              </div>
              {showStatus && <div className="mp-status">{status}</div>}
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
