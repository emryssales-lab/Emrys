# Emry's Locksmithing Website (Static 5-Page Site)

This is a fast, mobile-friendly static website built with plain HTML, CSS, and JavaScript for GitHub Pages hosting.

## Pages

- `index.html` (Home)
- `automotive-locksmith.html`
- `residential-locksmith.html`
- `commercial-locksmith.html`
- `contact.html`

Shared files:
- `styles.css`
- `script.js`

## Image Placeholder Notes

Current pages use placeholder stock images from Unsplash. Replace these with your real photos:

- Home hero image in `styles.css` (`.hero` background-image)
- Automotive page image in `automotive-locksmith.html`
- Residential page image in `residential-locksmith.html`
- Commercial page image in `commercial-locksmith.html`

Recommended replacements before publishing:
- Storefront photos
- Service van photos
- Team/work photos (key cutting, lock hardware, vehicle work)

## GitHub Pages Hosting Instructions

1. Create a new GitHub repository (or use your existing one).
2. Upload all files in this project to the repository root.
3. In GitHub, go to **Settings → Pages**.
4. Under **Build and deployment**, choose:
   - **Source:** Deploy from a branch
   - **Branch:** `main` (or your default branch), folder `/ (root)`
5. Save settings and wait for deployment.
6. Your site URL will appear in the Pages settings.
7. Update schema URLs (`https://example.com`) in page `<script type="application/ld+json">` blocks to your real site domain.

## What to Replace Before Publishing (Checklist)

- [ ] **Logo**
  - Replace header text logo in each HTML file (`<a class="logo" ...>`) with image/logo markup if desired.
- [ ] **Phone**
  - Verify/update all `tel:+17015725729` links and visible phone text.
- [ ] **Storefront photos**
  - Replace placeholders with real storefront photos.
- [ ] **Service van photos**
  - Replace placeholders with real van/mobile service photos.
- [ ] **Testimonials**
  - Replace review placeholders on `index.html` with real customer feedback.

- [x] **Contact form destination**
  - Contact form opens the visitor's email app and pre-fills a message to `emryslocksmithing701@gmail.com` (`contact.html` + `script.js`).
  - If no email app is configured on the device, customers should call directly at `(701) 572-5729`.
- [ ] **Google Maps embed**
  - In `contact.html`, verify or replace the iframe `src` with your preferred Google Maps embed URL.
- [x] **Google Business Profile link**
  - In `script.js`, verify `BUSINESS_PROFILE_URL` points to your preferred Google Business Profile URL.
- [ ] **Schema URLs**
  - Review JSON-LD `url`, `sameAs`, and `image` values on each page and set them to your preferred official website/listing/image URLs.

## Editing Notes

- Business information is repeated in header/footer for local SEO and conversion.
- No fixed business hours are listed on pages by request.
- Contact page tells customers to call or view Google Business Profile for current hours and availability.
