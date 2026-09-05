(function () {
  'use strict';

  // 1. Hero Entrance animations: add .is-in on animationend
  const appearEls = document.querySelectorAll('.appear, .hero-photo');
  appearEls.forEach(function (el) {
    el.addEventListener('animationend', function () {
      el.classList.add('is-in');
    }, { once: true });
  });

  // 2. Fallback after rAF to guarantee .is-in
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      appearEls.forEach(function (el) {
        if (typeof el.getAnimations === 'function') {
          const anims = el.getAnimations();
          const isRunningOrDone = anims.some(a => a.playState === 'running' || a.playState === 'finished');
          if (!isRunningOrDone) {
            el.classList.add('is-in');
          }
        }
      });
    });
  });

  // 3. Scroll Reveal Intersection Observer (Fade from Left / Right / Bottom / Scale)
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -80px 0px',
      threshold: 0.12
    };

    const revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealEls = document.querySelectorAll('.scroll-reveal');
    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    document.querySelectorAll('.scroll-reveal').forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  // 4. Interactive Mouse Spotlight Glow Tracking (Kept as requested)
  const mouseSpotlight = document.getElementById('mouse-spotlight');
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;

  window.addEventListener('mousemove', function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (mouseSpotlight) {
      mouseSpotlight.style.setProperty('--mouse-x', mouseX + 'px');
      mouseSpotlight.style.setProperty('--mouse-y', mouseY + 'px');
    }
  }, { passive: true });

  // 5. 3D Perspective Card Tilt Handler (Mouse Hover)
  const tiltCards = document.querySelectorAll('.tilt-card');
  tiltCards.forEach(function (card) {
    card.addEventListener('mousemove', function (e) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // Mouse position inside card
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate tilt angles (max 15 deg)
      const rotateX = ((y - centerY) / centerY) * -12;
      const rotateY = ((x - centerX) / centerX) * 12;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', function () {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });

  // 6. Mobile Burger Menu Toggle
  const burgerBtn = document.getElementById('burger-btn');
  const menuBackdrop = document.getElementById('menu-backdrop');
  const siteNav = document.getElementById('site-nav');

  function toggleMenu(open) {
    const shouldOpen = typeof open === 'boolean' ? open : !document.body.classList.contains('menu-open');
    if (shouldOpen) {
      document.body.classList.add('menu-open');
      if (burgerBtn) {
        burgerBtn.setAttribute('aria-expanded', 'true');
        burgerBtn.setAttribute('aria-label', 'Close menu');
      }
    } else {
      document.body.classList.remove('menu-open');
      if (burgerBtn) {
        burgerBtn.setAttribute('aria-expanded', 'false');
        burgerBtn.setAttribute('aria-label', 'Open menu');
      }
    }
  }

  if (burgerBtn) {
    burgerBtn.addEventListener('click', toggleMenu);
  }
  if (menuBackdrop) {
    menuBackdrop.addEventListener('click', function () { toggleMenu(false); });
  }

  if (siteNav) {
    const navLinks = siteNav.querySelectorAll('a');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        toggleMenu(false);
      });
    });
  }

  window.addEventListener('resize', function () {
    if (window.innerWidth >= 901) {
      toggleMenu(false);
    }
  });

  window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      toggleMenu(false);
    }
  });

})();
