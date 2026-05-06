// ========================================
// COMPONENT SYNCHRONIZATION MODULE
// Centralized navbar, footer, search, and cart logic
// See docs/MODULE_ARCHITECTURE.md for sync guarantees
// ========================================

const navbarHomeHtml = `
    <!-- TOP NAV BAR -->
    <div class="top-bar text-center py-1">
        <div class="container d-flex justify-content-between align-items-center flex-wrap">
                <span>Mon – Fri 8am – 6pm Pacific</span>
            <span>Phone: <strong>503-667-3000</strong></span>
            <span>Toll-Free (US): <strong>800-827-9729</strong></span>
            <span>Fax orders accepted <strong class="text-white">24 hrs / day</strong></span>
        </div>
    </div>

    <!-- MAIN NAVIGATION -->
    <nav class="navbar navbar-expand-lg bg-white border-bottom">
        <div class="container">
            <a class="navbar-brand mb-0" href="index.html" style="display: flex; align-items: center; gap: 0.75rem;">
                <img src="assets/images/logo.png" alt="Logo" height="50">
                <div style="display: flex; flex-direction: column; gap: 0.05rem; line-height: 1;">
                    <span style="font-weight: 700; color: var(--navy-blue); font-size: 1.6rem;">Cascadia X-Ray Supplies</span>
                    <span style="font-size: 0.6rem; color: #888; font-weight: 400; letter-spacing: 0.05em;">PROFESSIONAL RADIOLOGY SOLUTIONS</span>
                </div>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto align-items-center">
                    <li class="nav-item"><a class="nav-link" href="index.html" data-page="index">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="product-types.html#equipment">Equipment</a></li>
                    <li class="nav-item"><a class="nav-link" href="product-types.html#accessories">Accessories</a></li>
                    <li class="nav-item"><a class="nav-link" href="product-types.html#supplies">Supplies</a></li>
                    <li class="nav-item"><a class="nav-link" href="parts.html" data-page="parts">Parts</a></li>
                    <li class="nav-item">
                        <a class="nav-link nav-cart-link" href="cart.html" data-page="cart" aria-label="Cart">
                            <i class="bi bi-cart3 nav-cart-icon"></i>
                        </a>
                    </li>
                    <li class="nav-item ms-lg-3">
                        <a href="contact.html" class="btn btn-navy rounded-1 px-4 py-2" data-page="contact">CONTACT US</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
`;

const navbarInnerHtml = `
    <!-- TOP NAV BAR -->
    <div class="top-bar text-center py-1">
        <div class="container d-flex justify-content-between align-items-center flex-wrap">
            <span>Mon – Fri 8am – 6pm Pacific</span>
            <span>Phone: <strong>503-667-3000</strong></span>
            <span>Toll-Free (US): <strong>800-827-9729</strong></span>
            <span>Fax orders accepted <strong class="text-white">24 hrs / day</strong></span>
        </div>
    </div>

    <!-- MAIN NAVIGATION -->
    <nav class="navbar navbar-expand-lg bg-white border-bottom">
        <div class="container">
            <a class="navbar-brand mb-0" href="index.html" style="display: flex; align-items: center; gap: 0.75rem;">
                <img src="assets/images/logo.png" alt="Logo" height="50">
                <div style="display: flex; flex-direction: column; gap: 0.05rem; line-height: 1;">
                    <span style="font-weight: 700; color: var(--navy-blue); font-size: 1.6rem;">Cascadia X-Ray Supplies</span>
                    <span style="font-size: 0.6rem; color: #888; font-weight: 400; letter-spacing: 0.05em;">PROFESSIONAL RADIOLOGY SOLUTIONS</span>
                </div>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto align-items-center navbar-inner-list">
                    <li class="nav-item"><a class="nav-link" href="index.html" data-page="index">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="product-types.html#equipment">Equipment</a></li>
                    <li class="nav-item"><a class="nav-link" href="product-types.html#accessories">Accessories</a></li>
                    <li class="nav-item"><a class="nav-link" href="product-types.html#supplies">Supplies</a></li>
                    <li class="nav-item"><a class="nav-link" href="parts.html" data-page="parts">Parts</a></li>
                    <li class="nav-item ms-lg-3 order-3 order-lg-2">
                        <form class="d-flex navbar-search-form" role="search" onsubmit="return false;">
                            <div class="input-group navbar-search-group">
                                <span class="input-group-text navbar-search-icon"><i class="bi bi-search"></i></span>
                                <input type="search" class="form-control navbar-search-input" placeholder="Quick Search..." aria-label="Quick Search">
                            </div>
                        </form>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nav-cart-link" href="cart.html" data-page="cart" aria-label="Cart">
                            <i class="bi bi-cart3 nav-cart-icon"></i>
                        </a>
                    </li>
                    <li class="nav-item ms-lg-3 order-4 order-lg-3">
                        <a href="contact.html" class="btn btn-navy rounded-1 px-4 py-2" data-page="contact">CONTACT US</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
`;

const footerHtml = `
    <!-- MEGA FOOTER -->
    <footer class="footer-dark py-5 text-white">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <h6 class="footer-heading mb-3">MANUAL ORDER METHODS</h6>
                    <a href="assets/OrderForm.pdf" class="btn btn-footer-action w-100 mb-2">
                        <i class="bi bi-download me-2"></i> Download Order Form
                    </a>
                    <a href="order-policies.html" class="btn btn-footer-action w-100 mb-3" style="pointer-events: auto;">
                        <i class="bi bi-printer me-2"></i> Fax Your Order - 1-503-666-8855
                    </a>
                    <p class="small text-white mb-2" style="font-weight: 600;">WE ACCEPT</p>
                    <div class="d-flex gap-1 flex-wrap">
                        <span class="badge bg-secondary">VISA</span>
                        <span class="badge bg-secondary">Mastercard</span>
                        <span class="badge bg-secondary">Discover</span>
                        <span class="badge bg-secondary">Amex</span>
                    </div>
                </div>

                <div class="col-md-5 text-center px-lg-5">
                    <a href="order-policies.html" class="text-gold text-decoration-none fw-bold small">For Manual Order Methods and Policies, please click here.</a>
                    <p class="mt-3 small-footer-text">This web site also serves as our catalog, no printed catalog is available. – Please keep checking back, changes to this site are made daily.</p>
                    <p class="small-footer-text">Every effort is made on our part to keep all posted prices up to date, however we cannot guarantee the accuracy due to notification delays by the manufacturers. Please check the final price on your order confirmation email.</p>
                    <p class="small-footer-text">Purchase Orders accepted only upon approval of credit – Min. $500 opening order for new open CHARGE accounts.</p>
                </div>

                <div class="col-md-4">
                    <h6 class="footer-heading mb-3">CONTACT & ORDER MANUALLY</h6>
                    <div class="d-flex mb-3">
                        <i class="bi bi-telephone-fill me-3 fs-4 text-white"></i>
                        <div>
                            <div class="fw-bold small">TELEPHONE</div>
                            <div class="text-white fw-bold">1-503-667-3000</div>
                            <div class="small-footer-text opacity-75">Toll-Free (US): 800-827-XRAY (800-827-9729)</div>
                        </div>
                    </div>
                    <div class="d-flex">
                        <i class="bi bi-envelope-fill me-3 fs-4 text-white"></i>
                        <div>
                            <div class="fw-bold small">EMAIL SALES</div>
                            <div class="text-white fw-bold">Send us an email</div>
                            <div class="small-footer-text opacity-75">We respond within 1 business day</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mt-5 border-top pt-4">
                    <div class="col-12 text-center tracking-widest fw-bold text-white fs-5">
                    P.O. Box 625 * Gresham, OR 97030 * U.S.A.
                </div>
                <div class="col-12 text-center mt-3 opacity-50 small">
                    ©1997-2026 Cascadia X-Ray Supplies - All Rights Reserved
                </div>
            </div>
        </div>
    </footer>
`;

document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
    const navbarContainer = document.getElementById('navbar-container');
    const footerContainer = document.getElementById('footer-container');

    if (navbarContainer) {
        navbarContainer.innerHTML = currentPage === 'index' ? navbarHomeHtml : navbarInnerHtml;
    }

    if (footerContainer) {
        footerContainer.innerHTML = footerHtml;
    }

    setActiveLink(currentPage);
    initListingPages(currentPage);
    initCartPage(currentPage);
    initSearchFunctionality();
});

function setActiveLink(currentPage) {
    // HCI Principle: Feedback & Visibility
    // Users need clear indication of current location (Nielsen's 10 usability heuristics)
    // Testing friction point: Multiple category buttons stayed highlighted on consecutive clicks
    // Fix: Always clear all hash-based links FIRST, then apply active to current
    // This ensures only ONE navbar link is active at any time
    // See docs/DESIGN_DECISIONS.md for iteration history
    
    const activePageMap = {
        category: 'parts',
        collimator: 'parts',
        'xray-grids': 'parts',
        checkout: 'cart',
        confirmation: 'cart'
    };

    const resolvedPage = activePageMap[currentPage] || currentPage;
    const navLinks = document.querySelectorAll('[data-page]');
    navLinks.forEach(link => {
        if (link.getAttribute('data-page') === resolvedPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Always clear all hash-based links first (error prevention pattern)
    // This prevents accumulation of active states
    document.querySelectorAll('a[href^="product-types.html#"]').forEach(link => link.classList.remove('active'));

    if (currentPage === 'product-types') {
        const currentHash = window.location.hash || '#equipment';
        const hashLink = document.querySelector(`a[href="product-types.html${currentHash}"]`);
        if (hashLink) {
            hashLink.classList.add('active');
        }
    }
}

// Re-evaluate nav highlighting when hash changes (for product-types.html categories)
window.addEventListener('hashchange', function() {
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
    setActiveLink(currentPage);
});

const CART_STORAGE_KEY = 'pnwx-cart';

function initListingPages(currentPage) {
    const isListingPage = currentPage === 'collimator' || currentPage === 'xray-grids';

    if (!isListingPage) {
        return;
    }

    const productList = document.querySelector('.category-product-list');
    if (productList) {
        const cards = Array.from(productList.querySelectorAll('.product-list-card'));
        cards.forEach((card, index) => {
            card.dataset.originalIndex = String(index);
            const titleElement = card.querySelector('.product-list-title');
            if (titleElement) {
                card.dataset.productTitle = titleElement.textContent.trim();
            }
        });

        const sortSelect = document.querySelector('.category-sort-select');
        if (sortSelect) {
            sortSelect.addEventListener('change', function() {
                sortListingCards(productList, this.value);
            });
            sortListingCards(productList, sortSelect.value);
        }
    }

    document.querySelectorAll('.product-list-card').forEach(card => {
        const variationSelect = card.querySelector('[data-variation-select]');
        const priceElement = card.querySelector('[data-price-display]');
        const addToCartButton = card.querySelector('[data-add-to-cart]');

        if (variationSelect && priceElement) {
            variationSelect.addEventListener('change', function() {
                updateCardPrice(card, this.value);
            });
            updateCardPrice(card, variationSelect.value);
        }

        if (addToCartButton) {
            addToCartButton.dataset.originalLabel = addToCartButton.textContent.trim();
            addToCartButton.addEventListener('click', function() {
                addCardToCart(card);
            });
        }
    });
}

function sortListingCards(productList, sortValue) {
    const cards = Array.from(productList.querySelectorAll('.product-list-card'));

    cards.sort((leftCard, rightCard) => {
        if (sortValue === 'name') {
            return (leftCard.dataset.productTitle || '').localeCompare(rightCard.dataset.productTitle || '');
        }

        return Number(leftCard.dataset.originalIndex || 0) - Number(rightCard.dataset.originalIndex || 0);
    });

    cards.forEach(card => productList.appendChild(card));
}

function updateCardPrice(card, variationValue) {
    const selectedOption = card.querySelector(`[data-variation-select] option[value="${variationValue}"]`);
    const priceElement = card.querySelector('[data-price-display]');

    if (!selectedOption || !priceElement) {
        return;
    }

    priceElement.textContent = formatCurrency(Number(selectedOption.dataset.price || 0));
}

function addCardToCart(card) {
    const variationSelect = card.querySelector('[data-variation-select]');
    const selectedOption = variationSelect ? variationSelect.selectedOptions[0] : null;
    const titleElement = card.querySelector('.product-list-title');
    const imageElement = card.querySelector('.product-list-image');
    const addToCartButton = card.querySelector('[data-add-to-cart]');

    if (!selectedOption || !titleElement || !addToCartButton) {
        return;
    }

    const variationText = selectedOption.dataset.shortLabel || selectedOption.textContent.trim();
    const skuText = selectedOption.dataset.sku || '';
    
    // Determine listing page from current URL
    const currentPath = window.location.pathname;
    let listingPage = 'collimator'; // default
    if (currentPath.includes('xray-grids')) listingPage = 'xray-grids';
    else if (currentPath.includes('collimator')) listingPage = 'collimator';

    // Collect all variation options for this product
    const allVariations = Array.from(variationSelect.options).map(opt => ({
        value: opt.value,
        label: opt.dataset.shortLabel || opt.textContent.trim(),
        sku: opt.dataset.sku || '',
        price: Number(opt.dataset.price || 0)
    }));

    const cartItem = {
        id: `${titleElement.textContent.trim()}::${skuText || variationText}`,
        title: titleElement.textContent.trim(),
        sku: skuText,
        variation: variationText,
        price: Number(selectedOption.dataset.price || 0),
        image: imageElement ? imageElement.getAttribute('src') : '',
        quantity: 1,
        listingPage: listingPage,
        allVariations: allVariations,
        selected: true
    };

    const existingCart = getCartItems();
    const existingItem = existingCart.find(item => item.id === cartItem.id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        existingCart.push(cartItem);
    }

    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(existingCart));

    addToCartButton.textContent = 'Added';
    addToCartButton.classList.add('btn-success');
    addToCartButton.classList.remove('btn-navy');
    window.setTimeout(() => {
        addToCartButton.textContent = addToCartButton.dataset.originalLabel || 'Add to Cart';
        addToCartButton.classList.remove('btn-success');
        addToCartButton.classList.add('btn-navy');
    }, 1200);
}

function initCartPage(currentPage) {
    if (currentPage !== 'cart') {
        return;
    }

    const cartBody = document.getElementById('cart-items-body');
    if (!cartBody) {
        return;
    }

    renderCart();

    // Handle checkbox selection
    cartBody.addEventListener('change', function(event) {
        if (event.target.matches('.cart-item-checkbox')) {
            const itemId = event.target.dataset.cartItemSelect;
            const cartItems = getCartItems();
            const item = cartItems.find(i => i.id === itemId);
            if (item) {
                item.selected = event.target.checked;
                localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
                renderCart();
            }
        }
    });

    // Handle variation changes
    cartBody.addEventListener('change', function(event) {
        if (event.target.matches('.cart-variation-select')) {
            const itemId = event.target.dataset.cartVariationChange;
            const cartItems = getCartItems();
            const item = cartItems.find(i => i.id === itemId);
            if (item) {
                const selectedOption = event.target.selectedOptions[0];
                item.variation = selectedOption.dataset.sku ? 
                    `${selectedOption.textContent.trim().split(' - ')[0]}` : 
                    selectedOption.textContent.trim();
                item.price = Number(selectedOption.dataset.price || 0);
                item.sku = selectedOption.dataset.sku || '';
                localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
                renderCart();
            }
        }
    });

    // Handle quantity changes
    cartBody.addEventListener('input', function(event) {
        if (event.target.matches('[data-cart-quantity]')) {
            const row = event.target.closest('[data-cart-item-id]');
            if (!row) {
                return;
            }

            const cartId = row.dataset.cartItemId;
            const quantity = Math.max(1, Number(event.target.value || 1));
            updateCartQuantity(cartId, quantity);
            renderCart();
        }
    });

    // Handle item removal
    cartBody.addEventListener('click', function(event) {
        const removeButton = event.target.closest('[data-remove-cart-item]');
        if (!removeButton) {
            return;
        }

        removeFromCart(removeButton.dataset.removeCartItem);
        renderCart();
    });
}

// Initialize Navbar Search Functionality
function initSearchFunctionality() {
    const searchInput = document.querySelector('.navbar-search-input');
    if (!searchInput) return;

    // Create search results dropdown container
    const searchForm = searchInput.closest('.navbar-search-form') || searchInput.parentElement;
    let searchContainer = searchForm.closest('.navbar-search-group')?.parentElement || searchForm;
    
    // If the container has overflow hidden (e.g., hero search), use parent instead
    const containerStyle = window.getComputedStyle(searchContainer);
    if (containerStyle.overflow === 'hidden') {
        searchContainer = searchContainer.parentElement;
    }
    
    let resultsDropdown = document.getElementById('search-results-dropdown');
    if (!resultsDropdown) {
        resultsDropdown = document.createElement('div');
        resultsDropdown.id = 'search-results-dropdown';
        resultsDropdown.style.cssText = 'position: absolute; top: 100%; left: 0; right: 0; background: white; border: 1px solid #ddd; border-top: none; max-height: 400px; overflow-y: auto; display: none; z-index: 1000; box-shadow: 0 4px 6px rgba(0,0,0,0.1);';
        searchContainer.style.position = 'relative';
        searchContainer.appendChild(resultsDropdown);
    }

    const searchButton = searchContainer.querySelector('.btn-navy-search');
    if (searchButton) {
        searchButton.addEventListener('click', function(e) {
            e.preventDefault();
            const query = searchInput.value.trim();
            if (query) {
                searchInput.dispatchEvent(new Event('input', { bubbles: true }));
            } else {
                searchInput.focus();
                resultsDropdown.innerHTML = `<div class="p-3 text-muted" style="font-size: 0.9rem;">Start typing to search for products...</div>`;
                resultsDropdown.style.display = 'block';
            }
        });
    }

    searchInput.addEventListener('input', function() {
        const query = this.value.trim();
        if (!query) {
            resultsDropdown.style.display = 'none';
            return;
        }

        const queryLower = query.toLowerCase();
        // Use products data directly if SEARCH_INDEX not available
        const searchIndex = window.SEARCH_INDEX || buildSearchIndex();
        if (!searchIndex || searchIndex.length === 0) {
            resultsDropdown.innerHTML = `<div class="p-3 text-muted" style="font-size: 0.9rem;"><strong>No Results Found</strong><br>Your search for "${query}" didn't match any products.</div>`;
            resultsDropdown.style.display = 'block';
            return;
        }

        // Search ONLY by product title
        const results = searchIndex.filter(product => {
            const titleMatch = product.title.toLowerCase().includes(queryLower);
            return titleMatch;
        });

        if (!results.length) {
            resultsDropdown.innerHTML = `
                <div class="p-3" style="font-size: 0.9rem; max-width: 350px;">
                    <div style="color: var(--navy-blue); font-weight: 700; margin-bottom: 0.5rem;">No Results Found</div>
                    <div style="color: #666; margin-bottom: 1rem;">Your search for "<strong>${query}</strong>" didn't match any products.</div>
                    <div style="color: #666;">
                        <div style="font-weight: 600; margin-bottom: 0.5rem;">Suggestions:</div>
                        <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.85rem;">
                            <li>Check your spelling</li>
                            <li>Try different keywords</li>
                            <li><a href="product-types.html#parts" style="color: var(--navy-blue); text-decoration: none;">Browse our categories</a></li>
                        </ul>
                    </div>
                </div>
            `;
            resultsDropdown.style.display = 'block';
            return;
        }

        resultsDropdown.innerHTML = `
            <div style="padding: 0.5rem 0;">
                ${results.map(product => `
                    <a href="${product.typeId}.html" class="d-block p-3 text-decoration-none" style="color: inherit; border-bottom: 1px solid #f0f0f0; transition: background-color 0.2s;" onmouseover="this.style.backgroundColor='#f9f9f9';" onmouseout="this.style.backgroundColor='transparent';">
                        <div style="font-weight: 600; color: var(--navy-blue); margin-bottom: 0.25rem;">${product.title}</div>
                        <div style="font-size: 0.85rem; color: #666;">${product.typeTitle}</div>
                    </a>
                `).join('')}
            </div>
        `;
        resultsDropdown.style.display = 'block';
    });

    document.addEventListener('click', function(e) {
        if (!searchContainer.contains(e.target)) {
            resultsDropdown.style.display = 'none';
        }
    });
}

// Build search index from products if not available
function buildSearchIndex() {
    if (window.SEARCH_INDEX) return window.SEARCH_INDEX;
    if (!window.PRODUCTS_DB) return [];
    
    const index = [];
    Object.values(window.PRODUCTS_DB).forEach(category => {
        (category.productTypes || []).forEach(type => {
            (type.products || []).forEach(product => {
                index.push({
                    id: product.productId,
                    title: product.productTitle,
                    typeId: type.typeId,
                    typeTitle: type.typeTitle,
                    description: product.productDescription,
                    image: product.productImage,
                    skus: product.variations.map(v => v.sku)
                });
            });
        });
    });
    return index;
}

function resolveCartItemListingPage(item) {
    if (item && item.listingPage) {
        return item.listingPage;
    }

    const title = String(item && item.title ? item.title : '').toLowerCase();
    const sku = String(item && item.sku ? item.sku : '').toLowerCase();
    const text = `${title} ${sku}`;

    if (text.includes('grid')) {
        return 'xray-grids';
    }

    if (text.includes('collimator')) {
        return 'collimator';
    }

    return 'collimator';
}

function renderCart() {
    const cartBody = document.getElementById('cart-items-body');
    const subtotalElement = document.getElementById('cart-subtotal');
    const shippingElement = document.getElementById('cart-shipping');
    const taxElement = document.getElementById('cart-tax');
    const totalElement = document.getElementById('cart-total');
    const cartItems = getCartItems();

    // Normalize selection flag for existing items: default to unchecked to avoid unexpected initial charges
    let normalized = false;
    cartItems.forEach(item => {
        if (typeof item.selected === 'undefined') {
            item.selected = false;
            normalized = true;
        }
    });
    if (normalized) {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    }

    if (!cartBody) {
        return;
    }

    if (!cartItems.length) {
        cartBody.innerHTML = `
            <tr>
                <td colspan="5" class="text-center py-5 text-muted">Your cart is empty. Add a variation from a product listing page to begin.</td>
            </tr>
        `;
        if (subtotalElement) subtotalElement.textContent = formatCurrency(0);
        if (shippingElement) shippingElement.textContent = formatCurrency(0);
        if (taxElement) taxElement.textContent = formatCurrency(0);
        if (totalElement) totalElement.textContent = formatCurrency(0);
        return;
    }

    cartBody.innerHTML = cartItems.map(item => {
        const lineTotal = item.price * item.quantity;
        const listingPageMap = {
            'collimator': 'collimator.html',
            'xray-grids': 'xray-grids.html'
        };
        const productLink = listingPageMap[resolveCartItemListingPage(item)] || '#';
        
        // Build variation selector HTML
        let variationSelectHtml = '';
        if (item.allVariations && Array.isArray(item.allVariations) && item.allVariations.length > 0) {
            const variationOptions = item.allVariations.map(v => 
                `<option value="${v.value}" ${v.label === item.variation ? 'selected' : ''} data-price="${v.price}" data-sku="${v.sku}">
                    ${v.label} - ${formatCurrency(v.price)}
                </option>`
            ).join('');
            variationSelectHtml = `
                <select class="form-select form-select-sm cart-variation-select" style="width: 200px; margin-top: 4px;" data-cart-variation-change="${item.id}">
                    ${variationOptions}
                </select>
            `;
        }

        return `
            <tr data-cart-item-id="${item.id}">
                <td style="width: 30px;">
                    <input type="checkbox" class="form-check-input cart-item-checkbox" data-cart-item-select="${item.id}" ${item.selected ? 'checked' : ''} style="cursor: pointer;">
                </td>
                <td>
                    <div class="d-flex align-items-start">
                        <a href="${productLink}" class="me-3" style="text-decoration: none; min-width: 50px;">
                            <img src="${item.image}" alt="${item.title}" style="width: 50px; height: 50px; object-fit: cover;" class="rounded">
                        </a>
                        <div>
                            <a href="${productLink}" style="text-decoration: none; color: inherit;">
                                <h6 class="mb-0" style="color: var(--navy-blue); font-weight: 700;">${item.title}</h6>
                            </a>
                            <small class="text-muted">${item.sku ? `SKU: ${item.sku}` : ''}</small>
                            ${variationSelectHtml}
                        </div>
                    </div>
                </td>
                <td>${formatCurrency(item.price)}</td>
                <td><input type="number" class="form-control form-control-sm" style="width: 80px;" value="${item.quantity}" min="1" data-cart-quantity></td>
                <td class="fw-bold">${formatCurrency(lineTotal)}</td>
                <td><button class="btn btn-sm btn-outline-danger" type="button" data-remove-cart-item="${item.id}"><i class="bi bi-trash"></i></button></td>
            </tr>
        `;
    }).join('');

    // Calculate totals based on SELECTED items only
    const selectedItems = cartItems.filter(item => item.selected !== false);
    const subtotal = selectedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalItems = selectedItems.reduce((sum, item) => sum + item.quantity, 0);

    // Update totals display
    const totalItemsEl = document.getElementById('cart-total-items');
    if (totalItemsEl) totalItemsEl.textContent = totalItems;
    if (totalElement) totalElement.textContent = formatCurrency(subtotal);

    // Enable/disable Proceed to Checkout based on selected items
    const proceedBtn = document.getElementById('proceed-to-checkout');
    if (proceedBtn) {
        if (!proceedBtn.dataset.origHref) proceedBtn.dataset.origHref = proceedBtn.getAttribute('href') || 'checkout.html';
        if (!selectedItems.length) {
            // disable
            try { proceedBtn.removeAttribute('href'); } catch (e) {}
            proceedBtn.setAttribute('aria-disabled', 'true');
            proceedBtn.classList.add('disabled', 'opacity-50');
        } else {
            // enable
            proceedBtn.setAttribute('href', proceedBtn.dataset.origHref || 'checkout.html');
            proceedBtn.setAttribute('aria-disabled', 'false');
            proceedBtn.classList.remove('disabled', 'opacity-50');
        }
    }
}

function updateCartQuantity(cartId, quantity) {
    const cartItems = getCartItems();
    const cartItem = cartItems.find(item => item.id === cartId);

    if (!cartItem) {
        return;
    }

    cartItem.quantity = quantity;
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
}

function removeFromCart(cartId) {
    const cartItems = getCartItems().filter(item => item.id !== cartId);
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
}

function getCartItems() {
    // Synchronization Point: Single source of truth for cart state
    // All cart reads must use this function to ensure consistency
    // See docs/MODULE_ARCHITECTURE.md for "Guarantee 1: Cart State Consistency"
    try {
        return JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || '[]');
    } catch (error) {
        return [];
    }
}

function formatCurrency(value) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(value || 0);
}

// HCI Principle: Error Prevention
// Users cannot proceed to checkout if no items are selected
// This constraint is enforced here (no disabled check → prevented by aria-disabled)
// See docs/USABILITY_PATTERNS.md for "Constraint & Affordance" pattern
document.addEventListener('click', function(e) {
    const el = e.target.closest('#proceed-to-checkout');
    if (!el) return;

    if (el.getAttribute('aria-disabled') === 'true') {
        e.preventDefault();
        return;
    }

    // Data Flow: Cart selection → sessionStorage
    // sessionStorage used instead of localStorage for checkout because:
    // - sessionStorage clears on tab close (intentional)
    // - Prevents users from accidentally checking out previous session
    // See docs/MODULE_ARCHITECTURE.md for "Guarantee 3: Checkout Data Consistency"
    const selected = getCartItems().filter(i => i.selected !== false);
    sessionStorage.setItem('pnwx-selected-checkout', JSON.stringify(selected));
});
