# Interior Decorator — Portfolio (Vite + React + Tailwind)

This is a starter portfolio site scaffold for a professional interior decorator. It uses Vite, React, Tailwind CSS and Framer Motion for animations. The layout is scroll-based single page with sections: Hero, About, Portfolio, Philosophy, Testimonials, Contact and Footer.

Quick start (Windows cmd.exe):

1. Open a terminal in the project folder `c:\Users\Moham\OneDrive\Bureau\Samar`
2. Install dependencies:

```cmd
npm install
```

3. Start dev server:

```cmd
npm run dev
```

Notes:
- Replace placeholder images in `src/components` (Hero, About, Portfolio) with high-resolution project photos. Prefer `public/images` and update URLs.
- The contact form uses a simple `mailto:` fallback. Connect to a real backend or Formspree/Netlify functions for production submission.
- To tweak colors and fonts, edit `tailwind.config.cjs` and `src/index.css`.
- Dark mode toggle is implemented as a class toggle on `<html>`.

Next steps you might want:
- Add optimized image handling (Next.js Image or an image pipeline).
- Add serverless email integration for the booking modal.
- Replace lightbox/modal with a gallery that supports swiping on mobile.

### Deploy to GitHub Pages (free)

I added a GitHub Actions workflow to this repository that will build the project and publish the `dist/` folder to GitHub Pages when you push to `main`.

How to use:
1. Push this project to your GitHub repo (for example `https://github.com/dalimsadek/Portfolio-`).
	```cmd
	cd /d c:\Users\Moham\OneDrive\Bureau\Samar
	git init
	git add .
	git commit -m "Initial site"
	git branch -M main
	git remote add origin https://github.com/dalimsadek/Portfolio-.git
	git push -u origin main
	```
2. The workflow I added is `.github/workflows/deploy-gh-pages.yml`. When you push to `main`, GitHub Actions will run `npm ci`, `npm run build` and publish `dist/` to GitHub Pages.

3. In your repository settings -> Pages, choose the branch `gh-pages` (the workflow uses `actions-gh-pages` to publish there) and enable the site. The site will be served at `https://samart-interior.fr` (custom domain is baked in via CNAME).

Form handling for GitHub Pages (free, no API key)
------------------------------------------------
Because you asked for a free option and you don't have a SendGrid API key, the contact form falls back to Formsubmit.co when a serverless email function isn't available. FormSubmit is free and requires no server or API key: the form posts directly to `https://formsubmit.co/Samarmsadekk@gmail.com` and FormSubmit will send the submission to that email (the first time it sends a verification email to the recipient).

How it works in this project:
- The client tries your serverless endpoint `/.netlify/functions/sendEmail` briefly. If it's not present (you're not using Netlify) the form is submitted to FormSubmit automatically.
- No API key is required. The only step is that the first submission will send a verification email to `Samarmsadekk@gmail.com` — open that email and confirm to start receiving submissions.

If you'd rather use another free form backend (Formspree, Formspark, EmailJS), I can switch the code — tell me which you prefer.

Server-side email (automatic delivery to Samarmsadekk@gmail.com)
---------------------------------------------------------
I added a serverless function template for Netlify that can send form submissions via SendGrid. To enable automatic delivery to Samarmsadekk@gmail.com:

1. Deploy the site to Netlify (or Vercel). For Netlify, functions live under `netlify/functions/` and are automatically deployed.
2. In your Netlify site settings -> Build & deploy -> Environment, add:
	- `SENDGRID_API_KEY` with your SendGrid API key
	- (optional) `RECIPIENT_EMAIL` set to `Samarmsadekk@gmail.com` (the function will default to this if not provided)
	- (optional) `FROM_EMAIL` set to a verified sender email in SendGrid (recommended)
3. The contact form will POST to `/.netlify/functions/sendEmail`. If SendGrid is configured the function will send the message to `RECIPIENT_EMAIL`.

If you prefer Netlify Forms instead of a serverless email provider, you can also enable Netlify Forms. The code has a mailto fallback when the function is not configured.

Security note: keep `SENDGRID_API_KEY` private — set it only in your host's environment variables.
