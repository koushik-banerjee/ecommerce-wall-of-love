
# Wall of Love

A modern, React + Vite-powered showcase for customer testimonials, social proof, and community love. Designed for e-commerce and SaaS brands to elegantly display user feedback and build trust.

## Features

- **Wall of Love Page**: Dedicated page to display all testimonials with filtering and platform badges.
- **Preview Widget**: Embeddable preview section for product or landing pages.
- **Responsive Design**: Mobile-friendly, clean, and modern UI.
- **Component-Based**: Modular React components for easy customization.
- **Mock E-commerce Integration**: Example product page with Wall of Love preview.

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)

## Getting Started

1. **Install dependencies**
	```bash
	npm install
	```
2. **Run the development server**
	```bash
	npm run dev
	```
3. **Open in browser**
	Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Project Structure

- `src/`
  - `App.tsx` — Main app logic and routing
  - `constants.tsx` — Static data and configuration
  - `types.tsx` — TypeScript types
  - `components/`
	 - `EmotionTag.tsx` — Tag for testimonial emotion
	 - `FilterTabs.tsx` — Filtering UI for testimonials
	 - `PlatformBadge.tsx` — Social platform badges
	 - `SocialProofCard.tsx` — Testimonial card component
	 - `WallOfLovePage.tsx` — Full testimonials page
	 - `WallOfLovePreview.tsx` — Preview widget for embedding

## Customization

- Add or edit testimonials in `constants.tsx`.
- Adjust UI and styles via Tailwind classes in component files.
- Integrate with your backend or CMS as needed.

## License

MIT

