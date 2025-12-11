// Cookie Consent Handler

(function() {
  'use strict';
  
  const cookieBanner = document.querySelector('.cookie-consent');
  const cookieBackdrop = document.querySelector('.cookie-backdrop');
  const acceptBtn = document.querySelector('.btn-accept');
  const declineBtn = document.querySelector('.btn-decline');
  
  if (!cookieBanner || !acceptBtn || !declineBtn) return;
  
  // Show cookie consent banner on page load
  function showCookieConsent() {
    // Delay slightly to ensure page is loaded
    setTimeout(() => {
      if (cookieBackdrop) {
        cookieBackdrop.classList.add('visible');
      }
      cookieBanner.classList.remove('hidden');
      cookieBanner.classList.add('visible');
    }, 300);
  }
  
  // Hide cookie consent banner
  function hideCookieConsent() {
    cookieBanner.classList.remove('visible');
    cookieBanner.classList.add('hidden');
    
    if (cookieBackdrop) {
      cookieBackdrop.classList.remove('visible');
    }
    
    // Clean up classes after animation
    setTimeout(() => {
      cookieBanner.classList.remove('hidden');
    }, 400);
  }
  
  // Handle accept
  function handleAccept() {
    hideCookieConsent();
    initAnalytics();
    announceToScreenReader('Cookies accepted');
  }
  
  // Handle decline
  function handleDecline() {
    hideCookieConsent();
    announceToScreenReader('Cookies declined');
  }
  
  // Initialize analytics (only after consent)
  function initAnalytics() {
    // Add your analytics initialization here
    // Example: Google Analytics, Plausible, etc.
    console.log('Analytics initialized with user consent');
    
    // This is where you would add:
    // - Google Analytics tracking code
    // - Other analytics services
    // - Only after user has given consent
  }
  
  // Announce to screen readers
  function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }
  
  // Event Listeners
  acceptBtn.addEventListener('click', handleAccept);
  declineBtn.addEventListener('click', handleDecline);
  
  // Close on backdrop click
  if (cookieBackdrop) {
    cookieBackdrop.addEventListener('click', handleDecline);
  }
  
  // Escape key to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && cookieBanner.classList.contains('visible')) {
      handleDecline();
    }
  });
  
  // Initialize - show banner on page load
  showCookieConsent();
  
})();
