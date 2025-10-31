'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

      {/* Mobile menu would go here */}
    </>
  );
}
