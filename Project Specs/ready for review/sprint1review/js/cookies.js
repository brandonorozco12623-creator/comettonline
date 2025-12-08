// Cookie Consent Handler

(function() {
  'use strict';
  
  const cookieBanner = document.querySelector('.cookie-consent');
  const acceptBtn = document.querySelector('.btn-accept');
  const declineBtn = document.querySelector('.btn-decline');
  
  if (!cookieBanner || !acceptBtn || !declineBtn) return;
  
  // Check if user has already made a choice
  function checkCookieConsent() {
    const consent = localStorage.getItem('cookieConsent');
    
    if (!consent) {
      // Show banner after short delay
      setTimeout(() => {
        cookieBanner.classList.add('visible');
      }, 1000);
    } else if (consent === 'accepted') {
      // Initialize analytics if consent was given
      initAnalytics();
    }
  }
  
  // Handle accept
  function handleAccept() {
    localStorage.setItem('cookieConsent', 'accepted');
    cookieBanner.classList.remove('visible');
    initAnalytics();
    
    // Announce to screen readers
    announceToScreenReader('Cookies accepted');
  }
  
  // Handle decline
  function handleDecline() {
    localStorage.setItem('cookieConsent', 'declined');
    cookieBanner.classList.remove('visible');
    
    // Announce to screen readers
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
  
  // Check on page load
  checkCookieConsent();
  
})();
