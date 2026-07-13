---
name: Atelier Ethos
colors:
  surface: '#fbf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e4e2e1'
  on-surface: '#1b1c1c'
  on-surface-variant: '#504446'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0f0'
  outline: '#827476'
  outline-variant: '#d4c2c5'
  surface-tint: '#7b535c'
  primary: '#7b535c'
  on-primary: '#ffffff'
  primary-container: '#d8a7b1'
  on-primary-container: '#603b44'
  inverse-primary: '#ecb9c4'
  secondary: '#536252'
  on-secondary: '#ffffff'
  secondary-container: '#d3e4d0'
  on-secondary-container: '#576756'
  tertiary: '#71594c'
  on-tertiary: '#ffffff'
  tertiary-container: '#ccae9e'
  on-tertiary-container: '#574135'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9e0'
  primary-fixed-dim: '#ecb9c4'
  on-primary-fixed: '#2f121a'
  on-primary-fixed-variant: '#613c45'
  secondary-fixed: '#d6e7d2'
  secondary-fixed-dim: '#bacbb7'
  on-secondary-fixed: '#111f12'
  on-secondary-fixed-variant: '#3c4b3b'
  tertiary-fixed: '#fddccb'
  tertiary-fixed-dim: '#e0c0b0'
  on-tertiary-fixed: '#28180e'
  on-tertiary-fixed-variant: '#584236'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e1'
typography:
  display-lg:
    fontFamily: Libre Caslon Text
    fontSize: 64px
    fontWeight: '400'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Libre Caslon Text
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 56px
  headline-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: DM Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
  functional-button:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  gutter-desktop: 32px
  margin-desktop: 64px
  gutter-mobile: 16px
  margin-mobile: 20px
  section-padding: 80px
---

## Brand & Style

This design system is tailored for a premium B2B wholesale textile environment. The brand personality is **refined, tactile, and trustworthy**, bridging the gap between high-fashion editorial and professional industrial commerce. It evokes an emotional response of "effortless luxury"—where the complexity of bulk procurement is masked by a serene, high-end interface.

The design style is a blend of **Minimalism and Modern Editorial**. It prioritizes generous whitespace to allow textile textures and fabric swatches to breathe. Visual hierarchy is established through high-contrast serif typography and a soft, organic color palette. The experience should feel like flipping through a luxury fabric lookbook while maintaining the functional efficiency required for wholesale operations.

## Colors

The palette is rooted in a "Soft Pastel Aesthetic," utilizing muted tones that do not compete with the vibrant colors of actual textile products.

- **Primary (Dusty Rose):** Used for key brand moments, call-to-actions, and premium highlights.
- **Secondary (Sage Green):** Employed for success states, secondary actions, and organic motifs.
- **Accents (Warm Taupe):** Used for subtle borders, dividers, and decorative metadata.
- **Typography (Charcoal):** Provides a sharp, legible contrast against the warm backgrounds.
- **Backgrounds:** Ivory serves as the primary canvas for product listings, while Soft Beige is used for section containers and depth-layering.

## Typography

This design system uses a dual-typeface strategy to balance elegance with utility. 

**Libre Caslon Text** is the authoritative voice of the brand, used for all headlines and editorial pull-quotes. It provides a timeless, literary quality that signals high-end craftsmanship.

**DM Sans** handles the functional heavy lifting. It is used for product descriptions, pricing grids, and administrative forms. Its geometric yet low-contrast nature ensures legibility across dense wholesale data tables and mobile screens.

## Layout & Spacing

The layout follows a **Fluid-Fixed Hybrid** model. Large-scale imagery and hero sections utilize a 12-column fluid grid to create an immersive experience, while product catalogs and order forms are contained within a maximum width of 1440px to ensure data density remains manageable.

- **Desktop:** 12 columns, 32px gutters.
- **Tablet:** 8 columns, 24px gutters.
- **Mobile:** 4 columns, 16px gutters.

Spacing relies on an 8px base unit. Generous internal padding (64px+) is applied to sections to maintain the "luxury" feel, preventing the interface from appearing cluttered or purely transactional.

## Elevation & Depth

Hierarchy is conveyed through **Tonal Layers** and **Ambient Shadows** rather than harsh borders.

1.  **Level 0 (Base):** Ivory (#FFFDF9).
2.  **Level 1 (Surfaces):** Soft Beige (#F7F1EB) containers used to group related products or order details.
3.  **Level 2 (Interaction):** Cards and floating menus utilize a "Soft Glow" shadow. These are extra-diffused (32px blur), low opacity (8%), and tinted with the Primary Dusty Rose color to maintain warmth.
4.  **Transitions:** Soft gradients are used exclusively in page headers, transitioning from Soft Beige to Ivory to guide the eye toward the content.

## Shapes

The shape language is **Rounded**, reflecting the soft nature of textiles and fabrics. 

- **Containers & Cards:** 1rem (16px) corner radius to create a soft, approachable frame for product photography.
- **Buttons & Inputs:** 0.5rem (8px) corner radius for a professional but non-rigid appearance.
- **Interactive Tags:** Pill-shaped (fully rounded) for status indicators like "In Stock" or "Pre-Order."

## Components

### Buttons
- **Primary:** Filled Dusty Rose (#D8A7B1) with white text. High-contrast, 0.5rem radius.
- **Secondary:** Outlined in Warm Taupe (#B89B8C) with Charcoal text.
- **Tertiary:** Text-only with a Sage Green bottom-border (2px) on hover.

### Cards
Product cards feature a "bleed" layout for textile imagery. Title and SKU information are placed on an Ivory background below the image. On hover, the card gains a subtle Soft Rose shadow.

### Input Fields
Soft Beige background with a Warm Taupe bottom-only border for a "minimalist ledger" look. Focused states transition the border to Dusty Rose.

### Chips & Badges
Used for fabric types (e.g., "Silk," "Linen"). These use Sage Green backgrounds with Charcoal text for high legibility and a natural aesthetic.

### Lists & Data Tables
Wholesale pricing tiers are displayed in clean, Charcoal-bordered tables. Alternating rows use a Soft Beige tint to assist with horizontal scanning.