# Project Structure and Design Principles Overview

This document provides a quick reference for the project's organization and implemented design principles.

## Directory Structure

```
PNWX-Redesign/
├── README.md                          # Project overview
├── HCI FINAL/                         # HTML pages
│   ├── index.html                     # Home page (hero search, featured products)
│   ├── product-types.html             # Category browser (Equipment/Accessories/Supplies)
│   ├── collimator.html                # Product listing (collimators)
│   ├── xray-grids.html                # Product listing (grids)
│   ├── parts.html                     # Parts & components category browser
│   ├── cart.html                      # Shopping cart with selection
│   ├── checkout.html                  # Order form (delivery, billing, payment)
│   ├── confirmation.html              # Order confirmation
│   ├── contact.html                   # Contact form
│   └── order-policies.html            # Order methods & policies
│
├── assets/
│   ├── images/                        # Logo, product images
│   ├── css/
│   │   ├── style.css                  # Global styling (layout, typography, colors)
│   │   └── modules/                   # Modular CSS (planned: feedback, forms, layout)
│   └── OrderForm.pdf                  # Downloadable order form
│
└── js/
    ├── products.js                    # Centralized product database & search index
    └── load-components.js             # Navbar, footer, cart, search logic

```

## Key Design Principles

### 1. **Centralized Data Layer**
- `js/products.js` - Single source of truth for all product information
- Used by: search, product listings, cart, checkout, confirmation

### 2. **Component Synchronization**
- `js/load-components.js` - Centralized navbar, footer, search, cart logic
- Ensures navbar highlighting, cart state, and search work consistently across all pages

### 3. **Storage Strategy**
- `localStorage` - Persistent cart storage (survives browser close)
- `sessionStorage` - Temporary checkout data (clears on tab close)
- This separation prevents users from accidentally checking out old selections

### 4. **Responsive Navigation**
- Hash-based routing for categories (no page reload)
- `setActiveLink()` function ensures only one navbar link is active at a time
- Hashchange event listener keeps highlighting in sync during navigation

### 5. **Error Prevention**
- Checkout button disabled when no items selected
- Payment method switching shows/hides relevant form sections and fee
- Order summary always visible (sticky) during checkout
