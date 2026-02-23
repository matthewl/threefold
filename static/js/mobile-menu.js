// Mobile menu toggle
(function() {
  const toggle = document.getElementById('mobile-menu-toggle');
  const wrapper = document.getElementById('mobile-nav-wrapper');

  if (toggle && wrapper) {
    toggle.addEventListener('click', function() {
      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !isExpanded);
      wrapper.classList.toggle('open');
    });
  }
})();
