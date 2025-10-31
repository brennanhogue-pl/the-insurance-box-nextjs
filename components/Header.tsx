'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle mobile menu effects
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Lock body scroll
      document.body.classList.add('menu-open');

      // Handle Escape key
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsMobileMenuOpen(false);
        }
      };
      document.addEventListener('keydown', handleEscape);

      return () => {
        document.body.classList.remove('menu-open');
        document.removeEventListener('keydown', handleEscape);
      };
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Skip Link for Accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Utility Bar */}
      <div className="utility-bar" role="region" aria-label="Utility">
        <div className="utility-container">
          <div className="utility-left">
            <span className="utility-item">A+ Carriers</span>
            <span className="utility-sep">•</span>
            <span className="utility-item">15 Years Experience</span>
            <span className="utility-sep">•</span>
            <span className="utility-item">Licensed Agents</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="navbar" role="navigation" aria-label="Primary">
        <div className="nav-container">
          <Link className="nav-logo" href="/">
            <Image
              src="/the-insurance-box-logo.png"
              alt="The Insurance Box Logo"
              width={50}
              height={50}
              className="logo-icon"
            />
          </Link>
          <ul className="nav-menu" aria-label="Primary navigation">
            <li>
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-dropdown">
              <button
                className="nav-link dropdown-toggle"
                aria-expanded={isServicesOpen}
                aria-controls="services-mega"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services <span className="caret" aria-hidden="true">▼</span>
              </button>
              {/* Desktop Mega Menu */}
              <div
                id="services-mega"
                className="mega-menu"
                role="menu"
                hidden={!isServicesOpen}
              >
                <div className="mega-grid">
                  <Link className="mega-item" href="/life-insurance" role="menuitem">
                    <Image
                      src="/icons/yellow-lock.png"
                      alt=""
                      width={40}
                      height={40}
                      className="mega-icon"
                      aria-hidden="true"
                      loading="lazy"
                    />
                    <div className="mega-content">
                      <span className="mega-title">Life Insurance</span>
                      <span className="mega-desc">
                        Protect family income with term or whole life options.
                      </span>
                    </div>
                  </Link>
                  <Link className="mega-item" href="/health-insurance" role="menuitem">
                    <Image
                      src="/icons/blue-megaphone.svg"
                      alt=""
                      width={40}
                      height={40}
                      className="mega-icon"
                      aria-hidden="true"
                      loading="lazy"
                    />
                    <div className="mega-content">
                      <span className="mega-title">Health Insurance</span>
                      <span className="mega-desc">
                        Individual & family plans with subsidy guidance.
                      </span>
                    </div>
                  </Link>
                  <Link className="mega-item" href="/medicare" role="menuitem">
                    <Image
                      src="/icons/yellow-document.svg"
                      alt=""
                      width={40}
                      height={40}
                      className="mega-icon"
                      aria-hidden="true"
                      loading="lazy"
                    />
                    <div className="mega-content">
                      <span className="mega-title">Medicare</span>
                      <span className="mega-desc">
                        Understand Supplement, Advantage, and Part D.
                      </span>
                    </div>
                  </Link>
                  <Link className="mega-item" href="/long-term-care" role="menuitem">
                    <Image
                      src="/icons/blue-hand-coins.svg"
                      alt=""
                      width={40}
                      height={40}
                      className="mega-icon"
                      aria-hidden="true"
                      loading="lazy"
                    />
                    <div className="mega-content">
                      <span className="mega-title">Long-Term Care</span>
                      <span className="mega-desc">
                        Plan for in-home and facility care costs.
                      </span>
                    </div>
                  </Link>
                  <Link className="mega-item" href="/disability-insurance" role="menuitem">
                    <Image
                      src="/icons/yellow-lock.png"
                      alt=""
                      width={40}
                      height={40}
                      className="mega-icon"
                      aria-hidden="true"
                      loading="lazy"
                    />
                    <div className="mega-content">
                      <span className="mega-title">Disability Insurance</span>
                      <span className="mega-desc">
                        Replace income if illness or injury strikes.
                      </span>
                    </div>
                  </Link>
                  <Link className="mega-item" href="/annuities" role="menuitem">
                    <Image
                      src="/icons/blue-dollar.svg"
                      alt=""
                      width={40}
                      height={40}
                      className="mega-icon"
                      aria-hidden="true"
                      loading="lazy"
                    />
                    <div className="mega-content">
                      <span className="mega-title">Annuities</span>
                      <span className="mega-desc">
                        Create guaranteed retirement income streams.
                      </span>
                    </div>
                  </Link>
                  <Link className="mega-item" href="/financial-planning" role="menuitem">
                    <Image
                      src="/icons/yellow-computer.svg"
                      alt=""
                      width={40}
                      height={40}
                      className="mega-icon"
                      aria-hidden="true"
                      loading="lazy"
                    />
                    <div className="mega-content">
                      <span className="mega-title">Financial Planning</span>
                      <span className="mega-desc">
                        Holistic strategies for long-term goals.
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="mega-footer">
                  <Link className="mega-cta" href="#services">
                    Compare Plans
                  </Link>
                  <Link className="mega-cta alt" href="#contact">
                    Get Matched
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <Link href="#about" className="nav-link">
                About
              </Link>
            </li>
            <li>
              <Link href="#contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li>
              <a href="tel:+13852480612" className="nav-link call-button" aria-label="Call us at (385) 248-0612">
                Call (385) 248-0612
              </a>
            </li>
            <li>
              <Link href="#contact" className="nav-link cta-button">
                Get a Quote
              </Link>
            </li>
          </ul>
          <button
            className="hamburger"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Sheet */}
      <div
        className={`menu-sheet ${isMobileMenuOpen ? 'active' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className="menu-sheet-content">
          <div className="menu-grid">
            <Link className="menu-card" href="/life-insurance" onClick={() => setIsMobileMenuOpen(false)}>
              <Image
                src="/icons/yellow-lock.png"
                alt=""
                width={40}
                height={40}
                className="menu-card-icon"
                aria-hidden="true"
                loading="lazy"
              />
              <div className="menu-card-content">
                <span className="menu-card-title">Life Insurance</span>
                <span className="menu-card-desc">Protect your family&apos;s income with flexible options.</span>
              </div>
            </Link>
            <Link className="menu-card" href="/health-insurance" onClick={() => setIsMobileMenuOpen(false)}>
              <Image
                src="/icons/blue-megaphone.svg"
                alt=""
                width={40}
                height={40}
                className="menu-card-icon"
                aria-hidden="true"
                loading="lazy"
              />
              <div className="menu-card-content">
                <span className="menu-card-title">Health Insurance</span>
                <span className="menu-card-desc">Individual & family plans with subsidy guidance.</span>
              </div>
            </Link>
            <Link className="menu-card" href="/medicare" onClick={() => setIsMobileMenuOpen(false)}>
              <Image
                src="/icons/yellow-document.svg"
                alt=""
                width={40}
                height={40}
                className="menu-card-icon"
                aria-hidden="true"
                loading="lazy"
              />
              <div className="menu-card-content">
                <span className="menu-card-title">Medicare</span>
                <span className="menu-card-desc">Navigate Supplement, Advantage, and Part D.</span>
              </div>
            </Link>
            <Link className="menu-card" href="/long-term-care" onClick={() => setIsMobileMenuOpen(false)}>
              <Image
                src="/icons/blue-hand-coins.svg"
                alt=""
                width={40}
                height={40}
                className="menu-card-icon"
                aria-hidden="true"
                loading="lazy"
              />
              <div className="menu-card-content">
                <span className="menu-card-title">Long-Term Care</span>
                <span className="menu-card-desc">Plan for in-home and facility care costs.</span>
              </div>
            </Link>
            <Link className="menu-card" href="/disability-insurance" onClick={() => setIsMobileMenuOpen(false)}>
              <Image
                src="/icons/yellow-lock.png"
                alt=""
                width={40}
                height={40}
                className="menu-card-icon"
                aria-hidden="true"
                loading="lazy"
              />
              <div className="menu-card-content">
                <span className="menu-card-title">Disability Insurance</span>
                <span className="menu-card-desc">Replace income if illness or injury strikes.</span>
              </div>
            </Link>
            <Link className="menu-card" href="/annuities" onClick={() => setIsMobileMenuOpen(false)}>
              <Image
                src="/icons/blue-dollar.svg"
                alt=""
                width={40}
                height={40}
                className="menu-card-icon"
                aria-hidden="true"
                loading="lazy"
              />
              <div className="menu-card-content">
                <span className="menu-card-title">Annuities</span>
                <span className="menu-card-desc">Create guaranteed retirement income streams.</span>
              </div>
            </Link>
            <Link className="menu-card" href="/financial-planning" onClick={() => setIsMobileMenuOpen(false)}>
              <Image
                src="/icons/yellow-computer.svg"
                alt=""
                width={40}
                height={40}
                className="menu-card-icon"
                aria-hidden="true"
                loading="lazy"
              />
              <div className="menu-card-content">
                <span className="menu-card-title">Financial Planning</span>
                <span className="menu-card-desc">Holistic strategies for long-term goals.</span>
              </div>
            </Link>
          </div>
          <div className="menu-other-links">
            <Link className="quick-link" href="/#about" onClick={() => setIsMobileMenuOpen(false)}>
              About
            </Link>
            <Link className="quick-link" href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
        <div className="menu-sheet-footer">
          <Link href="/#contact" className="menu-cta primary" onClick={() => setIsMobileMenuOpen(false)}>
            Get a Quote
          </Link>
          <a href="tel:+13852480612" className="menu-cta secondary" aria-label="Call us at (385) 248-0612">
            Call
          </a>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="menu-backdrop"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
