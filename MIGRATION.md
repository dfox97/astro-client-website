# GBRS Services - Astro Migration

This project is a migration of the GBRS Services website from vanilla HTML/CSS/JS to Astro.

## What's Been Migrated

### ✅ Completed

1. **Layout Structure**
   - Main layout (`src/layouts/Layout.astro`) with header, navigation, and footer
   - Responsive navigation with mobile menu
   - Floating contact buttons
   - Structured data for SEO

2. **Pages**
   - Home page (`/`)
   - About page (`/about`)
   - Services page (`/services`)
   - Projects page (`/projects`)
   
3. **Subpages**
   - About subpages: `/about/who-are-we`, `/about/certifications`
   - Service subpages: `/services/agricultural`, `/services/industrial`, `/services/groundworks`, `/services/steel-erection`

4. **Components**
   - `ContactForm.astro` - Reusable contact form with Netlify integration
   - `ProjectModal.astro` - Photo gallery modal

5. **Styles**
   - All CSS from `gbrs_limited/css` copied to `src/styles`
   - Global styles imported in layout
   - Modular CSS structure maintained

6. **Scripts**
   - `photos.js` - Photo path management system
   - `main.js` - Navigation, smooth scrolling, form handling, modal functionality
   - `projects.js` - Project filtering and pagination

## Important Notes

### Photo Assets
**You mentioned you'll handle the photo transfer yourself.** 

When ready, copy the photos from `gbrs_limited/photos/` to `astro-project/public/photos/` to maintain the same paths:

```bash
cp -r ~/personal/projects/gbrs_limited/photos ~/personal/projects/astro-project/public/
```

### Project Structure

```
astro-project/
├── public/
│   └── photos/              # Copy photos here
├── src/
│   ├── components/
│   │   ├── ContactForm.astro
│   │   └── ProjectModal.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── about/
│   │   │   ├── certifications.astro
│   │   │   └── who-are-we.astro
│   │   ├── services/
│   │   │   ├── agricultural.astro
│   │   │   ├── groundworks.astro
│   │   │   ├── industrial.astro
│   │   │   └── steel-erection.astro
│   │   ├── about.astro
│   │   ├── index.astro
│   │   ├── projects.astro
│   │   └── services.astro
│   ├── scripts/
│   │   ├── main.js
│   │   ├── photos.js
│   │   └── projects.js
│   └── styles/
│       └── [all CSS files from original]
```

## Running the Project

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Key Differences from Original

1. **Routing**: Astro uses file-based routing
   - `index.html` → `index.astro` (route: `/`)
   - `about.html` → `about.astro` (route: `/about`)
   - Subfolders create nested routes

2. **Navigation Links**: Updated to use Astro routes
   - `index.html` → `/`
   - `about.html` → `/about`
   - `services.html#agricultural` → `/services#agricultural`

3. **Script Loading**: Using `is:inline` directive for vanilla JS
   - Maintains original functionality
   - Scripts loaded in browser without bundling

4. **Active Page States**: Passed as props to Layout component
   - `activePage="home"` highlights correct nav item

## Testing Checklist

Before deploying, verify:

- [ ] All pages load correctly
- [ ] Navigation works (desktop and mobile)
- [ ] Smooth scrolling to anchors works
- [ ] Photo paths resolve correctly
- [ ] Project modals open and navigate images
- [ ] Contact form submits (test Netlify integration)
- [ ] Mobile menu opens/closes
- [ ] All links work correctly
- [ ] CSS styles match original design

## Deployment

This project is ready for deployment to:
- Netlify (form handling already configured)
- Vercel
- GitHub Pages (with adapter)

Make sure to:
1. Copy photos to `public/photos/`
2. Test all functionality
3. Update any environment-specific URLs if needed

## Original Site Reference

The original vanilla site is in: `~/personal/projects/gbrs_limited/`
