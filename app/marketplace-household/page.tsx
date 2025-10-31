'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

interface Person {
  kind: 'self' | 'spouse' | 'dep'
  index?: number
  key: string
  label: string
}

interface PersonData {
  age: number
  gender: string
  uses_tobacco: boolean
  is_pregnant: boolean
}

export default function MarketplaceHouseholdPage() {
  const [hasSpouse, setHasSpouse] = useState(false)
  const [dependents, setDependents] = useState(0)
  const [status, setStatus] = useState('')
  const [showStatus, setShowStatus] = useState(false)

  const MAX_DEPENDENTS = 8
  const today = new Date()

  const people: Person[] = [
    { kind: 'self', key: 'self', label: 'Myself' },
    ...(hasSpouse ? [{ kind: 'spouse' as const, key: 'spouse', label: 'Spouse' }] : []),
    ...Array.from({ length: dependents }, (_, i) => ({
      kind: 'dep' as const,
      index: i + 1,
      key: `dep_${i + 1}`,
      label: `Dependent ${i + 1}`
    }))
  ]

  const handleRemove = (key: string) => {
    if (key === 'spouse') {
      setHasSpouse(false)
    } else if (key.startsWith('dep_')) {
      setDependents(Math.max(0, dependents - 1))
    }
  }

  const yearsFromDob = (dob: string): number | undefined => {
    const d = new Date(dob)
    if (isNaN(d.getTime())) return undefined
    let age = today.getFullYear() - d.getFullYear()
    const m = today.getMonth() - d.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < d.getDate())) age--
    return age
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const members: PersonData[] = []

    // Self
    const selfDob = (form.querySelector('#self_dob') as HTMLInputElement)?.value
    const selfSex = (form.querySelector('input[name="self_sex"]:checked') as HTMLInputElement)?.value
    const selfAge = selfDob ? yearsFromDob(selfDob) : undefined

    if (!selfAge || !selfSex) {
      setStatus('Please enter your DOB and sex.')
      setShowStatus(true)
      return
    }

    members.push({
      age: selfAge,
      gender: selfSex,
      uses_tobacco: !!(form.querySelector('#self_tobacco') as HTMLInputElement)?.checked,
      is_pregnant: !!(form.querySelector('#self_pregnant') as HTMLInputElement)?.checked
    })

    // Spouse
    if (hasSpouse) {
      const sDob = (form.querySelector('#spouse_dob') as HTMLInputElement)?.value
      const sSex = (form.querySelector('input[name="spouse_sex"]:checked') as HTMLInputElement)?.value
      const sAge = sDob ? yearsFromDob(sDob) : undefined

      if (!sAge || !sSex) {
        setStatus('Please complete spouse DOB and sex.')
        setShowStatus(true)
        return
      }

      members.push({
        age: sAge,
        gender: sSex,
        uses_tobacco: !!(form.querySelector('#spouse_tobacco') as HTMLInputElement)?.checked,
        is_pregnant: !!(form.querySelector('#spouse_pregnant') as HTMLInputElement)?.checked
      })
    }

    // Dependents
    for (let i = 1; i <= dependents; i++) {
      const dDob = (form.querySelector(`#dep_${i}_dob`) as HTMLInputElement)?.value
      const dSex = (form.querySelector(`input[name="dep_${i}_sex"]:checked`) as HTMLInputElement)?.value
      const dAge = dDob ? yearsFromDob(dDob) : undefined

      if (!dAge || !dSex) {
        setStatus(`Please complete dependent ${i} DOB and sex.`)
        setShowStatus(true)
        return
      }

      members.push({
        age: dAge,
        gender: dSex,
        uses_tobacco: !!(form.querySelector(`#dep_${i}_tobacco`) as HTMLInputElement)?.checked,
        is_pregnant: !!(form.querySelector(`#dep_${i}_pregnant`) as HTMLInputElement)?.checked
      })
    }

    // Persist to session
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('mp_people', JSON.stringify(members))
      sessionStorage.setItem('mp_has_married_couple', String(hasSpouse))
      window.location.href = '/marketplace-savings'
    }
  }

  const PersonCard = ({ person }: { person: Person }) => (
    <div className="calculator-interactive" style={{ padding: '16px', border: '1px solid var(--neutral-gray-200)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <h4 style={{ margin: 0 }}>{person.label}</h4>
        {person.kind !== 'self' && (
          <button
            type="button"
            onClick={() => handleRemove(person.key)}
            className="btn-secondary"
            style={{ padding: '6px 10px' }}
          >
            Remove
          </button>
        )}
      </div>
      <div className="calc-row">
        <div className="calc-field">
          <label htmlFor={`${person.key}_dob`}>Date of Birth</label>
          <input type="date" id={`${person.key}_dob`} required />
        </div>
        <div className="calc-field">
          <label>Sex</label>
          <div style={{ display: 'flex', gap: '8px' }}>
            <label>
              <input type="radio" name={`${person.key}_sex`} value="Male" required /> Male
            </label>
            <label>
              <input type="radio" name={`${person.key}_sex`} value="Female" required /> Female
            </label>
          </div>
        </div>
      </div>
      <div className="calc-row">
        <div className="calc-field">
          <label>
            <input type="checkbox" id={`${person.key}_tobacco`} /> Uses tobacco
          </label>
        </div>
        <div className="calc-field">
          <label>
            <input type="checkbox" id={`${person.key}_medicare`} /> Enrolled or entitled to Medicare
          </label>
        </div>
      </div>
      <div className="calc-row">
        <div className="calc-field">
          <label>
            <input type="checkbox" id={`${person.key}_pregnant`} /> Pregnant
          </label>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <section className="service-hero" style={{ paddingTop: '140px' }}>
        <div className="container">
          <div className="service-hero-content">
            <h1 className="service-hero-title">Who is getting covered?</h1>
            <p className="service-hero-description">Step 2 of 3 – Household</p>
          </div>
        </div>
      </section>

      <section className="calculator-section">
        <div className="container">
          <div className="calculator-interactive" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="calculator-header">
              <h3>Add household members</h3>
              <p>We'll compute ages from dates of birth. Tobacco and Medicare are optional.</p>
            </div>

            <form id="householdForm" className="calculator-form" onSubmit={handleSubmit}>
              <div className="mcf-services-cards" style={{ gridTemplateColumns: '1fr', gap: '16px' }}>
                {people.map((person) => (
                  <PersonCard key={person.key} person={person} />
                ))}
              </div>
              <div className="results-actions" style={{ marginTop: '0.5rem', justifyContent: 'space-between' }}>
                <div>
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => setHasSpouse(true)}
                    disabled={hasSpouse}
                  >
                    + Add Spouse
                  </button>
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => setDependents(Math.min(dependents + 1, MAX_DEPENDENTS))}
                    disabled={dependents >= MAX_DEPENDENTS}
                  >
                    + Add Dependent
                  </button>
                </div>
                <div>
                  <Link className="btn-secondary" href="/marketplace-location">
                    Back
                  </Link>
                  <button type="submit" className="btn-primary">
                    Next
                  </button>
                </div>
              </div>
            </form>
            {showStatus && <div className="mp-status">{status}</div>}
          </div>
        </div>
      </section>
    </>
  )
}
