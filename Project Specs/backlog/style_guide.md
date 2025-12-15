git # comett! Website Style Guide

**Project**: comett! Promotional Website  
**Version**: 1.0  
**Last Updated**: December 8, 2025  
**Status**: Active Development Standard

---

## 1. Design Philosophy

### Core Principle: Juxtaposition
All design decisions must embrace **intentional contrast** across multiple dimensions. This is not compromise—it's deliberate artistic tension.

**Mandatory Contrasts**:
- Formal typography ↔ Informal language
- Polished layouts ↔ Degraded textures
- Professional structure ↔ Raw, grungy details
- Digital precision ↔ Organic imperfection
- Clean geometry ↔ Chaotic distortion

### Design Values (In Order of Priority)
1. **Authenticity** - Raw, real, intimate over corporate polish
2. **Atmosphere** - Mood and emotion over conventional clarity
3. **Texture** - Depth through layered visual noise
4. **Personality** - Underground/alternative culture signals
5. **Function** - Links must work, but with character

---

## 2. Color System

### Primary Palette
**Usage**: Backgrounds, major UI elements, text

```css
--comet-light-metal: #d6d6db;  /* Light metallic gray */
--comet-muted-blue: #8f9db7;   /* Muted blue-gray */
--comet-deep-navy: #1f2230;    /* Deep navy - primary dark */
--comet-vibrant-blue: #477ab4; /* Vibrant blue - accents */
--comet-earth-teal: #4f876c;   /* Earthy teal-green */
```

### Color Usage Rules

#### Background Hierarchy
- **Primary Background**: `#1f2230` (deep navy) - used for main page background
- **Secondary Background**: `#8f9db7` with 20-40% opacity overlays
- **Accent Areas**: `#477ab4` for highlights, hover states, CTAs

#### Text Colors
- **Primary Text**: `#d6d6db` (light metallic) on dark backgrounds
- **Secondary Text**: `#8f9db7` for less emphasis
- **Link Text (default)**: `#477ab4` (vibrant blue)
- **Link Text (hover)**: `#d6d6db` with glitch effect

#### Organic Elements
- **Nature Photography Tints**: Use `#4f876c` (earth teal) as overlay/filter on grass/organic imagery
- **Glitch Accents**: RGB separation using primary palette colors

### Color Contrast Requirements
- **WCAG AA Compliance**: Minimum 4.5:1 contrast ratio for normal text
- **Large Text**: Minimum 3:1 contrast ratio (18pt+ or 14pt+ bold)
- **Interactive Elements**: Minimum 3:1 against adjacent colors
- **Exception**: Decorative glitch elements exempt if not conveying information

### Color Application Patterns

#### DO:
✓ Use dark navy (`#1f2230`) as dominant background  
✓ Layer metallic gray (`#d6d6db`) text over dark backgrounds  
✓ Apply teal (`#4f876c`) tints to organic/nature imagery  
✓ Use vibrant blue (`#477ab4`) sparingly for emphasis  
✓ Create depth with semi-transparent color overlays  

#### DON'T:
✗ Use bright colors on bright backgrounds  
✗ Apply vibrant blue as large background areas  
✗ Create low-contrast text (unless decorative only)  
✗ Use more than 3 colors in a single composition  
✗ Ignore accessibility for core content  

---

## 3. Typography System

### Type Philosophy
**Formal fonts + Informal structure = Authentic personality**

### Font Families

#### Primary Serif (Formal/Classical)
**Usage**: Headings, artist name, emphasis text

```css
font-family: 'Times New Roman', 'Georgia', 'Garamond', serif;
```

**Characteristics**:
- Traditional, classical appearance
- Warped/distorted when used for artistic effect
- Mixed case OR all lowercase (never all uppercase)
- Letter-spacing: normal to slightly expanded

#### Primary Sans-Serif (Editorial/Minimal)
**Usage**: Body text, link labels, UI elements

```css
font-family: 'Helvetica Neue', 'Arial', 'Inter', sans-serif;
```

**Characteristics**:
- Clean, readable, modern
- **Always lowercase** for informal feel
- Bold weights for impact
- Ample line-height (1.6-1.8) for readability

#### Accent Monospace (Terminal/Cyber)
**Usage**: Secondary text, technical details, decorative elements

```css
font-family: 'Courier New', 'Monaco', 'Consolas', monospace;
```

**Characteristics**:
- Terminal/console aesthetic
- Small caps or lowercase only
- Used for timestamps, metadata, glitch text
- Letter-spacing: 0.05em

### Type Scale (Mobile-First)

#### Mobile (≤767px)
```css
--text-xs: 0.75rem;    /* 12px - metadata */
--text-sm: 0.875rem;   /* 14px - secondary */
--text-base: 1rem;     /* 16px - body */
--text-lg: 1.25rem;    /* 20px - subheadings */
--text-xl: 1.5rem;     /* 24px - headings */
--text-2xl: 2rem;      /* 32px - hero */
--text-3xl: 2.5rem;    /* 40px - artist name */
```

#### Desktop (≥1024px)
```css
--text-xs: 0.875rem;   /* 14px */
--text-sm: 1rem;       /* 16px */
--text-base: 1.125rem; /* 18px */
--text-lg: 1.5rem;     /* 24px */
--text-xl: 2rem;       /* 32px */
--text-2xl: 3rem;      /* 48px */
--text-3xl: 4rem;      /* 64px */
```

### Typography Rules

#### Formal Serif Usage
```css
/* Artist Name / Hero Text */
.artist-name {
  font-family: 'Times New Roman', serif;
  font-size: var(--text-3xl);
  font-weight: 400; /* or 700 for bold */
  text-transform: lowercase;
  letter-spacing: 0.02em;
}

/* Section Headings */
.section-heading {
  font-family: 'Times New Roman', serif;
  font-size: var(--text-xl);
  font-weight: 400;
  text-transform: lowercase;
}
```

#### Informal Sans-Serif Usage
```css
/* Body Text */
.body-text {
  font-family: 'Helvetica Neue', sans-serif;
  font-size: var(--text-base);
  font-weight: 400;
  text-transform: lowercase;
  line-height: 1.7;
}

/* Link Labels */
.link-label {
  font-family: 'Helvetica Neue', sans-serif;
  font-size: var(--text-lg);
  font-weight: 700;
  text-transform: lowercase;
}
```

#### Monospace Accent Usage
```css
/* Decorative/Technical Text */
.meta-text {
  font-family: 'Courier New', monospace;
  font-size: var(--text-xs);
  font-weight: 400;
  text-transform: lowercase;
  letter-spacing: 0.05em;
  opacity: 0.7;
}
```

### Text Treatment Rules

#### DO:
✓ Use lowercase for informal, approachable feel  
✓ Mix serif headings with sans-serif body text  
✓ Add emoticons/symbols for personality (sparingly)  
✓ Warp/distort serif text for artistic effect  
✓ Maintain readability despite stylization  
✓ Use bold weights for emphasis  

#### DON'T:
✗ Use all caps for entire sentences  
✗ Use more than 2 font families per section  
✗ Sacrifice legibility for aesthetic  
✗ Use small text (<14px) without sufficient contrast  
✗ Mix formal language with formal typography (breaks juxtaposition)  

---

## 4. Texture & Effects System

### Texture Philosophy
**Layered imperfection creates depth and authenticity**

### Texture Layers (Applied in Order)

#### Layer 1: Base Photography
**Organic/Nature imagery**
- Macro grass photography, natural textures
- High detail, tactile feel
- Tinted with `#4f876c` (earth teal) at 20-30% opacity
- Applied as full-screen background or sectional backgrounds

#### Layer 2: Print Artifacts
**2000s magazine/analog revival aesthetic**
```css
/* Film Grain */
.grain-overlay {
  background-image: url('grain-texture.png');
  opacity: 0.15;
  mix-blend-mode: multiply;
  pointer-events: none;
}

/* Halftone Pattern */
.halftone-overlay {
  background-image: repeating-radial-gradient(
    circle at center,
    transparent 0,
    transparent 2px,
    rgba(0,0,0,0.1) 2px,
    rgba(0,0,0,0.1) 4px
  );
  opacity: 0.08;
}
```

**Characteristics**:
- Moiré patterns
- Color noise/chromatic aberration
- Film grain simulation
- Scan artifacts
- Lomography color shifts

#### Layer 3: Glitch Effects
**Digital corruption aesthetic**
```css
/* RGB Channel Separation */
.glitch-text {
  position: relative;
  color: var(--comet-light-metal);
}

.glitch-text::before {
  content: attr(data-text);
  position: absolute;
  left: 2px;
  text-shadow: -2px 0 var(--comet-vibrant-blue);
  top: 0;
  color: var(--comet-vibrant-blue);
  opacity: 0.8;
  clip: rect(0, 900px, 0, 0);
}

.glitch-text::after {
  content: attr(data-text);
  position: absolute;
  left: -2px;
  text-shadow: 2px 0 var(--comet-earth-teal);
  top: 0;
  color: var(--comet-earth-teal);
  opacity: 0.8;
  clip: rect(0, 900px, 0, 0);
}
```

**Glitch Types**:
- RGB channel separation
- Pixel displacement
- Scan lines
- Data moshing simulation
- Compression artifacts
- Pixel sorting effects (vertical/horizontal)

#### Layer 4: Noise/Atmosphere
**Subtle background texture**
```css
.noise-layer {
  background-image: url('noise.png');
  opacity: 0.05;
  mix-blend-mode: overlay;
}
```

### Texture Application Rules

#### DO:
✓ Layer multiple textures at low opacity (5-20%)  
✓ Use mix-blend-modes for texture integration  
✓ Apply glitch effects on hover/interaction  
✓ Keep texture layers on separate elements  
✓ Optimize texture images (WebP format)  
✓ Test performance on mobile devices  

#### DON'T:
✗ Use textures at >30% opacity (too heavy)  
✗ Apply all effects simultaneously on mobile  
✗ Let textures obscure text readability  
✗ Use unoptimized large texture files  
✗ Animate all glitch effects simultaneously  

### Performance Guidelines
- **Desktop**: All texture layers enabled
- **Tablet**: Reduce glitch animation complexity
- **Mobile**: Simplified textures, static effects only
- **Texture file size**: <200KB per image
- **Use CSS filters** when possible over image overlays

---

## 5. Layout & Spacing

### Layout Philosophy
**Stark minimalism with intentional chaos**

### Grid System
**12-column responsive grid**

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Desktop Grid */
@media (min-width: 1024px) {
  .container {
    padding: 0 2rem;
  }
}
```

### Spacing Scale
**8px base unit system**

```css
--space-xs: 0.5rem;   /* 8px */
--space-sm: 1rem;     /* 16px */
--space-md: 1.5rem;   /* 24px */
--space-lg: 2rem;     /* 32px */
--space-xl: 3rem;     /* 48px */
--space-2xl: 4rem;    /* 64px */
--space-3xl: 6rem;    /* 96px */
```

### Layout Patterns

#### Hero Section
```css
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: var(--space-2xl) var(--space-lg);
  position: relative;
}
```

#### Link Cards (Linktree Style)
```css
.link-stack {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  padding: var(--space-xl) var(--space-lg);
}

.link-card {
  padding: var(--space-lg);
  border: 1px solid rgba(143, 157, 183, 0.3);
  background: rgba(31, 34, 48, 0.6);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.link-card:hover {
  border-color: var(--comet-vibrant-blue);
  transform: translateY(-2px);
}
```

### Responsive Breakpoints

```css
/* Mobile First Approach */
/* Base styles: 320px - 767px */

/* Tablet */
@media (min-width: 768px) {
  /* Tablet styles */
}

/* Desktop */
@media (min-width: 1024px) {
  /* Desktop styles */
}

/* Large Desktop */
@media (min-width: 1440px) {
  /* Large desktop styles */
}
```

### Spacing Rules

#### DO:
✓ Use consistent spacing scale throughout  
✓ Increase padding/margins on larger screens  
✓ Create visual breathing room with negative space  
✓ Align elements to invisible grid  
✓ Use generous line-height (1.6-1.8)  

#### DON'T:
✗ Use arbitrary spacing values  
✗ Crowd elements on mobile  
✗ Break grid alignment without intention  
✗ Use less than 44px touch targets on mobile  
✗ Ignore visual hierarchy  

---

## 6. Interactive Elements

### Link Styles

#### Default State
```css
.platform-link {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-lg);
  background: rgba(31, 34, 48, 0.8);
  border: 1px solid rgba(143, 157, 183, 0.3);
  color: var(--comet-light-metal);
  text-decoration: none;
  font-family: 'Helvetica Neue', sans-serif;
  font-size: var(--text-lg);
  font-weight: 700;
  text-transform: lowercase;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
```

#### Hover State
```css
.platform-link:hover {
  border-color: var(--comet-vibrant-blue);
  background: rgba(71, 122, 180, 0.1);
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

/* Glitch effect on hover */
.platform-link:hover .link-text {
  animation: glitch 0.3s ease-in-out infinite;
}
```

#### Focus State (Accessibility)
```css
.platform-link:focus {
  outline: 2px solid var(--comet-vibrant-blue);
  outline-offset: 2px;
}
```

#### Active State
```css
.platform-link:active {
  transform: translateY(0);
}
```

### Button Styles

#### Primary Button
```css
.btn-primary {
  padding: var(--space-md) var(--space-lg);
  background: var(--comet-vibrant-blue);
  color: var(--comet-deep-navy);
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: 700;
  text-transform: lowercase;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: var(--comet-light-metal);
  transform: scale(1.02);
}
```

### Hamburger Menu (Mobile)

```css
.hamburger {
  display: none;
  flex-direction: column;
  gap: 6px;
  width: 30px;
  height: 24px;
  cursor: pointer;
  z-index: 1000;
}

.hamburger span {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--comet-light-metal);
  transition: all 0.3s ease;
}

@media (max-width: 767px) {
  .hamburger {
    display: flex;
  }
}

/* Animated State */
.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(8px, 8px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(8px, -8px);
}
```

### Animation Library

#### Glitch Animation
```css
@keyframes glitch {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-2px, 2px);
  }
  40% {
    transform: translate(-2px, -2px);
  }
  60% {
    transform: translate(2px, 2px);
  }
  80% {
    transform: translate(2px, -2px);
  }
  100% {
    transform: translate(0);
  }
}
```

#### Fade In Animation
```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 0.6s ease-out forwards;
}
```

#### Subtle Pulse (for CTAs)
```css
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}

.pulse {
  animation: pulse 2s ease-in-out infinite;
}
```

### Interaction Rules

#### DO:
✓ Provide clear hover states for all interactive elements  
✓ Maintain focus indicators for keyboard navigation  
✓ Use subtle animations (0.3s duration)  
✓ Test all interactions on touch devices  
✓ Ensure 44x44px minimum touch target size  
✓ Apply glitch effects sparingly on hover only  

#### DON'T:
✗ Use animations longer than 0.5s  
✗ Animate all elements simultaneously  
✗ Remove focus outlines  
✗ Use hover-only interactions on mobile  
✗ Create distracting auto-playing animations  

---

## 7. Component Library

### Link Card Component

```html
<a href="https://..." class="platform-link" data-platform="spotify">
  <span class="platform-icon">
    <!-- SVG icon -->
  </span>
  <span class="link-text">listen on spotify</span>
  <span class="link-arrow">→</span>
</a>
```

```css
.platform-link {
  /* Base styles from Interactive Elements section */
}

.platform-icon {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
}

.link-text {
  flex-grow: 1;
  font-size: var(--text-lg);
  font-weight: 700;
  text-transform: lowercase;
}

.link-arrow {
  font-size: var(--text-xl);
  opacity: 0.5;
  transition: all 0.3s ease;
}

.platform-link:hover .link-arrow {
  opacity: 1;
  transform: translateX(4px);
}
```

### Cookie Consent Banner

```html
<div class="cookie-consent" role="dialog" aria-label="Cookie Consent">
  <div class="cookie-content">
    <p class="cookie-text">
      we use cookies to enhance your experience. by continuing, you accept our cookie policy.
    </p>
    <div class="cookie-actions">
      <button class="btn-accept">accept</button>
      <button class="btn-decline">decline</button>
    </div>
  </div>
</div>
```

```css
.cookie-consent {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(31, 34, 48, 0.95);
  backdrop-filter: blur(10px);
  padding: var(--space-lg);
  border-top: 1px solid rgba(143, 157, 183, 0.3);
  z-index: 9999;
  transform: translateY(100%);
  transition: transform 0.4s ease;
}

.cookie-consent.visible {
  transform: translateY(0);
}

.cookie-text {
  font-size: var(--text-sm);
  color: var(--comet-light-metal);
  margin-bottom: var(--space-md);
  text-transform: lowercase;
}

.cookie-actions {
  display: flex;
  gap: var(--space-sm);
}
```

---

## 8. Accessibility Standards

### WCAG 2.1 Level AA Compliance

#### Color Contrast
- **Normal text**: Minimum 4.5:1 contrast ratio
- **Large text** (18pt+ or 14pt+ bold): Minimum 3:1 contrast ratio
- **UI components**: Minimum 3:1 against adjacent colors
- Test using: Chrome DevTools, WebAIM Contrast Checker

#### Keyboard Navigation
- All interactive elements must be keyboard accessible
- Tab order must be logical
- Focus indicators must be visible (never `outline: none` without replacement)
- Escape key closes modals/menus

#### Screen Readers
```html
<!-- Proper semantic HTML -->
<nav aria-label="Main navigation">
  <ul>
    <li><a href="#links">links</a></li>
  </ul>
</nav>

<!-- Alt text for images -->
<img src="hero-bg.jpg" alt="Atmospheric grass texture with digital glitch effects">

<!-- ARIA labels for icons -->
<a href="https://spotify.com/..." aria-label="Listen on Spotify">
  <svg aria-hidden="true"><!-- icon --></svg>
</a>

<!-- Live regions for dynamic content -->
<div aria-live="polite" aria-atomic="true">
  <!-- Dynamic announcements -->
</div>
```

#### Focus Management
```css
/* Visible focus indicator */
*:focus {
  outline: 2px solid var(--comet-vibrant-blue);
  outline-offset: 2px;
}

/* Focus-visible for mouse vs keyboard */
*:focus:not(:focus-visible) {
  outline: none;
}

*:focus-visible {
  outline: 2px solid var(--comet-vibrant-blue);
  outline-offset: 2px;
}
```

### Accessibility Checklist

#### ✓ Required
- [ ] All images have descriptive alt text
- [ ] Color is not the only means of conveying information
- [ ] Minimum contrast ratios met for all text
- [ ] All interactive elements keyboard accessible
- [ ] Focus indicators always visible
- [ ] Headings follow semantic hierarchy (h1 → h2 → h3)
- [ ] ARIA labels for icon-only buttons
- [ ] Form inputs have associated labels
- [ ] Skip navigation link for screen readers
- [ ] No auto-playing audio/video

#### ✓ Recommended
- [ ] Reduced motion support via prefers-reduced-motion
- [ ] Font size respects user browser settings
- [ ] Touch targets minimum 44x44px
- [ ] Error messages clearly associated with form fields
- [ ] Language attribute set on html element

---

## 9. Performance Standards

### Load Time Targets
- **First Contentful Paint**: <2 seconds
- **Time to Interactive**: <3.5 seconds
- **Largest Contentful Paint**: <2.5 seconds
- **Cumulative Layout Shift**: <0.1
- **Lighthouse Performance Score**: ≥85

### Image Optimization

#### File Formats
- **Photography**: WebP with JPEG fallback
- **Icons**: SVG (preferred) or PNG
- **Textures**: WebP, optimized to <200KB

#### Responsive Images
```html
<picture>
  <source 
    srcset="hero-mobile.webp" 
    media="(max-width: 767px)" 
    type="image/webp">
  <source 
    srcset="hero-desktop.webp" 
    media="(min-width: 768px)" 
    type="image/webp">
  <img 
    src="hero-desktop.jpg" 
    alt="Atmospheric background"
    loading="lazy">
</picture>
```

#### Lazy Loading
```html
<!-- Below-the-fold images -->
<img src="texture.jpg" alt="Texture overlay" loading="lazy">
```

### CSS Optimization
- Minify CSS in production
- Use CSS custom properties for theming
- Avoid excessive use of expensive properties (box-shadow, filter)
- Limit animations to transform and opacity
- Use `will-change` sparingly for animated elements

### JavaScript Performance
- Defer non-critical JavaScript
- Minimize DOM manipulation
- Use event delegation for multiple similar elements
- Debounce scroll/resize handlers
- Lazy load glitch effects on interaction

### Mobile Performance
- Simplify texture layers on mobile
- Reduce or disable complex animations
- Optimize images more aggressively (<100KB)
- Test on real devices, not just emulators

---

## 10. Code Standards

### HTML

#### Semantic Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>comett! - musician</title>
  <!-- Meta tags, styles -->
</head>
<body>
  <header>
    <nav aria-label="Main navigation">
      <!-- Navigation -->
    </nav>
  </header>
  
  <main>
    <section class="hero" aria-labelledby="hero-heading">
      <!-- Hero content -->
    </section>
    
    <section class="links" aria-labelledby="links-heading">
      <!-- Links -->
    </section>
  </main>
  
  <footer>
    <!-- Footer content -->
  </footer>
</body>
</html>
```

#### Naming Conventions
- Use **kebab-case** for classes: `.link-card`, `.hero-section`
- Use **BEM** for complex components: `.link-card__icon`, `.link-card--hover`
- Semantic names over presentational: `.platform-link` not `.blue-button`

### CSS

#### Organization
```css
/* 1. Custom Properties */
:root {
  /* Colors, spacing, typography */
}

/* 2. Reset/Base */
* { box-sizing: border-box; }

/* 3. Typography */
body { font-family: ...; }

/* 4. Layout */
.container { ... }

/* 5. Components */
.link-card { ... }

/* 6. Utilities */
.sr-only { ... }

/* 7. Media Queries */
@media (min-width: 768px) { ... }
```

#### Best Practices
- Mobile-first media queries
- Use CSS custom properties for theming
- Avoid `!important` unless absolutely necessary
- Group related properties together
- Comment complex or non-obvious styles

### JavaScript

#### Code Style
- Use ES6+ syntax
- const/let, never var
- Arrow functions for callbacks
- Template literals for strings
- Destructuring where appropriate

#### Example
```javascript
// Cookie consent handler
const handleCookieConsent = (accepted) => {
  const banner = document.querySelector('.cookie-consent');
  
  if (accepted) {
    localStorage.setItem('cookieConsent', 'accepted');
    // Initialize analytics
  } else {
    localStorage.setItem('cookieConsent', 'declined');
  }
  
  banner.classList.remove('visible');
};

// Event listeners
document.querySelector('.btn-accept')
  .addEventListener('click', () => handleCookieConsent(true));
```

---

## 11. Content Guidelines

### Voice & Tone

#### Brand Voice
- **Authentic** - real, honest, not corporate
- **Intimate** - personal, close, direct
- **Alternative** - underground, experimental, artistic
- **Casual** - lowercase, informal, emoticons allowed

#### Tone Characteristics
- Lowercase text for approachability
- Short, punchy sentences
- Direct address ("you", not "users")
- Emoticons used sparingly for personality
- No marketing jargon or corporate speak

### Content Patterns

#### Headings
```
comett! ✨
listen to my music
find me online
```

#### Link Labels
```
listen on spotify
watch on youtube
upcoming shows
follow on instagram
```

#### Microcopy
```
// Cookie banner
we use cookies to enhance your experience. by continuing, you accept our cookie policy.

// Loading state
loading...

// Error message  
oops, something went wrong. try again?
```

### Content Rules

#### DO:
✓ Use lowercase for most text  
✓ Be direct and concise  
✓ Use contractions (we're, don't)  
✓ Add personality with occasional emoticons  
✓ Keep labels short and clear  

#### DON'T:
✗ Use corporate/marketing language  
✗ Write long paragraphs  
✗ Use all caps (unless stylistic)  
✗ Overuse emoticons  
✗ Be vague or unclear  

---

## 12. Testing Checklist

### Pre-Launch Testing

#### Visual Testing
- [ ] All colors match style guide
- [ ] Typography renders correctly across browsers
- [ ] Textures load and display properly
- [ ] Glitch effects work as intended
- [ ] Layout is responsive at all breakpoints
- [ ] Images are optimized and load quickly

#### Functional Testing
- [ ] All 7 platform links work correctly
- [ ] Cookie consent functions properly
- [ ] Mobile hamburger menu opens/closes
- [ ] Hover states work on desktop
- [ ] Touch interactions work on mobile
- [ ] Forms submit correctly (if applicable)

#### Cross-Browser Testing
- [ ] Chrome (latest 2 versions)
- [ ] Firefox (latest 2 versions)
- [ ] Safari (latest 2 versions)
- [ ] Edge (latest 2 versions)
- [ ] Mobile Safari (iOS 14+)
- [ ] Chrome Mobile (Android 10+)

#### Accessibility Testing
- [ ] Keyboard navigation works throughout
- [ ] Screen reader announces content correctly
- [ ] Color contrast meets WCAG AA standards
- [ ] Focus indicators always visible
- [ ] Alt text present for all images
- [ ] ARIA labels correct

#### Performance Testing
- [ ] Lighthouse score ≥85
- [ ] Load time <3 seconds
- [ ] No layout shifts during load
- [ ] Images lazy load correctly
- [ ] Mobile performance acceptable
- [ ] No console errors

#### Mobile Testing
- [ ] Test on actual iOS device
- [ ] Test on actual Android device
- [ ] Touch targets adequate size
- [ ] Text readable without zoom
- [ ] Hamburger menu functions
- [ ] Scroll performance smooth

---

## 13. Maintenance Guidelines

### Code Updates
- Always test changes on local environment first
- Maintain version control with meaningful commit messages
- Document any deviations from style guide
- Update style guide when adding new patterns

### Content Updates
- Follow voice & tone guidelines
- Maintain lowercase style
- Optimize new images before upload
- Test links after updates

### Performance Monitoring
- Check Lighthouse scores monthly
- Monitor page load times
- Optimize images as needed
- Review and remove unused code

---

## 14. Quick Reference

### Color Variables
```css
--comet-light-metal: #d6d6db;
--comet-muted-blue: #8f9db7;
--comet-deep-navy: #1f2230;
--comet-vibrant-blue: #477ab4;
--comet-earth-teal: #4f876c;
```

### Spacing Scale
```css
--space-xs: 0.5rem;   /* 8px */
--space-sm: 1rem;     /* 16px */
--space-md: 1.5rem;   /* 24px */
--space-lg: 2rem;     /* 32px */
--space-xl: 3rem;     /* 48px */
--space-2xl: 4rem;    /* 64px */
--space-3xl: 6rem;    /* 96px */
```

### Breakpoints
```css
/* Mobile: 320px - 767px (default) */
@media (min-width: 768px)  { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1440px) { /* Large Desktop */ }
```

### Font Families
- **Serif**: 'Times New Roman', 'Georgia', serif
- **Sans-serif**: 'Helvetica Neue', 'Arial', sans-serif
- **Monospace**: 'Courier New', 'Monaco', monospace

---

**End of Style Guide**

*This document is the authoritative reference for all design and development decisions for the comett! website project. All team members must adhere to these standards unless explicit exceptions are approved.*

**Version History**:
- v1.0 - December 8, 2025 - Initial creation
