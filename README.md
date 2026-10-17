# PNWX Website Redesign

An e-commerce UI/UX redesign and interactive frontend prototype for Pacific Northwest X-Ray Inc. (PNWX). Developed as a Human-Computer Interaction (HCI) project, this repository modernizes a legacy medical equipment catalog into an intuitive, accessible, and error-resilient shopping experience.

---

## 1. Project Overview

Legacy B2B medical supply websites often suffer from cluttered navigation, fragmented product catalogs, and manual ordering friction. This project reimagines the PNWX browsing and purchasing workflow by introducing a structured category hierarchy, real-time search, persistent shopping cart management, and a guided checkout flow—while still preserving traditional manual ordering options (Purchase Orders, Fax, Mail) essential to hospital and clinic procurement.

---

## 2. Methodology & HCI Design Principles

The redesign was driven by core HCI heuristics (such as Nielsen's Usability Heuristics) and modular frontend architecture:

### Centralized Data Layer (Consistency & Standards)
* **`js/products.js`:** Serves as the single source of truth for all product metadata and search indexing.
* Ensures product details, pricing, and availability remain strictly consistent across search results, category listings, the shopping cart, checkout, and order confirmation.

### Component Synchronization (Recognition Rather Than Recall)
* **`js/load-components.js`:** Dynamically injects and synchronizes the navigation bar, footer, live cart badge, and search logic across all pages.
* Maintains user orientation via active link highlighting (`setActiveLink()`) and `hashchange` listeners for seamless category filtering without jarring full-page reloads.

### Dual-Tier Storage Strategy (User Control & Error Prevention)
* **`localStorage` (`pnwx-cart`):** Persists shopping cart items across browser sessions so users do not lose their curated equipment list if they close the tab.
* **`sessionStorage` (`pnwx-selected-checkout`, `orderNumber`, `orderEmail`, `orderName`):** Isolates active checkout items and temporary order confirmation state. Clearing this data upon tab closure prevents users from accidentally submitting stale checkout selections.

### Error Prevention & Visibility of System Status
* **Selective Checkout Guardrails:** The checkout button remains disabled until at least one cart item is explicitly selected.
* **Dynamic Form Adaptation:** Switching payment methods (Credit Card vs. Purchase Order/Check) dynamically reveals or hides relevant form fields and automatically recalculates processing fees.
* **Persistent Context:** A sticky order summary remains visible throughout the checkout process so users can verify line items and totals before submission.

---

## 3. Results & Key Features

The resulting interactive prototype demonstrates a complete end-to-end user journey:
* **Streamlined Discovery:** Users can locate specialized radiology equipment (e.g., Collimators and X-Ray Grids under the Parts category) via hero search or hash-routed category browsing.
* **Granular Cart Control:** Users can add items, adjust quantities, and selectively choose which cart items to bring into a specific checkout session.
* **Simulated E-Commerce & Hybrid Ordering:** Complete client-side simulation of order generation with dynamic confirmation receipts (`confirmation.html`), alongside accessible documentation for offline ordering (`order-policies.html` and downloadable `OrderForm.pdf`).

> **Note on Prototype Scope:** This project is a client-side UI/UX demonstration. The product database in `js/products.js` contains a curated subset of example products (specifically Collimators and X-Ray Grids) to validate the interaction design. In a production environment, client-side storage would be replaced by a server-side order API and payment gateway.

---

## 4. Directory Structure

```text
PNWX-Redesign/
├── README.md                          # Project overview, methodology, and setup guide
├── HCI FINAL/                         # Application HTML pages
│   ├── index.html                     # Home page (hero search, featured products)
│   ├── product-types.html             # Category browser (Equipment/Accessories/Supplies)
│   ├── collimator.html                # Product listing (collimators)
│   ├── xray-grids.html                # Product listing (grids)
│   ├── parts.html                     # Parts & components category browser
│   ├── cart.html                      # Shopping cart with item selection
│   ├── checkout.html                  # Order form (delivery, billing, payment)
│   ├── confirmation.html              # Order confirmation receipt
│   ├── contact.html                   # Customer support contact form
│   └── order-policies.html            # Manual order methods & policies
│
├── assets/
│   ├── images/                        # Brand logos and product photography
│   ├── css/
│   │   ├── style.css                  # Global styling (layout, typography, color tokens)
│   │   └── modules/                   # Modular CSS (feedback, forms, layout)
│   └── OrderForm.pdf                  # Downloadable manual order form
│
└── js/
    ├── products.js                    # Centralized product database & search index
    └── load-components.js             # Shared navbar, footer, cart, and search logic
