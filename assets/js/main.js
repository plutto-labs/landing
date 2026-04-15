/* =============================================================
   Plutto Landing — main.js
   Brand Guide 2026
   ============================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ----------------------------------------------------------
     1. Menú móvil (hamburger toggle)
     ---------------------------------------------------------- */
  const mobileBtn  = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const iconHamburger = document.getElementById('hamburger-icon');
  const iconClose     = document.getElementById('close-icon');

  mobileBtn?.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.toggle('hidden');
    iconHamburger?.classList.toggle('hidden', !isHidden);
    iconClose?.classList.toggle('hidden', isHidden);
    mobileBtn.setAttribute('aria-expanded', String(!isHidden));
  });

  // Cerrar menú al hacer click en un link mobile
  mobileMenu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      iconHamburger?.classList.remove('hidden');
      iconClose?.classList.add('hidden');
      mobileBtn?.setAttribute('aria-expanded', 'false');
    });
  });

  // Cerrar menú al hacer click fuera
  document.addEventListener('click', (e) => {
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
      if (!mobileMenu.contains(e.target) && !mobileBtn?.contains(e.target)) {
        mobileMenu.classList.add('hidden');
        iconHamburger?.classList.remove('hidden');
        iconClose?.classList.add('hidden');
        mobileBtn?.setAttribute('aria-expanded', 'false');
      }
    }
  });

  /* ----------------------------------------------------------
     2. Tabs de módulos (sección "Qué hace Plutto")
     ---------------------------------------------------------- */
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('[data-panel]');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;

      // Actualizar botones
      tabBtns.forEach(b => {
        b.setAttribute('aria-selected', 'false');
        b.classList.remove('bg-plutto-600', 'text-white');
        b.classList.add('bg-white', 'text-gray-600');
      });
      btn.setAttribute('aria-selected', 'true');
      btn.classList.add('bg-plutto-600', 'text-white');
      btn.classList.remove('bg-white', 'text-gray-600');

      // Actualizar paneles
      tabPanels.forEach(panel => {
        if (panel.dataset.panel === target) {
          panel.classList.remove('hidden');
        } else {
          panel.classList.add('hidden');
        }
      });
    });
  });

  /* ----------------------------------------------------------
     3. IntersectionObserver — animaciones scroll premium
     Soporta: data-animate (fadeInUp), data-animate="blur" (blurIn),
              data-animate="scale" (scaleIn)
     ---------------------------------------------------------- */
  const animationMap = {
    '': 'animate-fade-in',
    'blur': 'animate-blur-in',
    'scale': 'animate-scale-in',
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const type = entry.target.getAttribute('data-animate') || '';
          const cls = animationMap[type] || 'animate-fade-in';
          entry.target.classList.add(cls);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('[data-animate]').forEach((el, i) => {
    el.classList.add('opacity-0');
    // Stagger automático para siblings en grids
    const parent = el.parentElement;
    if (parent) {
      const siblings = Array.from(parent.querySelectorAll(':scope > [data-animate]'));
      const idx = siblings.indexOf(el);
      if (idx > 0 && !el.hasAttribute('data-delay')) {
        el.style.animationDelay = (idx * 0.1) + 's';
      }
    }
    observer.observe(el);
  });

  /* ----------------------------------------------------------
     3b. Counter animado — métricas (inspirado en PureCounter)
     ---------------------------------------------------------- */
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseFloat(el.dataset.target);
        const suffix = el.dataset.suffix || '';
        const prefix = el.dataset.prefix || '';
        const decimals = el.dataset.decimals ? parseInt(el.dataset.decimals) : 0;
        const duration = 1800;
        const start = performance.now();

        function easeOutExpo(t) {
          return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
        }

        function update(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = easeOutExpo(progress);
          const current = eased * target;

          if (decimals > 0) {
            el.textContent = prefix + current.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, '.') + suffix;
          } else {
            const formatted = Math.round(current).toLocaleString('es-CL');
            el.textContent = prefix + formatted + suffix;
          }

          if (progress < 1) {
            requestAnimationFrame(update);
          }
        }

        requestAnimationFrame(update);
        counterObserver.unobserve(el);
      });
    },
    { threshold: 0.3 }
  );

  document.querySelectorAll('[data-counter]').forEach(el => {
    counterObserver.observe(el);
  });

  /* ----------------------------------------------------------
     4. Carrusel de testimonios — se inicializa en script aparte
     ---------------------------------------------------------- */

  /* ----------------------------------------------------------
     5. Navbar — cambio de fondo al hacer scroll
     ---------------------------------------------------------- */
  const navbar = document.querySelector('nav');
  if (navbar) {
    const updateNavbar = () => {
      if (window.scrollY > 20) {
        navbar.classList.remove('bg-white/90');
        navbar.classList.add('bg-white', 'shadow-sm');
      } else {
        navbar.classList.add('bg-white/90');
        navbar.classList.remove('bg-white', 'shadow-sm');
      }
    };
    window.addEventListener('scroll', updateNavbar, { passive: true });
    updateNavbar();
  }

});
