# Digital Business Card

Mobile-first static digital business card, ready for Cloudflare Pages.

## Files

- `index.html` — page content and business links
- `style.css` — responsive design
- `script.js` — native share button
- `images/` — place your logo/photos here

## Customize

Open `index.html` and replace:

- Your Business Name
- YB logo initials
- Phone number
- Messenger URL
- Facebook URL
- Google Maps URL
- Email
- Website
- Business hours
- Address
- Instagram/TikTok links

For a real logo, replace the `YB` inside `.logo` with an `<img>` element.

## Cloudflare Pages

Upload this folder/repository to Cloudflare Pages as a static site.

No build command is required.

Build output directory: `/`

Your deployed URL can then be written to the NFC card, for example:

https://yourbusiness.pages.dev

The NFC card should contain only the URL, not the page itself.
