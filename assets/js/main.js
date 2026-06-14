(function () {
  const navbar = document.querySelector('.kalvi-navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      navbar.classList.toggle('shadow-sm', window.scrollY > 8);
    });
  }

  const featureCards = document.querySelectorAll('[data-feature-card]');
  const defaultActive = document.querySelector('.kalvi-feature-card--active');
  const featureContainer = featureCards[0] && featureCards[0].parentElement;

  featureCards.forEach(function (card) {
    card.addEventListener('mouseenter', function () {
      featureCards.forEach(function (c) {
        c.classList.remove('kalvi-feature-card--active');
      });
      card.classList.add('kalvi-feature-card--active');
    });
  });

  if (featureContainer) {
    featureContainer.addEventListener('mouseleave', function () {
      featureCards.forEach(function (c) {
        c.classList.remove('kalvi-feature-card--active');
      });
      if (defaultActive) {
        defaultActive.classList.add('kalvi-feature-card--active');
      }
    });
  }

  const teamTabs = document.querySelectorAll('[data-team-tab]');
  const teamPanels = document.querySelectorAll('[data-team-panel]');
  teamTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      const target = tab.getAttribute('data-team-tab');
      teamTabs.forEach(function (t) {
        t.classList.toggle('active', t === tab);
        t.setAttribute('aria-selected', t === tab ? 'true' : 'false');
      });
      teamPanels.forEach(function (panel) {
        panel.classList.toggle('d-none', panel.getAttribute('data-team-panel') !== target);
      });
    });
  });
})();
