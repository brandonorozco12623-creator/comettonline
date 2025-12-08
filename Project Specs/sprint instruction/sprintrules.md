# Sprint Rules: Deterministic Development System for comett! Website

**Version**: 1.0  
**Last Updated**: December 8, 2025  
**Project**: comett! Promotional Website  
**Purpose**: Provide a deterministic, outcome-driven framework for development sprints

---

## Overview

This document establishes a **strict, outcome-based system** for executing development work on the comett! website. Every sprint task must map to specific, measurable outcomes defined in the project specification. This ensures consistent progress toward project goals and prevents scope drift.

---

## Core Principles

### 1. Outcome-Driven Development
Every task must have a **clearly defined, testable outcome**. No work is considered complete until the outcome is verifiable.

### 2. Specification Adherence
All work must conform to:
- `project_spec.md` - functional requirements and success criteria
- `style_guide.md` - visual design and code standards
- Client requirements documented in `Reference.md`

### 3. Test-Before-Complete
No feature is "done" until it passes all relevant tests from the verification checklist.

### 4. Progressive Enhancement
Build from mobile-first foundation, progressively adding desktop enhancements. Never break mobile to fix desktop.

---

## Sprint Execution Framework

### Phase Gate System

Each phase has **mandatory completion criteria** that must be met before proceeding to the next phase.

---

## PHASE 1: FOUNDATION

### Objective
Establish the technical foundation and basic structure.

### Mandatory Outcomes

#### 1.1 Project Setup
**Outcome**: Functional development environment with version control

**Verification**:
- [ ] Git repository initialized with appropriate .gitignore
- [ ] Project directory structure created
- [ ] README.md with setup instructions exists
- [ ] Package.json (if applicable) configured
- [ ] Development server can run locally

**Acceptance Criteria**:
```bash
# Must execute without errors
git status
# Must show organized structure
ls -R
```

#### 1.2 HTML Semantic Structure
**Outcome**: Valid, semantic HTML5 markup for entire page

**Verification**:
- [ ] DOCTYPE and lang attribute set correctly
- [ ] Meta tags for viewport, charset, description present
- [ ] Semantic elements used: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- [ ] All 7 platform links present with correct hrefs
- [ ] ARIA labels applied where needed
- [ ] HTML validates at https://validator.w3.org/

**Acceptance Criteria**:
```html
<!-- Must include all required sections -->
<header><!-- Navigation --></header>
<main>
  <section class="hero"><!-- Artist name --></section>
  <section class="links"><!-- All 7 links --></section>
</main>
<footer><!-- Copyright, cookie policy --></footer>
```

**Link Verification**:
- [ ] Instagram: https://www.instagram.com/itsacomett
- [ ] YouTube: https://www.youtube.com/@itsacomett
- [ ] Bandsintown: https://artists.landr.com/990591973336
- [ ] Apple Music: https://music.apple.com/us/artist/itsacomett/1766630955
- [ ] Spotify: https://open.spotify.com/artist/3OnuCKSLzHyXWo1rIYCHPQ
- [ ] YouTube Music: https://music.youtube.com/channel/UCGKxVL3Fcu3BrkMQFOOUNsQ
- [ ] SoundCloud: https://soundcloud.com/itsacomett

#### 1.3 CSS Architecture
**Outcome**: Organized CSS structure with design system variables

**Verification**:
- [ ] CSS custom properties defined for all colors
- [ ] Spacing scale variables declared (8px base unit)
- [ ] Typography scale variables declared
- [ ] Mobile-first base styles applied
- [ ] CSS reset/normalize included
- [ ] File organization clear (separate files or clear sections)

**Acceptance Criteria**:
```css
:root {
  /* All 5 colors defined */
  --comet-light-metal: #d6d6db;
  --comet-muted-blue: #8f9db7;
  --comet-deep-navy: #1f2230;
  --comet-vibrant-blue: #477ab4;
  --comet-earth-teal: #4f876c;
  
  /* Spacing scale complete */
  --space-xs: 0.5rem;
  /* ... all spacing values */
  
  /* Typography scale complete */
  --text-xs: 0.75rem;
  /* ... all text sizes */
}
```

#### 1.4 Responsive Grid System
**Outcome**: Mobile-first grid that adapts to tablet/desktop

**Verification**:
- [ ] Container element with max-width and padding
- [ ] Grid works at 320px width (smallest mobile)
- [ ] Grid adapts at 768px breakpoint (tablet)
- [ ] Grid adapts at 1024px breakpoint (desktop)
- [ ] No horizontal scrolling at any breakpoint

**Acceptance Criteria**:
Test at widths: 320px, 375px, 768px, 1024px, 1440px
- All content visible and readable
- No overflow-x
- Touch targets adequate on mobile (44px minimum)

### Phase 1 Gate Criteria
**ALL** outcomes above must be verified before proceeding to Phase 2.

**Gate Review Checklist**:
- [ ] HTML validates without errors
- [ ] CSS variables all defined and used
- [ ] Page responsive at all breakpoints
- [ ] All 7 links present (even if unstyled)
- [ ] Version control active with meaningful commits

---

## PHASE 2: VISUAL DESIGN

### Objective
Implement the complete visual design system including colors, typography, and textures.

### Mandatory Outcomes

#### 2.1 Typography Implementation
**Outcome**: All text styled per style guide with serif/sans-serif juxtaposition

**Verification**:
- [ ] Serif font loaded and applied to headings (Times New Roman or similar)
- [ ] Sans-serif font applied to body/link text (Helvetica Neue or similar)
- [ ] Monospace font applied to accent text (Courier New or similar)
- [ ] Text predominantly lowercase (informal feel)
- [ ] Font sizes follow typography scale from style guide
- [ ] Line-height adequate for readability (1.6-1.8)
- [ ] Text renders correctly across all browsers

**Acceptance Criteria**:
```css
/* Verify these rules exist and work */
.artist-name { font-family: 'Times New Roman', serif; text-transform: lowercase; }
.link-label { font-family: 'Helvetica Neue', sans-serif; text-transform: lowercase; }
.meta-text { font-family: 'Courier New', monospace; }
```

**Visual Test**: Text must be readable but maintain informal personality.

#### 2.2 Color Palette Application
**Outcome**: All 5 colors from palette applied correctly throughout design

**Verification**:
- [ ] Background uses `#1f2230` (deep navy)
- [ ] Primary text uses `#d6d6db` (light metallic)
- [ ] Links use `#477ab4` (vibrant blue)
- [ ] Organic elements tinted with `#4f876c` (earth teal)
- [ ] Color contrast meets WCAG AA (4.5:1 for normal text)
- [ ] Colors consistent across all sections

**Acceptance Criteria**:
Run WebAIM Contrast Checker:
- `#d6d6db` on `#1f2230` = PASS (must be ≥4.5:1)
- `#477ab4` on `#1f2230` = PASS
- All text/background combinations pass

**Visual Test**: Dark, moody atmosphere with metallic comet-like blues evident.

#### 2.3 Texture Layer Creation
**Outcome**: All 4 texture layers implemented (organic, grain, glitch, noise)

**Verification**:
- [ ] **Layer 1 (Organic)**: Nature photography background present
- [ ] **Layer 2 (Grain)**: Film grain texture overlay applied at 10-20% opacity
- [ ] **Layer 3 (Glitch)**: RGB channel separation effect created (ready for interactions)
- [ ] **Layer 4 (Noise)**: Subtle noise texture applied at 5-10% opacity
- [ ] Textures optimized (WebP format, <200KB each)
- [ ] Textures don't obscure text readability
- [ ] Mobile version uses simplified textures

**Acceptance Criteria**:
```css
/* Verify texture layers exist */
.grain-overlay { background-image: url('grain.webp'); opacity: 0.15; }
.noise-layer { background-image: url('noise.webp'); opacity: 0.05; }
.hero { background-image: url('grass-bg.webp'); } /* with teal tint */
```

**Performance Test**:
- Total texture assets <600KB
- No visible lag when scrolling
- Mobile loads textures within 2 seconds

#### 2.4 Background Imagery and Composition
**Outcome**: Hero section has atmospheric background with layered textures

**Verification**:
- [ ] Hero background image present (grass/organic texture)
- [ ] Teal tint (`#4f876c`) applied at 20-30% opacity
- [ ] Text readable over background
- [ ] Background fixed or parallax (optional)
- [ ] Responsive images for different screen sizes
- [ ] Lazy loading implemented for below-fold images

**Acceptance Criteria**:
```html
<!-- Responsive image implementation -->
<picture>
  <source srcset="hero-mobile.webp" media="(max-width: 767px)">
  <source srcset="hero-desktop.webp" media="(min-width: 768px)">
  <img src="hero-desktop.jpg" alt="Atmospheric grass texture">
</picture>
```

#### 2.5 Link Card Design
**Outcome**: All 7 platform links styled as cards with icons

**Verification**:
- [ ] Each link is a card with border, padding, background
- [ ] Platform icon visible for each link (SVG preferred)
- [ ] Link text lowercase and readable
- [ ] Cards follow Linktree vertical stack pattern
- [ ] Cards have hover state defined (even if not animated yet)
- [ ] Touch target size ≥44px on mobile
- [ ] Cards responsive at all breakpoints

**Acceptance Criteria**:
```css
.platform-link {
  padding: var(--space-lg);
  border: 1px solid rgba(143, 157, 183, 0.3);
  background: rgba(31, 34, 48, 0.8);
  display: flex;
  align-items: center;
  gap: var(--space-md);
  min-height: 44px; /* mobile touch target */
}
```

**Visual Test**: Links must be clearly clickable and visually distinct from background.

### Phase 2 Gate Criteria
**ALL** outcomes above must be verified before proceeding to Phase 3.

**Gate Review Checklist**:
- [ ] Typography renders correctly per style guide
- [ ] All 5 colors applied and contrast tested
- [ ] 4 texture layers visible and optimized
- [ ] Hero background atmospheric and readable
- [ ] All 7 link cards styled and touch-friendly
- [ ] No performance issues on mobile

---

## PHASE 3: INTERACTIONS

### Objective
Implement all interactive behaviors, animations, and responsive components.

### Mandatory Outcomes

#### 3.1 Hover States and Transitions
**Outcome**: All interactive elements have smooth, glitch-themed hover states

**Verification**:
- [ ] Link cards have hover state with border color change
- [ ] Link cards translate up 2px on hover
- [ ] Link cards show box-shadow on hover
- [ ] Glitch effect triggers on link text hover
- [ ] Transitions smooth (0.3s duration)
- [ ] Hover states work in all desktop browsers
- [ ] No hover states cause layout shift

**Acceptance Criteria**:
```css
.platform-link:hover {
  border-color: var(--comet-vibrant-blue);
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.platform-link:hover .link-text {
  animation: glitch 0.3s ease-in-out infinite;
}
```

**Interaction Test**: Hover over each link and verify:
- Smooth transition
- Visible glitch effect
- No performance lag
- Returns to default state smoothly

#### 3.2 Glitch Effect Animations
**Outcome**: RGB channel separation and glitch animations functional

**Verification**:
- [ ] Glitch keyframe animation defined
- [ ] RGB separation effect using pseudo-elements
- [ ] Glitch only active on hover/interaction (not auto-playing)
- [ ] Animation duration 0.3s or less
- [ ] Animation doesn't cause layout shift
- [ ] Works across all browsers
- [ ] Disabled or simplified on mobile for performance

**Acceptance Criteria**:
```css
@keyframes glitch {
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
}
```

**Visual Test**: Glitch effect must be visible but not distracting.

#### 3.3 Mobile Hamburger Menu
**Outcome**: Functional hamburger menu on mobile (≤767px)

**Verification**:
- [ ] Hamburger icon visible on mobile only
- [ ] Three horizontal lines animate to X when clicked
- [ ] Menu opens/closes smoothly
- [ ] Menu accessible via keyboard (Tab, Enter, Escape)
- [ ] Focus trapped in menu when open
- [ ] Menu closes when link clicked
- [ ] Menu overlay doesn't scroll page behind it

**Acceptance Criteria**:
```css
@media (max-width: 767px) {
  .hamburger { display: flex; }
  .nav-menu { display: none; }
  .nav-menu.active { display: flex; }
}
```

**Interaction Test**:
1. Resize to mobile width
2. Click hamburger - menu opens
3. Click link - menu closes and navigates
4. Press Escape - menu closes
5. Tab through menu items - focus visible

#### 3.4 Scroll Behaviors
**Outcome**: Smooth scrolling and optional scroll-triggered animations

**Verification**:
- [ ] Smooth scroll enabled for anchor links
- [ ] Scroll indicator (if present) functions correctly
- [ ] Parallax or scroll effects perform well (optional)
- [ ] No jank or lag during scroll
- [ ] Scroll behavior respects `prefers-reduced-motion`
- [ ] Mobile scroll smooth and responsive

**Acceptance Criteria**:
```css
html { scroll-behavior: smooth; }

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  * { animation: none !important; }
}
```

#### 3.5 Loading Animations
**Outcome**: Loading states for initial page load (optional but recommended)

**Verification**:
- [ ] Loading indicator displays while assets load
- [ ] Fade-in animations for content when ready
- [ ] Loading state has personality (matches brand)
- [ ] Loading time minimized through optimization
- [ ] No layout shift when content loads

**Acceptance Criteria**:
```css
.fade-in {
  animation: fadeIn 0.6s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
```

### Phase 3 Gate Criteria
**ALL** outcomes above must be verified before proceeding to Phase 4.

**Gate Review Checklist**:
- [ ] All hover states smooth and functional
- [ ] Glitch animations work without lag
- [ ] Hamburger menu functional on mobile
- [ ] Scroll behaviors smooth
- [ ] All animations respect prefers-reduced-motion
- [ ] No interaction causes layout shift or error

---

## PHASE 4: FUNCTIONALITY

### Objective
Implement all required functional features including GDPR cookie consent.

### Mandatory Outcomes

#### 4.1 Link Functionality Testing
**Outcome**: All 7 platform links verified working and correct

**Verification**:
- [ ] Instagram link opens https://www.instagram.com/itsacomett
- [ ] YouTube link opens https://www.youtube.com/@itsacomett
- [ ] Bandsintown link opens https://artists.landr.com/990591973336
- [ ] Apple Music link opens https://music.apple.com/us/artist/itsacomett/1766630955
- [ ] Spotify link opens https://open.spotify.com/artist/3OnuCKSLzHyXWo1rIYCHPQ
- [ ] YouTube Music link opens https://music.youtube.com/channel/UCGKxVL3Fcu3BrkMQFOOUNsQ
- [ ] SoundCloud link opens https://soundcloud.com/itsacomett
- [ ] All links open in new tab (`target="_blank"`)
- [ ] All external links have `rel="noopener noreferrer"`
- [ ] Links work on mobile touch

**Acceptance Criteria**:
```html
<a href="https://www.instagram.com/itsacomett" 
   target="_blank" 
   rel="noopener noreferrer"
   aria-label="Follow comett! on Instagram">
  <!-- Icon and text -->
</a>
```

**Test Procedure**:
1. Click each link in different browsers
2. Verify correct destination
3. Verify opens in new tab
4. Test on mobile device

#### 4.2 GDPR Cookie Consent Integration
**Outcome**: Fully functional, GDPR-compliant cookie consent system

**Verification**:
- [ ] Cookie banner displays on first visit
- [ ] Accept button stores consent and hides banner
- [ ] Decline button stores rejection and hides banner
- [ ] Cookie policy link present and functional
- [ ] No tracking cookies set before consent
- [ ] Consent persists across page reloads
- [ ] User can change preferences later
- [ ] Banner accessible via keyboard
- [ ] Banner has proper ARIA attributes

**Acceptance Criteria**:
```javascript
// Must implement consent logic
function handleCookieConsent(accepted) {
  if (accepted) {
    localStorage.setItem('cookieConsent', 'accepted');
    // Enable analytics ONLY after consent
    initAnalytics();
  } else {
    localStorage.setItem('cookieConsent', 'declined');
  }
  hideCookieBanner();
}

// Check on page load
if (!localStorage.getItem('cookieConsent')) {
  showCookieBanner();
}
```

**Compliance Test**:
- [ ] No tracking scripts execute before consent
- [ ] LocalStorage/cookies only set after consent
- [ ] Privacy policy/cookie policy linked
- [ ] User can withdraw consent

#### 4.3 Form Handling (If Applicable)
**Outcome**: Contact form (if added) submits correctly with validation

**Note**: Only required if contact form added to spec.

**Verification** (if applicable):
- [ ] Form fields have labels
- [ ] Required fields validated
- [ ] Email format validated
- [ ] Success/error messages display
- [ ] Form accessible via keyboard
- [ ] Form responsive on mobile

#### 4.4 Analytics Setup (Post-Consent)
**Outcome**: Analytics initialized only after user consent

**Verification**:
- [ ] Analytics code present but not executed initially
- [ ] Analytics initialized only when consent given
- [ ] No analytics cookies before consent
- [ ] Analytics tracking pageviews correctly
- [ ] Analytics events configured (link clicks optional)

**Acceptance Criteria**:
```javascript
function initAnalytics() {
  // Only called after consent accepted
  // Google Analytics, Plausible, or similar
  console.log('Analytics initialized');
}
```

### Phase 4 Gate Criteria
**ALL** outcomes above must be verified before proceeding to Phase 5.

**Gate Review Checklist**:
- [ ] All 7 links tested and working
- [ ] Cookie consent fully functional and compliant
- [ ] No tracking before consent
- [ ] Forms validated (if applicable)
- [ ] Analytics configured correctly
- [ ] All functionality keyboard accessible

---

## PHASE 5: OPTIMIZATION

### Objective
Optimize performance, test cross-browser compatibility, ensure accessibility, and test on real devices.

### Mandatory Outcomes

#### 5.1 Image Optimization and Lazy Loading
**Outcome**: All images optimized for web with lazy loading implemented

**Verification**:
- [ ] All images converted to WebP with fallbacks
- [ ] Images compressed (photography <200KB, textures <100KB)
- [ ] Responsive images with srcset implemented
- [ ] Lazy loading applied to below-fold images
- [ ] Alt text present for all images
- [ ] Images load progressively (LQIP optional)

**Acceptance Criteria**:
```html
<picture>
  <source srcset="hero-mobile.webp" media="(max-width: 767px)" type="image/webp">
  <source srcset="hero-desktop.webp" media="(min-width: 768px)" type="image/webp">
  <img src="hero-desktop.jpg" alt="Grass texture background" loading="lazy">
</picture>
```

**Performance Test**:
- Total image size <1.5MB
- Hero image loads in <1 second
- Below-fold images lazy load correctly

#### 5.2 Performance Testing and Improvements
**Outcome**: Performance metrics meet or exceed targets

**Verification**:
- [ ] Lighthouse Performance Score ≥85 (desktop)
- [ ] Lighthouse Performance Score ≥75 (mobile)
- [ ] First Contentful Paint <2 seconds
- [ ] Time to Interactive <3.5 seconds
- [ ] Largest Contentful Paint <2.5 seconds
- [ ] Cumulative Layout Shift <0.1
- [ ] No render-blocking resources

**Acceptance Criteria**:
Run Lighthouse audit in Chrome DevTools:
```
Performance: ≥85
Accessibility: ≥90
Best Practices: ≥90
SEO: ≥90
```

**Optimization Actions**:
- Minify CSS and JavaScript
- Defer non-critical scripts
- Preload critical assets
- Reduce texture opacity on mobile
- Simplify animations on mobile

#### 5.3 Cross-Browser Testing
**Outcome**: Website functions identically across all supported browsers

**Verification**:
- [ ] Chrome (latest 2 versions) - full functionality
- [ ] Firefox (latest 2 versions) - full functionality
- [ ] Safari (latest 2 versions) - full functionality
- [ ] Edge (latest 2 versions) - full functionality
- [ ] Mobile Safari iOS 14+ - full functionality
- [ ] Chrome Mobile Android 10+ - full functionality
- [ ] Glitch effects work or gracefully degrade
- [ ] No console errors in any browser

**Test Matrix**:
| Browser | Version | Desktop | Mobile | Status |
|---------|---------|---------|--------|--------|
| Chrome  | Latest  | ✓       | ✓      | PASS   |
| Firefox | Latest  | ✓       | N/A    | PASS   |
| Safari  | Latest  | ✓       | ✓      | PASS   |
| Edge    | Latest  | ✓       | N/A    | PASS   |

**Bug Fix Criteria**: Any browser-specific bugs must be fixed before launch.

#### 5.4 Accessibility Audit and Fixes
**Outcome**: WCAG 2.1 Level AA compliance verified and documented

**Verification**:
- [ ] All images have alt text
- [ ] Heading hierarchy semantic (h1 → h2 → h3)
- [ ] Color contrast ≥4.5:1 for normal text
- [ ] Keyboard navigation fully functional
- [ ] Focus indicators visible on all interactive elements
- [ ] ARIA labels present for icon-only buttons
- [ ] Screen reader announces content correctly
- [ ] Form labels associated with inputs (if forms exist)
- [ ] Skip navigation link present
- [ ] No auto-playing audio/video

**Accessibility Tools**:
- Chrome Lighthouse Accessibility Score ≥90
- WAVE browser extension - zero errors
- axe DevTools - zero violations
- Keyboard-only navigation - complete site usable

**Test Procedure**:
1. Navigate entire site using only keyboard (Tab, Enter, Escape)
2. Use screen reader (NVDA or VoiceOver) to read page
3. Run automated accessibility scanners
4. Test with browser zoom at 200%
5. Verify prefers-reduced-motion respected

#### 5.5 Mobile Testing on Real Devices
**Outcome**: Website tested on actual iOS and Android devices

**Verification**:
- [ ] Tested on iPhone (iOS 14+)
- [ ] Tested on Android phone (Android 10+)
- [ ] Touch targets adequate size (44px minimum)
- [ ] Text readable without zoom
- [ ] Hamburger menu functions correctly
- [ ] Scroll performance smooth (no jank)
- [ ] Links open correctly from mobile
- [ ] No horizontal scrolling
- [ ] Viewport meta tag correct

**Device Test Checklist**:
```
iPhone Test:
- [ ] Safari - all features work
- [ ] All links clickable
- [ ] Hamburger menu functional
- [ ] Textures load correctly
- [ ] Performance acceptable

Android Test:
- [ ] Chrome - all features work
- [ ] All links clickable
- [ ] Hamburger menu functional
- [ ] Textures load correctly
- [ ] Performance acceptable
```

**Performance on Mobile**:
- Page load <3 seconds on 4G
- Smooth 60fps scrolling
- Touch interactions responsive (<100ms)

### Phase 5 Gate Criteria
**ALL** outcomes above must be verified before proceeding to Phase 6.

**Gate Review Checklist**:
- [ ] All images optimized and lazy loading
- [ ] Lighthouse scores meet targets (≥85 performance, ≥90 accessibility)
- [ ] Cross-browser testing complete - all browsers pass
- [ ] WCAG 2.1 AA compliance verified
- [ ] Real device testing complete - iOS and Android pass
- [ ] All issues documented and resolved

---

## PHASE 6: LAUNCH

### Objective
Final client review, QA testing, deployment, and post-launch monitoring.

### Mandatory Outcomes

#### 6.1 Client Review and Feedback Iteration
**Outcome**: Client approves design, functionality, and content

**Verification**:
- [ ] Client walkthrough scheduled and completed
- [ ] Feedback documented in writing
- [ ] All critical feedback addressed
- [ ] Client provides written approval to proceed
- [ ] Final content confirmed (text, links, images)

**Review Checklist for Client**:
- [ ] Design matches vision (juxtaposition aesthetic)
- [ ] All 7 links correct and functional
- [ ] Color palette accurate
- [ ] Typography matches preferences
- [ ] Mobile experience acceptable
- [ ] Overall atmosphere and mood correct

#### 6.2 Final QA Testing
**Outcome**: Complete end-to-end testing with zero critical bugs

**Verification**:
- [ ] All links tested in multiple browsers
- [ ] Cookie consent tested (accept/decline flows)
- [ ] Mobile hamburger menu tested
- [ ] All animations smooth and functional
- [ ] No console errors
- [ ] No 404 errors
- [ ] SSL certificate active (if domain live)
- [ ] Favicon present
- [ ] Meta tags complete (title, description, OG tags)

**Pre-Launch QA Checklist**:
```
Functionality:
- [ ] All 7 platform links work
- [ ] Cookie consent functional
- [ ] Mobile menu works
- [ ] All pages load without error

Design:
- [ ] Colors match style guide
- [ ] Typography correct
- [ ] Textures display correctly
- [ ] Responsive at all breakpoints

Performance:
- [ ] Lighthouse ≥85
- [ ] Load time <3 seconds
- [ ] No layout shift

Accessibility:
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Contrast ratios pass

Content:
- [ ] All text correct
- [ ] No typos
- [ ] Links accurate
- [ ] Images have alt text
```

#### 6.3 Domain Setup and DNS Configuration
**Outcome**: Custom domain configured and pointing to hosted site

**Verification**:
- [ ] Domain registered or transferred
- [ ] DNS records configured (A, CNAME)
- [ ] SSL certificate issued and active (HTTPS)
- [ ] WWW and non-WWW redirect correctly
- [ ] DNS propagation complete (test at multiple locations)
- [ ] Custom domain loads site correctly

**DNS Configuration Example**:
```
Type: A
Name: @
Value: [hosting IP]

Type: CNAME
Name: www
Value: [hosting domain]
```

#### 6.4 Deployment to Production
**Outcome**: Site deployed to production hosting and publicly accessible

**Verification**:
- [ ] Build process completed without errors
- [ ] Files uploaded to production server
- [ ] Environment variables configured (if applicable)
- [ ] Analytics tracking code active (post-consent)
- [ ] Production URL loads correctly
- [ ] All assets loading from correct paths
- [ ] No mixed content warnings (HTTP/HTTPS)

**Deployment Checklist**:
```bash
# Build for production
npm run build  # or equivalent

# Verify build output
ls dist/  # confirm all files present

# Deploy to hosting
# (Netlify, Vercel, GitHub Pages, or similar)

# Test production URL
curl -I https://comett.com  # verify 200 response
```

#### 6.5 Post-Launch Monitoring
**Outcome**: Site monitored for 48 hours post-launch, issues addressed immediately

**Verification**:
- [ ] Uptime monitoring configured
- [ ] Analytics tracking pageviews
- [ ] All links confirmed working in production
- [ ] No critical errors reported
- [ ] Mobile users able to access site
- [ ] Performance metrics stable
- [ ] Client notification of successful launch

**Monitoring Tasks** (First 48 Hours):
- Check analytics hourly for traffic
- Monitor error logs for issues
- Test links every 6 hours
- Check mobile experience
- Respond to client feedback immediately

**Success Metrics** (Post-Launch):
- Site uptime ≥99.9%
- Zero critical errors
- Average load time <3 seconds
- All platform links clicked (confirm via analytics)

### Phase 6 Gate Criteria
**ALL** outcomes above must be verified before project considered complete.

**Launch Gate Checklist**:
- [ ] Client written approval received
- [ ] All QA tests passed
- [ ] Domain configured with SSL
- [ ] Site deployed to production
- [ ] Post-launch monitoring active
- [ ] No critical issues in first 48 hours

---

## Success Criteria Matrix

### Quantitative Metrics (MUST MEET ALL)

| Metric | Target | Measurement Method | Pass/Fail |
|--------|--------|-------------------|-----------|
| Page Load Time | <3 seconds | Lighthouse, WebPageTest | [ ] |
| First Contentful Paint | <2 seconds | Lighthouse | [ ] |
| Time to Interactive | <3.5 seconds | Lighthouse | [ ] |
| Lighthouse Performance | ≥85 | Chrome DevTools | [ ] |
| Lighthouse Accessibility | ≥90 | Chrome DevTools | [ ] |
| Mobile Responsiveness | 100% functional | Manual testing 320px-767px | [ ] |
| Desktop Responsiveness | 100% functional | Manual testing 1024px+ | [ ] |
| Link Functionality | 7/7 working | Manual click testing | [ ] |
| WCAG 2.1 AA Compliance | 100% | WAVE, axe, manual audit | [ ] |
| Cookie Consent GDPR | 100% compliant | Legal review, functional test | [ ] |
| Cross-Browser Support | 6/6 browsers | Manual testing matrix | [ ] |

### Qualitative Metrics (CLIENT MUST APPROVE)

| Criterion | Description | Verification | Pass/Fail |
|-----------|-------------|--------------|-----------|
| Design Aesthetic Match | Glitchy-grunge + organic elements evident | Client visual review | [ ] |
| Juxtaposition Principle | Formal/informal contrast clear | Client feedback | [ ] |
| Color Palette Accuracy | All 5 colors used correctly | Visual comparison | [ ] |
| Typography Style | Serif/sans mix with lowercase | Client approval | [ ] |
| Texture Layers | 4 layers visible and balanced | Visual inspection | [ ] |
| Atmosphere & Mood | Dark, intimate, alternative feel | Client feedback | [ ] |
| Link Accessibility | Intuitive and easy to access | User testing | [ ] |
| Brand Personality | Clear and memorable | Client satisfaction | [ ] |

---

## Verification Protocol

### How to Verify Each Phase

#### Before Starting Each Phase:
1. Review all mandatory outcomes for that phase
2. Ensure previous phase gate criteria met
3. Set up testing environment for verification

#### During Phase Execution:
1. Complete each outcome in order
2. Verify each outcome immediately upon completion
3. Document any deviations from spec
4. Fix issues before proceeding to next outcome

#### After Completing Each Phase:
1. Run through entire phase gate checklist
2. Test all outcomes again end-to-end
3. Document completion with screenshots/recordings
4. Get approval to proceed (from client if applicable)

### Testing Tools Required

**Performance**:
- Chrome DevTools Lighthouse
- WebPageTest.org
- GTmetrix

**Accessibility**:
- WAVE browser extension
- axe DevTools
- Chrome Lighthouse Accessibility
- Screen reader (NVDA or VoiceOver)

**Cross-Browser**:
- Chrome, Firefox, Safari, Edge (latest)
- BrowserStack or similar for device testing

**Validation**:
- W3C HTML Validator
- W3C CSS Validator
- Link checker

**Mobile**:
- Real iPhone device
- Real Android device
- Chrome DevTools device emulation (secondary)

---

## Deviation Protocol

### When Outcomes Cannot Be Met

If any mandatory outcome cannot be achieved:

1. **Document the Issue**:
   - What outcome cannot be met
   - Why it cannot be met (technical limitation, client request, etc.)
   - Impact on project goals

2. **Propose Alternative**:
   - Alternative approach to achieve same goal
   - Adjusted acceptance criteria
   - Impact on timeline

3. **Get Approval**:
   - Client approval if affects design/functionality
   - Document approval in writing
   - Update spec and sprint rules

4. **Implement Alternative**:
   - Follow same verification process
   - Document new approach
   - Update relevant documentation

### Example Deviation Log
```
Date: [date]
Phase: [phase number]
Outcome: [outcome number]
Issue: [description of why outcome cannot be met]
Proposed Alternative: [alternative approach]
Approved By: [client/lead developer]
Status: [approved/rejected]
```

---

## Daily Sprint Workflow

### Each Development Session:

1. **Review Current Phase**: Identify next incomplete outcome
2. **Set Session Goal**: Choose specific outcome to complete
3. **Execute Work**: Code, design, test
4. **Verify Outcome**: Run through verification checklist
5. **Document Progress**: Update phase gate checklist
6. **Commit Changes**: Meaningful git commit with outcome reference

### Git Commit Format:
```
[Phase N.X] Brief description of outcome

- Verification checklist item completed
- Verification checklist item completed
- Any notes or deviations

Outcome: [outcome number] - [Status: Complete/In Progress]
```

Example:
```
[Phase 2.1] Implement typography system

- Loaded serif font for headings
- Applied sans-serif to body text
- Set all text to lowercase
- Verified font rendering across browsers

Outcome: 2.1 - Status: Complete
```

---

## Emergency Stop Criteria

### Stop Development Immediately If:

1. **Critical Accessibility Failure**: Site unusable by keyboard or screen reader
2. **Performance Regression**: Load time exceeds 5 seconds
3. **Client Vision Mismatch**: Design clearly not matching client expectations
4. **Security Issue Discovered**: Cookie consent or tracking issue
5. **Scope Creep Detected**: Work deviating from project_spec.md

### Resolution Process:
1. Stop current work
2. Document the issue
3. Consult project_spec.md and style_guide.md
4. Contact client if needed
5. Get approval before resuming
6. Update documentation with resolution

---

## Project Completion Definition

### Project is Complete When:

1. ✅ All 6 phases completed with gate criteria met
2. ✅ All mandatory outcomes verified
3. ✅ All quantitative metrics achieved
4. ✅ Client provides written final approval
5. ✅ Site deployed to production with custom domain
6. ✅ Zero critical bugs in 48-hour post-launch period
7. ✅ Documentation complete and handed off

### Handoff Deliverables:
- [ ] Source code repository access
- [ ] Deployment documentation
- [ ] Style guide (completed style_guide.md)
- [ ] Content update instructions
- [ ] Analytics access
- [ ] Domain/hosting credentials
- [ ] Maintenance recommendations

---

## Appendix: Quick Reference Checklists

### Pre-Sprint Checklist
- [ ] Previous phase gate criteria met
- [ ] Testing tools ready
- [ ] Development environment functional
- [ ] Project spec reviewed
- [ ] Style guide reviewed

### Post-Sprint Checklist
- [ ] All outcomes for session completed
- [ ] Verification checklists run
- [ ] Git commits pushed
- [ ] Progress documented
- [ ] Issues logged if any
- [ ] Next session planned

### Pre-Launch Checklist
- [ ] All 6 phases complete
- [ ] All links tested (7/7 working)
- [ ] Cookie consent functional
- [ ] Performance metrics met
- [ ] Accessibility compliant
- [ ] Cross-browser tested
- [ ] Real device tested
- [ ] Client approval received
- [ ] Domain configured
- [ ] SSL active
- [ ] Backups configured

---

**END OF SPRINT RULES**

This document provides a **strict, deterministic framework** for executing development work. All work must map to defined outcomes. No feature is complete until verified. No phase transition without gate criteria met. Follow these rules to ensure consistent, predictable progress toward project goals.

**Version**: 1.0  
**Last Updated**: December 8, 2025  
**Status**: Active Development Standard
