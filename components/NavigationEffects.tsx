'use client';

import { useEffect } from 'react';

export default function NavigationEffects() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement;

      if (anchor && anchor.hash) {
        const targetId = anchor.hash;
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
          e.preventDefault();
          const navbar = document.querySelector('.navbar') as HTMLElement;
          const navbarHeight = navbar?.offsetHeight || 70;
          const targetPosition = (targetSection as HTMLElement).offsetTop - navbarHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // Active navigation highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

    if (sections.length && navLinks.length) {
      const navbar = document.querySelector('.navbar') as HTMLElement;
      const topOffset = (navbar?.offsetHeight || 70) + 10;

      const byId = new Map<string, Element>();
      navLinks.forEach(link => {
        const href = link.getAttribute('href') || '';
        if (href.startsWith('#')) {
          byId.set(href.slice(1), link);
        }
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            if (!id) return;

            if (entry.isIntersecting) {
              navLinks.forEach(l => l.classList.remove('active'));
              const link = byId.get(id);
              if (link) link.classList.add('active');
            }
          });
        },
        {
          root: null,
          rootMargin: `-${topOffset}px 0px -60% 0px`,
          threshold: 0.3
        }
      );

      sections.forEach(sec => observer.observe(sec));

      return () => {
        observer.disconnect();
        document.removeEventListener('click', handleAnchorClick);
      };
    }

    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return null;
}
