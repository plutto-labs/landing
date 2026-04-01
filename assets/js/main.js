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
     3. IntersectionObserver — animaciones scroll (data-animate)
     ---------------------------------------------------------- */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('[data-animate]').forEach(el => {
    el.classList.add('opacity-0');
    observer.observe(el);
  });

  /* ----------------------------------------------------------
     4. Navbar — cambio de fondo al hacer scroll
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
