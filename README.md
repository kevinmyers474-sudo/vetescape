# VetEscape

VetEscape is a public, responsive and installable web app helping veterans, service members, and their families find outdoor activities, camping, retreats, and mental-health support. It is a static website: no account is required, and VetEscape does not directly collect form submissions or process payments.

## Run locally

Open `index.html` in a browser or serve the project directory with a static file server. Service workers and installation require HTTPS, except when testing on localhost.

## Publish

Configure GitHub Pages in **Settings → Pages**, choose **Deploy from a branch**, select `build/veteran-resource-hub` and the repository root, then save. For a production launch, merge the reviewed implementation into the repository's default branch and publish from that branch. GitHub Pages will provide the public HTTPS URL.

## Install on phones

VetEscape is a Progressive Web App. On Android and supported desktop browsers, use **Install app** or the browser's install option. On iPhone or iPad, open the site in Safari, tap **Share**, then **Add to Home Screen**. Once installed, the app shell and resource directory load offline after the first successful visit; external resource websites and map search still require an internet connection. This is a web app, not a native App Store or Google Play app.

## Suggest a resource and contribute

The homepage form prepares a public GitHub issue. Review and submit it on GitHub; the form does not send anything to VetEscape directly. Contributor and resource-review practices are described in [CONTRIBUTING.md](CONTRIBUTING.md). Please never share private health, financial, or identifying information in public submissions.

## Optional financial support

The homepage links to GitHub Sponsors. Support is voluntary and, if enabled, payment is handled by GitHub under its own terms. VetEscape does not process payments or receive donor details through the form. VetEscape is not represented as a nonprofit or tax-exempt charity; contributions are not described as tax-deductible. Sponsorship does not purchase a recommendation or placement. Any future paid placement or affiliate relationship must be clearly disclosed.

## Privacy and safety

Read [PRIVACY.md](PRIVACY.md). The location search opens a third-party map provider, resource suggestions are submitted publicly through GitHub, and sponsorship is handled by GitHub. VetEscape does not currently run its own server, account system, analytics, advertising trackers, or payment processing.

VetEscape is a directory, not a medical provider, booking service, or emergency service. Outdoor activities can complement but do not replace professional mental-health care. Verify availability, cost, eligibility, accessibility, and safety details directly with providers. For crisis support, call 988 and press 1 or text 838255; in immediate danger, call 911. VetEscape is not affiliated with the U.S. Department of Veterans Affairs.
