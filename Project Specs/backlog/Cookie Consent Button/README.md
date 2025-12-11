# Cookie Consent Button

## Overview
This is a centered modal-style cookie consent banner that was temporarily implemented in Sprint 1 but moved to backlog for future consideration.

## Files Included
- `cookies.js` - JavaScript handler for cookie consent interactions
- `cookie-consent.css` - Complete styling for modal and backdrop
- `cookie-consent.html` - HTML snippet to add to page
- `README.md` - This file

## Features
- **Centered modal** with backdrop overlay
- **Multiple interaction methods**: Accept/Decline buttons, backdrop click, Escape key
- **Smooth animations**: 300ms entrance delay, 400ms fade transitions
- **Full accessibility**: ARIA labels, keyboard support, screen reader announcements
- **No localStorage persistence** - shows on every page load
- **Responsive design** - adapts to mobile devices

## Implementation Notes
This implementation was designed to:
1. Appear centered in the viewport (not at bottom)
2. Show on every page load without localStorage
3. Provide accept/decline functionality
4. Fade smoothly in and out
5. Support keyboard navigation

## Integration Instructions (For Future Use)

### 1. Add CSS
Include `cookie-consent.css` in your main CSS file or link it separately:
```html
<link rel="stylesheet" href="path/to/cookie-consent.css">
```

### 2. Add HTML
Copy the contents of `cookie-consent.html` and paste before closing `</body>` tag.

### 3. Add JavaScript
Include `cookies.js` before closing `</body>` tag:
```html
<script src="path/to/cookies.js"></script>
```

### 4. CSS Variables Required
Make sure these CSS variables are defined:
- `--space-xl`, `--space-md`, `--space-sm`, `--space-lg`
- `--comet-light-metal`, `--comet-vibrant-blue`, `--comet-deep-navy`, `--comet-muted-blue`
- `--radius-sm`
- `--transition-base`
- `--text-sm`
- `--font-sans`

## Design Decisions
- Used backdrop overlay pattern for focus and attention
- Centered positioning for maximum visibility
- Primary/secondary button styling for clear call-to-action hierarchy
- Multiple exit paths for user flexibility
- Accessibility-first approach with ARIA and keyboard support

## Known Issues
- Requires fine-tuning for specific UX requirements
- May need localStorage implementation for production (currently disabled)
- Animation timing may need adjustment based on user feedback

## Status
**BACKLOG** - Moved from Sprint 1 for future implementation

---

*Last updated: December 11, 2025*
