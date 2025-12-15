# Workflow System Documentation: AI-Assisted Development Framework

**Version**: 1.0  
**Date**: December 15, 2025  
**Purpose**: Comprehensive guide for AI assistants to replicate the comett! project workflow methodology  
**Use Case**: Building creative/artistic websites with deterministic outcomes and structured iteration

---

## Executive Summary

This document analyzes and codifies the workflow system used to build the comett! promotional website. The methodology combines **Agile-inspired sprint structures** with **design-first documentation**, creating a framework where AI assistants can collaborate effectively with human clients on creative projects while maintaining quality, consistency, and measurable progress.

### Core Philosophy

**"Documentation-Driven, Outcome-Validated Development"**

Every decision, design preference, and technical requirement is documented before implementation. Work is executed in discrete sprints with mandatory verification gates. The system ensures:
1. **Deterministic outcomes** - Clear success criteria for every task
2. **Creative flexibility** - Room for experimentation within guardrails
3. **Iterative refinement** - Continuous improvement through review cycles
4. **Knowledge preservation** - All context captured for future reference

---

## System Architecture

### Top-Level Directory Structure

```
project-root/
├── Important References/          # Design philosophy & constraints
│   ├── Reference.md              # Client requirements & design vision
│   ├── UXDesignsKey.md           # Deep design analysis & principles
│   └── [Additional reference files]
│
├── Project Specs/                 # All project specifications & work
│   ├── backlog/                  # Deferred features & components
│   ├── ready for review/         # Completed work awaiting approval
│   ├── sprint instruction/       # Sprint methodology & rules
│   │   └── sprintrules.md       # Mandatory execution framework
│   └── sprints/                  # Active development work
│       └── sprint[N]/            # Individual sprint deliverables
│
├── docs/                          # Published/deployed version
└── README.md                      # Project overview
```

---

## Part 1: Important References Folder

### Purpose
Serves as the **immutable knowledge base** containing the client's vision, design philosophy, and creative constraints. This folder is the source of truth for "why" decisions are made.

### Key Files

#### 1. Reference.md

**Function**: **Client Requirements Manifest**

**Contents**:
- **Overview**: High-level project description
- **Key Design Preferences**: Visual aesthetics, color palettes, typography
- **Design Influences**: Reference websites, visual styles, cultural touchstones
- **Required Features**: Essential functionality (links, content, interactions)
- **Overall Vibe**: Emotional tone and brand personality

**Usage Pattern**:
```markdown
## How AI Should Use This File:
1. Read FIRST before any design/development decisions
2. Cross-reference every design choice against stated preferences
3. When client requests changes, check if they align with documented vision
4. If conflict arises, cite specific sections to discuss with client
```

**Example Structure**:
```markdown
# Website Design Analysis Report

## Key Design Preferences

### Visual Aesthetic
- **Color Palette**: [Specific hex codes with descriptions]
- **Typography Mix**: [Font families and usage context]
- **Visual Style**: [Aesthetic keywords and influences]

### Design Influences
1. [Website/Brand] - [What to learn from it]
2. [Visual reference] - [Key takeaways]

### Required Features
[Enumerated list of must-have functionality]
```

**Why This Matters**:
- **Prevents scope drift**: All work must trace back to documented requirements
- **Maintains creative consistency**: Design decisions stay aligned with vision
- **Enables confident iteration**: AI can make choices autonomously within constraints

---

#### 2. UXDesignsKey.md

**Function**: **Design Philosophy Deep Dive**

**Contents**:
- **Detailed design analysis**: Breaking down reference styles into components
- **Technical recommendations**: How to implement abstract aesthetics in code
- **Design heritage**: Historical/cultural context of chosen styles
- **UX impact analysis**: Why specific visual choices affect user experience

**Usage Pattern**:
```markdown
## How AI Should Use This File:
1. Reference when implementing visual effects (glitch, textures, animations)
2. Understand the "why" behind design choices (not just "what")
3. Make informed trade-offs (e.g., performance vs. aesthetic)
4. Generate design variations that stay true to core principles
```

**Example Structure**:
```markdown
# UX Design Analysis Summary

## Detailed Design Style Breakdown

### 1. [Style Name]

**Core Philosophy**: [One-sentence essence]

**Visual Characteristics**:
- [Trait 1]: [Specific implementation]
- [Trait 2]: [How it manifests]

**Design Heritage**:
- [Movement/Era]: [Cultural context]

**User Experience Impact**: [How users perceive this]

**Technical Implementation**:
- [Technique 1]: [CSS/JS approach]
- [Performance considerations]
```

**Why This Matters**:
- **Bridges abstract → concrete**: Translates "glitchy-grunge" into CSS filters
- **Prevents shallow implementation**: AI understands intent, not just copying
- **Enables educated improvisation**: AI can create new variations within style

---

### Folder Rationale

**Why separate "Important References" from "Project Specs"?**

| Important References | Project Specs |
|---------------------|---------------|
| **Immutable vision** | **Evolving execution** |
| "What the client wants" | "How we're building it" |
| Creative direction | Technical implementation |
| Read-only for most work | Modified constantly |
| Sets guardrails | Works within guardrails |

**AI Instruction**:
> Treat `Important References/` as the client's voice. When in doubt, re-read these files. When proposing changes, justify them against documented preferences. Never modify these files without explicit client approval.

---

## Part 2: Project Specs Folder

### Purpose
Contains all **implementation details, work planning, and deliverables**. This is where the documented vision becomes reality.

---

### 2.1 Backlog Folder

**Function**: **Deferred Work & Removed Features**

**Contents**:
- Features removed from active development but preserved for future use
- Experimental components not yet ready for production
- Alternative implementations for comparison

**Structure Example**:
```
backlog/
├── Cookie Consent Button/       # Feature moved out of sprint
│   ├── README.md               # Why it's here, how to re-integrate
│   ├── cookies.js              # Complete implementation
│   ├── cookie-consent.css      # Isolated styles
│   └── cookie-consent.html     # HTML snippet
│
├── project_spec.md             # Original full specification
└── style_guide.md              # Complete style guidelines
```

**Usage Pattern**:
```markdown
## When to Add to Backlog:
1. Feature is complete but client wants to revisit later
2. Component causes conflicts and needs refinement
3. Alternative implementation for comparison
4. Client explicitly says "not now, but save this"

## Backlog Item Requirements:
- Standalone README.md explaining context
- All code/files needed to re-integrate
- Clear instructions for future implementation
- Reason for deferral documented
```

**Why This Matters**:
- **Nothing is lost**: Completed work is preserved even if temporarily removed
- **Clean active codebase**: Keeps sprints focused on current priorities
- **Future flexibility**: Easy to revisit decisions later
- **Learning resource**: Documents what was tried and why

**Real Example from Project**:
```markdown
# Cookie Consent Button

## Overview
Centered modal-style cookie consent banner that was temporarily 
implemented in Sprint 1 but moved to backlog for future consideration.

## Why It's Here
User reported persistent issues with positioning and UX behavior. 
Rather than continue debugging, we decided to focus on core features 
and revisit cookie consent in a future sprint with fresh perspective.

## Files Included
[Complete list of isolated components]

## Re-integration Instructions
[Step-by-step guide to add back to website]
```

---

### 2.2 Ready for Review Folder

**Function**: **Quality Gate for Completed Work**

**Contents**:
- Completed sprint deliverables awaiting client approval
- Comprehensive verification documentation
- Visual guides and summaries

**Structure Example**:
```
ready for review/
└── sprint1review/
    ├── README.md            # What was built
    ├── SUMMARY.md           # Executive summary
    ├── VERIFICATION.md      # Test results
    ├── VISUAL_GUIDE.md      # Screenshots/descriptions
    ├── index.html           # Complete deliverable
    ├── css/                 # All stylesheets
    └── js/                  # All scripts
```

**Usage Pattern**:
```markdown
## When Work Moves to "Ready for Review":
1. All acceptance criteria from sprintrules.md are met
2. VERIFICATION.md shows all tests passing
3. Code is clean and commented
4. Visual guide documents all features
5. README.md summarizes what changed

## Review Process:
1. Client examines deliverable
2. Reviews verification checklist
3. Tests in live environment
4. Provides feedback or approval
5. Approved work moves to deployment
```

**Key Files**:

#### SUMMARY.md
```markdown
# Sprint [N] Summary

## What Was Built
[Concise list of features]

## Design Decisions
[Key choices made and why]

## Technical Highlights
[Interesting implementations]

## Known Limitations
[What isn't perfect yet]

## Next Steps
[Recommended follow-up work]
```

#### VERIFICATION.md
```markdown
# Sprint [N] Verification Checklist

## Functional Requirements
- [x] All 7 platform links working
- [x] Responsive design tested (mobile, tablet, desktop)
- [x] Animations performing smoothly

## Design Requirements
- [x] Color palette matches Reference.md
- [x] Typography follows UXDesignsKey.md principles
- [x] Glitch effects implemented correctly

## Technical Requirements
- [x] HTML validates
- [x] CSS follows architecture
- [x] No console errors
```

**Why This Matters**:
- **Quality assurance**: Nothing reaches client without validation
- **Clear communication**: Client sees exactly what changed
- **Accountability**: Every requirement is checked off
- **Efficient feedback**: Client can quickly assess and respond

---

### 2.3 Sprint Instruction Folder

**Function**: **Execution Methodology Documentation**

**Key File**: `sprintrules.md`

**Function**: **The Development Constitution**

This is the most critical document for AI assistants. It defines **exactly how to execute work** with deterministic outcomes.

**Contents Structure**:

```markdown
# Sprint Rules: Deterministic Development System

## Overview
[Why this system exists]

## Core Principles
1. Outcome-Driven Development
2. Specification Adherence
3. Test-Before-Complete
4. Progressive Enhancement

## Sprint Execution Framework

### PHASE 1: FOUNDATION
#### 1.1 Project Setup
**Outcome**: [Specific, testable goal]
**Verification**: [Checklist of proofs]
**Acceptance Criteria**: [Code/commands that must work]

#### 1.2 [Next Task]
[Same structure]

### PHASE 2: CORE FEATURES
[Same structure for each task]

### PHASE 3: POLISH & OPTIMIZATION
[Same structure]

## Verification Gates
[Mandatory checkpoints before proceeding]

## Definition of Done
[Universal criteria for all work]
```

**Usage Pattern for AI**:
```markdown
## How to Use sprintrules.md:

1. **Before starting any task**:
   - Read the relevant phase section
   - Understand the specific outcome required
   - Note all verification checkpoints

2. **During implementation**:
   - Cross-reference acceptance criteria constantly
   - Complete verification checklist items as you go
   - Don't move to next task until current is fully verified

3. **After completing task**:
   - Run all acceptance criteria commands/tests
   - Document what was done in comments
   - Mark task as complete only if all checks pass

4. **If something can't be completed**:
   - Document why in detail
   - Propose alternative approach
   - Ask client for guidance rather than improvising
```

**Example Task Structure**:
```markdown
#### 2.3 Platform Link Cards

**Outcome**: All 7 platform links rendered as interactive cards with hover effects

**Verification**:
- [ ] Each link has correct href attribute
- [ ] Icons display correctly for each platform
- [ ] Hover effects trigger smoothly
- [ ] Cards are responsive across all breakpoints
- [ ] Glitch effect activates on hover
- [ ] Links open in new tabs (target="_blank")
- [ ] ARIA labels present for accessibility

**Acceptance Criteria**:
```html
<!-- Each link must follow this structure -->
<a href="[platform-url]" 
   class="platform-link"
   target="_blank"
   rel="noopener noreferrer"
   aria-label="[Action] comett! on [Platform]">
  <span class="platform-icon">[Icon]</span>
  <span class="link-text" data-text="[text]">[text]</span>
  <span class="link-arrow">→</span>
</a>
```

**Test Command**:
```bash
# Verify all links are present
grep -o 'href="http' index.html | wc -l
# Should return: 7
```
```

**Why This Matters**:
- **Eliminates ambiguity**: AI knows exactly what "done" means
- **Ensures quality**: Every task has mandatory verification
- **Prevents backtracking**: Work is complete before moving forward
- **Creates consistency**: All tasks follow same rigorous structure

---

### 2.4 Sprints Folder

**Function**: **Active Development Workspace**

**Structure**:
```
sprints/
└── sprint[N]/               # Each sprint is self-contained
    ├── README.md           # Sprint overview & setup
    ├── VERIFICATION.md     # Task completion checklist
    ├── index.html          # Working code
    ├── css/
    │   ├── reset.css
    │   ├── variables.css
    │   ├── base.css
    │   ├── layout.css
    │   ├── components.css
    │   └── main.css
    └── js/
        ├── menu.js
        ├── main.js
        └── [feature-specific files]
```

**Sprint Folder Principles**:

1. **Self-Containment**: Each sprint folder is a complete, functional website
2. **Progressive Building**: sprint2 builds on sprint1, etc.
3. **Version Control**: Each sprint can be deployed independently
4. **Comparison**: Easy to diff between sprint versions

**README.md Template**:
```markdown
# [Project Name] - Sprint [N]

**Sprint Start**: [Date]
**Sprint Goal**: [One-sentence objective]

## Project Structure
[Directory tree]

## Setup Instructions
[How to run locally]

## Development Phases Completed
- [x] Phase 1: Foundation
- [x] Phase 2: Core Features
- [ ] Phase 3: Polish & Optimization

## Features Implemented
1. [Feature]: [Description]
2. [Feature]: [Description]

## Known Issues
- [Issue]: [Status/Plan]

## Next Sprint Goals
[What's planned for next iteration]
```

**Usage Pattern for AI**:
```markdown
## Working in a Sprint Folder:

1. **Start of sprint**:
   - Create new sprint[N] directory
   - Copy previous sprint's files (if exists)
   - Update README.md with sprint goal
   - Review VERIFICATION.md checklist

2. **During sprint**:
   - Work directly in sprint folder
   - Test locally frequently
   - Check off VERIFICATION.md items as completed
   - Commit changes regularly with descriptive messages

3. **End of sprint**:
   - Ensure all acceptance criteria met
   - Complete VERIFICATION.md fully
   - Copy entire sprint folder to "ready for review"
   - Create SUMMARY.md and VISUAL_GUIDE.md
   - Notify client for review

4. **After client approval**:
   - Copy to docs/ for deployment (if applicable)
   - Archive sprint folder
   - Plan next sprint based on feedback
```

---

## Part 3: Workflow Execution Process

### The Complete Development Cycle

```
┌─────────────────────────────────────────────────────────────┐
│                    PREPARATION PHASE                         │
│                                                              │
│  1. Read Important References/                              │
│     - Reference.md (client vision)                          │
│     - UXDesignsKey.md (design principles)                   │
│                                                              │
│  2. Read Project Specs/                                     │
│     - backlog/project_spec.md (full requirements)           │
│     - sprint instruction/sprintrules.md (methodology)       │
│                                                              │
│  3. Understand Context                                      │
│     - What's been built already?                            │
│     - What's in backlog?                                    │
│     - What are client's priorities?                         │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│                      SPRINT PLANNING                         │
│                                                              │
│  1. Define Sprint Goal (1 sentence)                         │
│  2. Select Tasks from sprintrules.md                        │
│  3. Create sprint[N] folder                                 │
│  4. Generate VERIFICATION.md checklist                      │
│  5. Set up working environment                              │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│                    IMPLEMENTATION PHASE                      │
│                                                              │
│  For each task:                                             │
│    1. Read task outcome & acceptance criteria               │
│    2. Implement feature                                     │
│    3. Test against acceptance criteria                      │
│    4. Check off verification checklist                      │
│    5. Commit with descriptive message                       │
│    6. Move to next task only if current is verified         │
│                                                              │
│  Continuous:                                                │
│    - Cross-reference Reference.md for design decisions      │
│    - Apply UXDesignsKey.md principles                       │
│    - Test locally frequently                                │
│    - Document decisions in code comments                    │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│                      REVIEW PHASE                           │
│                                                              │
│  1. Complete all VERIFICATION.md items                      │
│  2. Copy sprint folder to "ready for review/"              │
│  3. Create SUMMARY.md                                       │
│  4. Create VISUAL_GUIDE.md (if UI changes)                 │
│  5. Test final deliverable thoroughly                       │
│  6. Present to client                                       │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│                    FEEDBACK CYCLE                           │
│                                                              │
│  Client Response:                                           │
│    ├─ Approved → Deploy to docs/, archive sprint           │
│    ├─ Minor changes → Iterate in sprint folder             │
│    └─ Major changes → Document in backlog, plan new sprint │
│                                                              │
│  If feature deferred:                                       │
│    - Move to backlog/ with full documentation              │
│    - Explain why (client decision or technical issue)       │
│    - Provide re-integration instructions                    │
└─────────────────────────────────────────────────────────────┘
                           ↓
                    REPEAT FOR NEXT SPRINT
```

---

## Part 4: AI Assistant Guidelines

### How to Replicate This Workflow

#### Step 1: Project Initialization

```markdown
## Create Folder Structure

mkdir -p "Important References"
mkdir -p "Project Specs/backlog"
mkdir -p "Project Specs/ready for review"
mkdir -p "Project Specs/sprint instruction"
mkdir -p "Project Specs/sprints"

## Generate Core Documents

1. Have client describe their vision
2. Create Reference.md capturing:
   - Design aesthetic keywords
   - Color palettes (specific hex codes)
   - Typography preferences
   - Required features/links
   - Overall vibe/personality
   - Design influences/reference sites

3. Research design styles mentioned
4. Create UXDesignsKey.md with:
   - Deep analysis of each style
   - Technical implementation guidance
   - UX impact considerations
   - Performance trade-offs

5. Create project_spec.md with:
   - Executive summary
   - Client requirements (detailed)
   - Functional specifications
   - Success criteria
   - Technical constraints

6. Create sprintrules.md adapted to project:
   - Core principles
   - Phase-by-phase task breakdown
   - Verification checklists
   - Acceptance criteria
   - Definition of done
```

#### Step 2: Sprint Execution

```markdown
## For Each Sprint:

1. **Plan Sprint**
   ```
   Sprint Goal: [One sentence describing what will be built]
   Tasks: [Enumerated list from sprintrules.md]
   Success Criteria: [How to know sprint is done]
   ```

2. **Create Sprint Folder**
   ```bash
   mkdir -p "Project Specs/sprints/sprint[N]/{css,js,images}"
   cd "Project Specs/sprints/sprint[N]"
   ```

3. **Generate Sprint README.md**
   - Sprint goal
   - Project structure
   - Setup instructions
   - Task list with checkboxes

4. **Generate VERIFICATION.md**
   - Copy relevant sections from sprintrules.md
   - Add checkboxes for each criterion
   - Include test commands

5. **Implement Features**
   - Work through tasks sequentially
   - Test each task before moving on
   - Check off verification items
   - Commit frequently

6. **Complete Sprint**
   - Ensure all verification items checked
   - Copy to "ready for review/"
   - Create SUMMARY.md
   - Present to client
```

#### Step 3: Quality Gates

```markdown
## Before Moving to Next Task:
- [ ] Current task meets all acceptance criteria
- [ ] Code is clean and commented
- [ ] Feature tested in browser
- [ ] Verification checklist item marked complete
- [ ] Changes committed with clear message

## Before Moving to Review:
- [ ] All sprint tasks completed
- [ ] VERIFICATION.md 100% complete
- [ ] No console errors
- [ ] Responsive design tested
- [ ] Accessibility checked
- [ ] README.md updated
- [ ] SUMMARY.md created

## Before Deployment:
- [ ] Client approval received
- [ ] All feedback addressed
- [ ] Final testing complete
- [ ] Documentation current
```

---

## Part 5: Key Success Patterns

### What Makes This Workflow Effective

#### 1. Documentation Before Implementation

**Traditional approach**: Code first, document later (often never)

**This approach**: Document vision → Specify requirements → Then code

**Benefits**:
- AI understands "why" not just "what"
- Design consistency maintained across iterations
- Easy to validate decisions against documented preferences
- New AI instances can pick up work seamlessly

#### 2. Outcome-Driven Tasks

**Traditional approach**: "Build a navigation menu"

**This approach**:
```markdown
#### 1.4 Navigation Menu

**Outcome**: Functional mobile and desktop navigation with hamburger menu

**Verification**:
- [ ] Desktop: Horizontal menu with visible links
- [ ] Mobile: Hamburger icon triggers slide-out menu
- [ ] Menu closes when link clicked
- [ ] Menu closes when clicking outside
- [ ] Smooth transitions (0.3s ease)
- [ ] Accessible (keyboard navigation, ARIA labels)

**Acceptance Criteria**:
- Menu must work without JavaScript (progressive enhancement)
- All links must be keyboard accessible
- Screen readers announce menu state

**Test**:
```javascript
// Run in browser console
document.querySelector('.hamburger').click()
// Menu should open
document.querySelector('.nav-menu').classList.contains('active')
// Should return: true
```
```

**Benefits**:
- No ambiguity about what "done" means
- AI can self-validate without human checking
- Quality is built-in, not added later
- Client can verify deliverables independently

#### 3. Backlog for Deferred Work

**Traditional approach**: Delete code that isn't working, or leave it commented out

**This approach**: Move complete implementations to organized backlog with documentation

**Benefits**:
- Nothing is lost
- Easy to revisit decisions
- Can compare alternative implementations
- Documents what was tried and why it didn't work (yet)

#### 4. Review-First Deployment

**Traditional approach**: Push directly to production

**This approach**: ready for review/ → client approval → docs/ deployment

**Benefits**:
- Client always sees work before it's live
- Structured feedback process
- Easy rollback if needed
- Maintains production quality

---

## Part 6: Common Scenarios & Solutions

### Scenario 1: Client Requests Change Mid-Sprint

**Problem**: New request doesn't fit current sprint plan

**Solution**:
```markdown
1. Document the request
2. Check if it aligns with Reference.md vision
3. Assess complexity:
   - Small change → Add to current sprint
   - Medium change → Add to next sprint
   - Large change → Create new sprint for it
4. Update VERIFICATION.md if added to current sprint
5. Update backlog if deferred
6. Confirm plan with client
```

### Scenario 2: Feature Doesn't Meet Acceptance Criteria

**Problem**: Implementation fails verification checklist

**Solution**:
```markdown
1. Don't proceed to next task
2. Document why criteria not met
3. Options:
   a. Iterate until criteria met
   b. Revise criteria (with client approval)
   c. Move to backlog with explanation
4. Never mark task complete if unverified
5. Don't ship incomplete work to review phase
```

### Scenario 3: Design Decision Not Documented

**Problem**: Need to make design choice not covered in Reference.md

**Solution**:
```markdown
1. Review UXDesignsKey.md for principles
2. Check similar decisions made previously
3. Make informed choice based on documented style
4. Document your reasoning in code comments
5. Flag for client review in SUMMARY.md
6. Add to Reference.md once approved
```

### Scenario 4: Technical Constraint Conflicts with Design

**Problem**: Design vision can't be implemented as described

**Solution**:
```markdown
1. Document the technical limitation
2. Propose alternative implementations:
   - Option A: [Description, pros/cons]
   - Option B: [Description, pros/cons]
   - Option C: [Description, pros/cons]
3. Reference similar projects that solved this
4. Present options to client with recommendation
5. Document final decision in project_spec.md
6. Update sprintrules.md if it affects methodology
```

---

## Part 7: Adapting This Workflow to Other Projects

### Universal Principles (Apply to Any Project)

1. **Document Before Building**
   - Always create Reference.md equivalent
   - Deep-dive design analysis (UXDesignsKey.md)
   - Technical specifications (project_spec.md)

2. **Outcome-Driven Tasks**
   - Every task has measurable outcome
   - Verification checklist mandatory
   - Acceptance criteria must be testable

3. **Organized Iteration**
   - Backlog for deferred work
   - Ready for review before deployment
   - Sprint-based development

4. **Preserve Context**
   - Document all decisions
   - Explain why, not just what
   - Enable future AI to continue work

### Project-Specific Adaptations

#### E-Commerce Site
```markdown
Important References/
├── Reference.md → Product strategy, brand voice, target audience
├── UXDesignsKey.md → Conversion optimization, accessibility, mobile-first
└── CompetitorAnalysis.md → Benchmark sites, feature comparison

Project Specs/
├── backlog/
│   ├── payment_integrations.md
│   └── advanced_filtering.md
├── sprintrules.md → Phase 1: Product catalog, Phase 2: Cart, Phase 3: Checkout
└── sprints/
    └── sprint1/ → Basic product pages
```

#### SaaS Dashboard
```markdown
Important References/
├── Reference.md → User workflows, data sources, pain points solved
├── UXDesignsKey.md → Information hierarchy, dashboard best practices
└── UserPersonas.md → Different user types and needs

Project Specs/
├── backlog/
│   ├── advanced_analytics.md
│   └── api_integrations.md
├── sprintrules.md → Phase 1: Auth + Dashboard, Phase 2: Data viz, Phase 3: Settings
└── sprints/
    └── sprint1/ → Login and basic dashboard
```

#### Portfolio Site
```markdown
Important References/
├── Reference.md → Personal brand, career highlights, target audience
├── UXDesignsKey.md → Visual storytelling, typography, case study format
└── ContentStrategy.md → Project selection, writing tone

Project Specs/
├── backlog/
│   ├── blog_system.md
│   └── contact_form.md
├── sprintrules.md → Phase 1: Home + Projects, Phase 2: About + Resume, Phase 3: Contact
└── sprints/
    └── sprint1/ → Hero and project grid
```

---

## Part 8: AI Assistant Checklist

### Before Starting Any Project

- [ ] Client interview completed and documented in Reference.md
- [ ] Design research completed and analyzed in UXDesignsKey.md
- [ ] Full specifications written in project_spec.md
- [ ] Sprint methodology adapted in sprintrules.md
- [ ] Folder structure created correctly
- [ ] Git repository initialized
- [ ] First sprint planned

### During Each Sprint

- [ ] Sprint goal clearly defined
- [ ] Working in correct sprint folder
- [ ] Following sprintrules.md task sequence
- [ ] Checking off VERIFICATION.md items as completed
- [ ] Cross-referencing Reference.md for design decisions
- [ ] Testing acceptance criteria before moving forward
- [ ] Committing frequently with clear messages
- [ ] Documenting decisions in code comments

### Before Marking Sprint Complete

- [ ] 100% of VERIFICATION.md checked off
- [ ] All acceptance criteria met
- [ ] Code is clean and commented
- [ ] No console errors
- [ ] Responsive design tested
- [ ] Accessibility validated
- [ ] README.md updated
- [ ] SUMMARY.md created
- [ ] VISUAL_GUIDE.md created (if UI changes)
- [ ] Copied to "ready for review/"

### After Client Review

- [ ] Feedback documented
- [ ] Changes implemented if approved
- [ ] Deferred features moved to backlog with documentation
- [ ] Approved work deployed to docs/ (if applicable)
- [ ] Sprint archived
- [ ] Next sprint planned based on feedback

---

## Conclusion

This workflow system succeeds because it creates a **shared language between human and AI**. Every decision is documented, every task is verified, and every outcome is measurable.

### For AI Assistants:
- You have complete context to make informed decisions
- You know exactly when a task is complete
- You can work autonomously within clear guardrails
- You can be replaced mid-project without knowledge loss

### For Clients:
- You see organized, incremental progress
- You can verify quality at each step
- You maintain creative control through documented vision
- You get consistent results across multiple AI sessions

### For Projects:
- Quality is built-in, not added later
- Progress is measurable and predictable
- Knowledge is preserved for future maintenance
- Success is defined before work begins

**Use this system when**:
- Building creative/artistic projects where vision matters
- Working with AI assistants on multi-session projects
- Quality and consistency are priorities
- Iterative refinement is expected

**Adapt this system when**:
- Project scale is different (larger/smaller)
- Technology stack differs (backend, mobile, etc.)
- Team structure changes (multiple developers)
- Timeline constraints vary

The core principles remain universal: **Document before building, verify before proceeding, organize for iteration, preserve for the future.**

---

**End of Workflow System Documentation**

*This framework was developed through the successful completion of the comett! promotional website project, December 2025. It represents a synthesis of Agile methodology, design-first thinking, and AI-collaborative development practices.*
