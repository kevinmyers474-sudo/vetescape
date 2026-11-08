# VetEscape

VetEscape is a public, responsive and installable web app helping veterans, service members, and their families find outdoor activities, camping, retreats, and mental-health support. It is currently a static website: no VetEscape account or server-side form processor is used, and the site does not process payments.

## Public launch checklist

- Obtain qualified legal review of [Terms of Use](TERMS.md), [Privacy Statement](PRIVACY.md), and [Contributor Guidelines](CONTRIBUTING.md) for the owner's jurisdiction and actual operating model. These drafts are not legal advice or a compliance guarantee.
- Confirm GitHub Pages settings, public URL, privacy disclosures, external links, and the sponsor profile before launch.
- Verify every resource, contact method, and emergency statement with authoritative providers.
- Keep the GitHub issue submission flow free of sensitive information; it opens a public third-party service.
- Test mobile layout, keyboard access, install prompt, offline behavior, and clear-site-data behavior.

## Run locally

Open `index.html` in a browser or serve the project directory with a static file server. Service workers and installation require HTTPS, except when testing on localhost.

## Publish

Configure GitHub Pages in **Settings → Pages**, choose **Deploy from a branch**, select `build/veteran-resource-hub` and the repository root, then save. For production, merge the reviewed implementation into the default branch and publish from that branch. GitHub Pages will provide the public HTTPS URL.

## Install on phones

VetEscape is a Progressive Web App. On Android and supported desktop browsers, use **Install app** or the browser's install option. On iPhone or iPad, open the site in Safari, tap **Share**, then **Add to Home Screen**. After a successful visit the app shell can load offline; maps and external resources still need internet. This is a web app, not a native App Store or Google Play app.

## Policies

- [Terms of Use](TERMS.md) / [web version](terms.html)
- [Privacy Statement](PRIVACY.md) / [web version](privacy.html)
- [Contributor Guidelines](CONTRIBUTING.md)
- [Support and sponsorship disclosures](support.html)

These are plain-language drafts. They do not replace jurisdiction-specific legal advice. Confirm third-party behavior and update disclosures if hosting, fonts, maps, contribution handling, or payment links change.

## Safety

VetEscape is a directory, not a medical provider, booking service, or emergency service. Outdoor activities can complement but do not replace professional mental-health care. Verify availability, cost, eligibility, accessibility, and safety details directly with providers. In the U.S., veterans and loved ones can call 988 and press 1 or text 838255; in immediate danger call 911. VetEscape is not affiliated with the U.S. Department of Veterans Affairs.
