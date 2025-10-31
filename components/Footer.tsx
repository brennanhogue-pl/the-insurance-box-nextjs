import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <Image
                src="/the-insurance-box-logo-white.png"
                alt="The Insurance Box Logo"
                width={50}
                height={50}
                className="logo-icon"
                loading="lazy"
              />
            </div>
            <p className="footer-description">
              Your trusted partner in insurance protection. We're here to secure your future with
              comprehensive coverage and exceptional service.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <Image
                  src="/icons/blue-circle.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="social-icon"
                  loading="lazy"
                />
              </a>
              <a href="#" className="social-link">
                <Image
                  src="/icons/blue-circle.svg"
                  alt="Twitter"
                  width={24}
                  height={24}
                  className="social-icon"
                  loading="lazy"
                />
              </a>
              <a href="#" className="social-link">
                <Image
                  src="/icons/blue-circle.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="social-icon"
                  loading="lazy"
                />
              </a>
              <a href="#" className="social-link">
                <Image
                  src="/icons/blue-circle.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className="social-icon"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li>
                <Link href="/life-insurance">Life Insurance</Link>
              </li>
              <li>
                <Link href="/health-insurance">Health Insurance</Link>
              </li>
              <li>
                <Link href="/medicare">Medicare</Link>
              </li>
              <li>
                <Link href="/long-term-care">Long-Term Care</Link>
              </li>
              <li>
                <Link href="/disability-insurance">Disability Insurance</Link>
              </li>
              <li>
                <Link href="/annuities">Annuities</Link>
              </li>
              <li>
                <Link href="/financial-planning">Financial Planning</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <ul className="footer-links">
              <li>
                <a href="#">Insurance Calculator</a>
              </li>
              <li>
                <a href="#">Claims Center</a>
              </li>
              <li>
                <a href="#">Customer Portal</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul className="footer-links">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Our Team</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 The Insurance Box. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
