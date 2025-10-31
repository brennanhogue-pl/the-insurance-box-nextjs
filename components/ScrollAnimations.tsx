'use client';

import { useEffect } from 'react';

export default function ScrollAnimations() {
  useEffect(() => {
    // Elements to animate on scroll
    const animatedElements = document.querySelectorAll('.service-card, .feature, .about-feature');

    if (!animatedElements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = '1';
            (entry.target as HTMLElement).style.transform = 'translateY(0)';
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    animatedElements.forEach(el => {
      const element = el as HTMLElement;
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
