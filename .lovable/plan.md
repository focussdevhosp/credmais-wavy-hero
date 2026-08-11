# Plan - Add "Securitizadora Credmais" Section

Implement a premium informational section about "Securitizadora Credmais" following the visual style of the provided reference image (user-uploads://image-79.png) and the existing design system.

## Proposed Changes

### 1. Components
- Create `src/components/credmais/AboutSection.tsx`:
    - Layout: Two-column grid (Content on left, Image on right).
    - Content:
        - Title: "Como organizar as finanças da sua empresa" (or adapted to Credmais context).
        - List: Numbered steps with custom circles (Gold color).
        - CTA: "Consulte" button (Gold/Orange style).
    - Image: Professional corporate image with rounded corners (40-60px radius per design system).
    - Styling: Use `Inter` for body and `Manrope` for headings, weights 200-400.

### 2. Assets
- Process an appropriate corporate image for the section if not provided (or use the one from the reference if suitable, though reference images are usually UI mockups).
- For now, use a high-quality professional placeholder or the asset from the reference if I can extract it safely.

### 3. Home Page
- Update `src/routes/index.tsx` to include the `<AboutSection />` below the Hero.

## Technical Details
- Responsive design: Stack to 1 column on mobile.
- Animations: Use `framer-motion` for reveal effects.
- Spacing: Large vertical gaps (py-24 or py-32) to maintain "premium" airy feel.
- Colors: Navy (#071A33) for text, Ice White (#F6F8FA) for background, Gold (#C7A96B) for accents.
