---
name: Studio Aura
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#38393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#c4c7c7'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c8c6c5'
  primary: '#c8c6c5'
  on-primary: '#313030'
  primary-container: '#0f0f0f'
  on-primary-container: '#7d7b7b'
  inverse-primary: '#5f5e5e'
  secondary: '#c8c6c5'
  on-secondary: '#313030'
  secondary-container: '#474746'
  on-secondary-container: '#b7b5b4'
  tertiary: '#e9c349'
  on-tertiary: '#3c2f00'
  tertiary-container: '#150e00'
  on-tertiary-container: '#967800'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#ffe088'
  tertiary-fixed-dim: '#e9c349'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#574500'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
typography:
  display-lg:
    fontFamily: Bodoni Moda
    fontSize: 72px
    fontWeight: '400'
    lineHeight: 80px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 52px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Bodoni Moda
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 56px
  headline-md:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '300'
    lineHeight: 32px
    letterSpacing: 0.01em
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '300'
    lineHeight: 28px
  label-sm:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.15em
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 32px
  margin-desktop: 80px
  margin-mobile: 24px
  section-gap: 160px
---

## Brand & Style

This design system is built upon the concept of "The Curated Void." It draws inspiration from high-end architectural monographs and contemporary art galleries, where the space between objects is as important as the objects themselves. The brand personality is one of quiet confidence—discreet, sophisticated, and unapologetically elite.

The visual style is a fusion of **Minimalism** and **High-Contrast Luxe**. It rejects the cluttered "utility-first" approach of mainstream web design in favor of a cinematic, editorial experience. Every element is intentional, every margin is generous, and the overall aesthetic evokes the hushed, atmospheric environment of a boutique hotel at midnight.

## Colors

The palette is anchored in a monochromatic "Dark Mode" foundation to create a sense of depth and architectural permanence.

*   **Onyx Black (#0F0F0F):** The primary canvas. Used for backgrounds to create a boundless, immersive environment.
*   **Deep Charcoal (#1A1A1A):** Used for structural elements, container surfaces, and subtle UI layering.
*   **Champagne Gold (#C5A059):** The "signature" accent. Used sparingly for highlights, active states, and call-to-action details. It should feel like a metallic inlay in a dark room.
*   **Gallery White (#F5F5F5):** Reserved strictly for typography and high-contrast iconography to ensure absolute legibility against the dark void.

## Typography

The typographic hierarchy relies on the tension between a dramatic, high-contrast serif and a clean, airy geometric sans-serif.

*   **Headlines:** Utilize **Bodoni Moda**. Its extreme stroke contrast embodies fashion and luxury. Use ample tracking for a more "breathable" feel in uppercase applications.
*   **Body Text:** Utilize **Montserrat** at light weights (300). This provides a modern, architectural counterpoint to the traditional serif headings.
*   **Labels:** All labels and small metadata should be set in Montserrat, uppercase, with generous letter spacing (15%) to evoke the feel of museum plaque inscriptions.

## Layout & Spacing

This design system employs a **Fixed Grid** philosophy with extreme margins to create an "editorial island" effect. 

*   **The 12-Column Grid:** Desktop layouts use a 12-column grid centered within an 80px margin. Gutters are intentionally wide (32px) to prevent visual crowding.
*   **Whitespace as Luxury:** Section vertical spacing is aggressive (160px+). In high-end design, "empty" space signals that the content is valuable enough to stand alone.
*   **Asymmetry:** Use intentional off-grid placement for imagery or pull-quotes to mimic the layout of a luxury lifestyle magazine.

## Elevation & Depth

To maintain the "Discreet Luxury" aesthetic, this design system avoids heavy drop shadows and standard material elevations. Depth is achieved through:

*   **Tonal Layering:** Surfaces are differentiated by slight shifts in black values (e.g., Onyx to Charcoal). 
*   **Ghost Outlines:** Borders are 1px solid lines with low opacity (10-15% white), creating "whisper" containers that define space without adding visual weight.
*   **Gold Illumination:** Instead of a shadow, an active element might have a subtle 1px gold bottom-border or a very soft, diffuse "glow" using the champagne gold color at 5% opacity.

## Shapes

The shape language is strictly **Architectural and Sharp**. 

All buttons, cards, and input fields utilize 0px border-radii. Sharp corners communicate precision, structural integrity, and a modern "edge" that aligns with architecture and fine art. Any deviation from sharp corners (such as circular avatars) should be used only for functional differentiation and kept to a minimum.

## Components

*   **Buttons:** Rectangular with 0px radius. Primary buttons are Onyx with a 1px Gold border and Gold text. Hover states invert the colors or increase the gold border thickness.
*   **Input Fields:** Minimalist "Underline" style or full ghost-box with a 1px charcoal border. Labels sit above in small, tracked-out Montserrat.
*   **Cards:** No shadows. Use a 1px Charcoal border or simply a change in background color to Deep Charcoal. Imagery within cards should have a subtle desaturation filter until hovered.
*   **Navigation:** Top-tier navigation uses Label-SM styling. The "Active" state is indicated by a thin champagne gold line above or below the text.
*   **Cursors:** In certain web implementations, consider a custom "dot" cursor in Champagne Gold to reinforce the gallery feel.
*   **Project Lists:** Large, full-bleed imagery with typography overlaying the image on hover, using the "Less is More" philosophy to hide metadata until interaction.