# Elite QA Suite - MVP Documentation

## Overview
The **Elite QA Suite** is a high-performance React application demonstrating three core functional interfaces for a high-end Quality Assurance brand. It utilizes a mobile-first design approach with complex styling (glassmorphism, gradients, clean typography) implemented via Tailwind CSS.

## Stack
*   **Core:** React 18 (TypeScript)
*   **Styling:** Tailwind CSS (with container queries plugin)
*   **Icons:** Google Material Symbols (Outlined)
*   **Fonts:** Manrope (Display), Noto Sans (Body), Playfair Display (Serif accents)

## Key Features

### 1. Blog Interface (Elite QA Insights)
*   **Sticky Header:** Glassmorphism effect with notification badge logic.
*   **Search & Filter:** Interactive search input with focus states and horizontal scrollable category pills.
*   **Article Cards:** High-fidelity cards with hover scaling effects, lazy-load style imagery, and metadata formatting.
*   **Navigation:** Fixed bottom navigation bar with active state indication.

### 2. Services Interface (Consultation)
*   **Pricing Cards:** Distinct visual hierarchy between "Starter", "Pro" (Recommended/Gradient), and "Enterprise" tiers.
*   **Consultation Form:** Fully styled form inputs with floating labels styling (simulated via spacing) and radio button groups for project interest.
*   **Visuals:** Subtle background glow effects using absolute positioning and blurs.

### 3. Portfolio Interface (Alex Chen)
*   **Dark Mode:** Default dark theme with custom color palette (`#161618`).
*   **Glassmorphism:** Extensive use of `backdrop-blur`, borders, and white-opacity backgrounds.
*   **Animations:** Entrance animations (`slide-up`, `fade-in`) for a premium feel.
*   **Dock Navigation:** iOS-style floating dock menu.

## Next Steps (Roadmap)

1.  **Routing Implementation:**
    *   Replace the state-based view switching in `App.tsx` with `react-router-dom` to allow deep linking (e.g., `/blog`, `/portfolio`).

2.  **CMS Integration:**
    *   Connect the Blog screen to a Headless CMS (Contentful or Strapi) to fetch articles dynamically.
    *   Implement "Load More" pagination for the article list.

3.  **Form Logic:**
    *   Connect the Consultation form to an API endpoint (e.g., Formspree or a serverless function) to handle submissions.
    *   Add Zod validation for email and required fields.

4.  **Dark Mode Toggle:**
    *   While the Portfolio is strictly dark and others are light, implementing a global system-preference check or user toggle for the Blog section would enhance accessibility.

5.  **Performance Optimization:**
    *   Implement `next/image` optimization if migrating to Next.js.
    *   Add skeleton loaders for the images while fetching.
