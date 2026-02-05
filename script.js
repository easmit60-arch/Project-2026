// Theme management
function initTheme() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = prefersDark ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme);
}

// Smooth scroll behavior for navigation links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
}

// Listen for theme preference changes
function watchThemePreference() {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    const theme = e.matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
  });
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initSmoothScroll();
  watchThemePreference();
});
