/* ============================================
   BASORIA Premium Restaurant Website
   JavaScript Main File
   ============================================ */

// ============================================
// Menu Data
// ============================================
const menuData = [
    // BAKSO
    {
        id: 1,
        name: 'Bakso Original',
        description: 'Bakso klasik dengan daging sapi pilihan dan bumbu tradisional yang sempurna.',
        price: 15000,
        category: 'bakso',
        image: 'https://images.pexels.com/photos/7617590/pexels-photo-7617590.jpeg?auto=compress&cs=tinysrgb&w=800',
        featured: true
    },
    {
        id: 2,
        name: 'Bakso Telor',
        description: 'Bakso isi telur ayam kampung yang kaya protein dan lezat.',
        price: 18000,
        category: 'bakso',
        image: 'https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=800',
        featured: false
    },
    {
        id: 3,
        name: 'Bakso Tetelan',
        description: 'Bakso dengan potongan tetelan daging sapi yang juicy dan gurih.',
        price: 20000,
        category: 'bakso',
        image: 'https://images.pexels.com/photos/7617590/pexels-photo-7617590.jpeg?auto=compress&cs=tinysrgb&w=800',
        featured: false
    },
    {
        id: 4,
        name: 'Bakso Mercon',
        description: 'Bakso pedas dengan isian cabai rawit yang meledak di mulut. Tingkat pedas: Extreme.',
        price: 20000,
        category: 'bakso',
        image: 'https://images.pexels.com/photos/7617590/pexels-photo-7617590.jpeg?auto=compress&cs=tinysrgb&w=800',
        featured: true,
        badge: 'Pedas'
    },
    {
        id: 5,
        name: 'Bakso Urat',
        description: 'Bakso dengan urat daging sapi yang kenyal dan penuh cita rasa.',
        price: 20000,
        category: 'bakso',
        image: 'https://images.pexels.com/photos/7617590/pexels-photo-7617590.jpeg?auto=compress&cs=tinysrgb&w=800',
        featured: false
    },
    {
        id: 6,
        name: 'Bakso Keju Lumer',
        description: 'Bakso dengan isian keju mozzarella yang meleleh saat digigit.',
        price: 22000,
        category: 'bakso',
        image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=800',
        featured: true,
        badge: 'Best Seller'
    },
    {
        id: 7,
        name: 'Bakso Beranak',
        description: 'Satu bakso besar dengan isian bakso-bakso kecil di dalamnya. Perfect for sharing.',
        price: 30000,
        category: 'bakso',
        image: 'https://images.pexels.com/photos/7617590/pexels-photo-7617590.jpeg?auto=compress&cs=tinysrgb&w=800',
        featured: true
    },
    {
        id: 8,
        name: 'Bakso Iga',
        description: 'Bakso premium dengan potongan iga sapi yang empuk dan beraroma.',
        price: 30000,
        category: 'bakso',
        image: 'https://images.pexels.com/photos/7617590/pexels-photo-7617590.jpeg?auto=compress&cs=tinysrgb&w=800',
        featured: false
    },
    // TOPPING
    {
        id: 9,
        name: 'Pilus',
        description: 'Kerupuk pilus renyah pelengkap bakso yang klasik.',
        price: 2000,
        category: 'topping',
        image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=800',
        featured: false
    },
    {
        id: 10,
        name: 'Cikur',
        description: 'Kencur segar untuk menambah aroma khas pada bakso Anda.',
        price: 3000,
        category: 'topping',
        image: 'https://images.pexels.com/photos/7617590/pexels-photo-7617590.jpeg?auto=compress&cs=tinysrgb&w=800',
        featured: false
    },
    {
        id: 11,
        name: 'Kerupuk Lidah',
        description: 'Kerupuk lidah renyah gurih pelengkap sempurna.',
        price: 3000,
        category: 'topping',
        image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=800',
        featured: false
    },
    {
        id: 12,
        name: 'Kerupuk Kulit',
        description: 'Kerupuk kulit sapi renyah dan gurih, pelengkap wajib bakso.',
        price: 5000,
        category: 'topping',
        image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=800',
        featured: false
    },
    // MINUMAN
    {
        id: 13,
        name: 'Es Teh Manis',
        description: 'Teh manis dingin atau hangat yang menyegarkan.',
        price: 5000,
        category: 'minuman',
        image: 'https://images.pexels.com/photos/1558651/pexels-photo-1558651.jpeg?auto=compress&cs=tinysrgb&w=800',
        featured: false,
        note: 'Ice/Hot'
    },
    {
        id: 14,
        name: 'Lemon Tea',
        description: 'Teh segar dengan perasan lemon asam manis menyegarkan.',
        price: 6000,
        category: 'minuman',
        image: 'https://images.pexels.com/photos/1558651/pexels-photo-1558651.jpeg?auto=compress&cs=tinysrgb&w=800',
        featured: false
    },
    {
        id: 15,
        name: 'Lychee Tea',
        description: 'Teh dengan sirup lychee manis dan aroma harum.',
        price: 7000,
        category: 'minuman',
        image: 'https://images.pexels.com/photos/1558651/pexels-photo-1558651.jpeg?auto=compress&cs=tinysrgb&w=800',
        featured: false
    },
    {
        id: 16,
        name: 'Es Jeruk',
        description: 'Jeruk peras segar dengan es batu. Vitamin C alami.',
        price: 7000,
        category: 'minuman',
        image: 'https://images.pexels.com/photos/969930/pexels-photo-969930.jpeg?auto=compress&cs=tinysrgb&w=800',
        featured: false
    },
    {
        id: 17,
        name: 'Fanta Ice',
        description: 'Minuman soda Fanta dingin menyegarkan.',
        price: 7000,
        category: 'minuman',
        image: 'https://images.pexels.com/photos/969930/pexels-photo-969930.jpeg?auto=compress&cs=tinysrgb&w=800',
        featured: false
    },
    {
        id: 18,
        name: 'Sprite Ice',
        description: 'Minuman soda Sprite dingin menyegarkan.',
        price: 7000,
        category: 'minuman',
        image: 'https://images.pexels.com/photos/969930/pexels-photo-969930.jpeg?auto=compress&cs=tinysrgb&w=800',
        featured: false
    },
    {
        id: 19,
        name: 'Coca-Cola Ice',
        description: 'Minuman soda Coca-Cola dingin menyegarkan.',
        price: 7000,
        category: 'minuman',
        image: 'https://images.pexels.com/photos/969930/pexels-photo-969930.jpeg?auto=compress&cs=tinysrgb&w=800',
        featured: false
    }
];

// ============================================
// DOM Ready Handler
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    initNavbar();
    initScrollAnimations();
    initStats();
    initMenuPage();
    initGalleryPage();
    initContactForm();
    initFeaturedMenu();
});

// ============================================
// Navbar Scroll Effect
// ============================================
function initNavbar() {
    const navbar = document.getElementById('mainNavbar');
    if (!navbar) return;

    const scrollThreshold = 50;

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ============================================
// Scroll Animations
// ============================================
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right').forEach(el => {
        observer.observe(el);
    });
}

// ============================================
// Statistics Counter Animation
// ============================================
function initStats() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats(entry.target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.stats-section').forEach(el => {
        statsObserver.observe(el);
    });
}

function animateStats(section) {
    const statNumbers = section.querySelectorAll('.stat-number');
    statNumbers.forEach(num => {
        const target = parseInt(num.getAttribute('data-target'), 10);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                num.textContent = target.toLocaleString();
                clearInterval(timer);
            } else {
                num.textContent = Math.floor(current).toLocaleString();
            }
        }, 16);
    });
}

// ============================================
// Featured Menu (Home Page)
// ============================================
function initFeaturedMenu() {
    const featuredGrid = document.getElementById('featured-menu-grid');
    if (!featuredGrid) return;

    const featuredItems = menuData.filter(item => item.featured).slice(0, 4);

    featuredItems.forEach((item, index) => {
        const card = createMenuCard(item, index);
        featuredGrid.appendChild(card);
    });
}

// ============================================
// Menu Page
// ============================================
function initMenuPage() {
    const menuGrid = document.getElementById('menuGrid');
    if (!menuGrid) return;

    const searchInput = document.getElementById('menuSearch');
    const categoryFilters = document.querySelectorAll('#categoryFilters .category-filter');
    let currentCategory = 'all';
    let searchTerm = '';

    renderMenuItems(menuData);

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchTerm = e.target.value.toLowerCase();
            filterMenu();
        });
    }

    categoryFilters.forEach(filter => {
        filter.addEventListener('click', () => {
            categoryFilters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');
            currentCategory = filter.getAttribute('data-category');
            filterMenu();
        });
    });

    function filterMenu() {
        let filtered = menuData;

        if (currentCategory !== 'all') {
            filtered = filtered.filter(item => item.category === currentCategory);
        }

        if (searchTerm) {
            filtered = filtered.filter(item =>
                item.name.toLowerCase().includes(searchTerm) ||
                item.description.toLowerCase().includes(searchTerm)
            );
        }

        renderMenuItems(filtered);
    }

    function renderMenuItems(items) {
        menuGrid.innerHTML = '';

        const emptyState = document.getElementById('menuEmptyState');
        if (items.length === 0) {
            menuGrid.classList.add('d-none');
            if (emptyState) emptyState.classList.remove('d-none');
            return;
        }

        menuGrid.classList.remove('d-none');
        if (emptyState) emptyState.classList.add('d-none');

        items.forEach((item, index) => {
            const card = createMenuCard(item, index);
            menuGrid.appendChild(card);
        });
    }
}

function createMenuCard(item, index) {
    const col = document.createElement('div');
    col.className = 'fade-in';
    setTimeout(() => col.classList.add('visible'), index * 100);

    const formattedPrice = formatPrice(item.price);
    const badgeHtml = item.badge ? `<span class="menu-card-special-badge">${item.badge}</span>` : '';
    const noteHtml = item.note ? `<span class="menu-card-note">${item.note}</span>` : '';

    col.innerHTML = `
        <div class="menu-card">
            <div class="menu-card-image">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
                ${badgeHtml}
            </div>
            <div class="menu-card-content">
                <h3 class="menu-card-title">${item.name}</h3>
                <p class="menu-card-description">${item.description}</p>
                <div class="menu-card-footer">
                    <div class="menu-card-price-info">
                        <span class="menu-card-price">${formattedPrice}</span>
                        ${noteHtml}
                    </div>
                    <button class="menu-card-btn" onclick="orderItem('${item.name}')" aria-label="Order via WhatsApp">
                        <i class="bi bi-whatsapp"></i>
                    </button>
                </div>
            </div>
        </div>
    `;

    return col;
}

function getCategoryLabel(category) {
    const labels = {
        'bakso': 'Bakso',
        'topping': 'Topping',
        'minuman': 'Minuman'
    };
    return labels[category] || category;
}

function formatPrice(price) {
    return 'Rp ' + price.toLocaleString('id-ID');
}

// Global function for ordering
window.orderItem = function(itemName) {
    const message = encodeURIComponent(`Halo, saya ingin memesan ${itemName}`);
    window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
};

// ============================================
// Gallery Page
// ============================================
function initGalleryPage() {
    const galleryFilters = document.querySelectorAll('#galleryFilters .category-filter');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('galleryModal');
    const modalImg = document.getElementById('galleryModalImage');

    if (!galleryFilters.length || !galleryItems.length) return;

    galleryFilters.forEach(filter => {
        filter.addEventListener('click', () => {
            galleryFilters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');

            const category = filter.getAttribute('data-category');

            galleryItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.classList.remove('hidden');
                    item.style.display = '';
                } else {
                    item.classList.add('hidden');
                    item.style.display = 'none';
                }
            });
        });
    });

    // Modal functionality
    if (modal) {
        document.querySelectorAll('.gallery-zoom').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const card = e.target.closest('.gallery-item');
                const img = card.querySelector('img');
                if (img && modalImg) {
                    modalImg.src = img.src;
                }
            });
        });
    }
}

// ============================================
// Contact Form
// ============================================
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone') || '',
            subject: formData.get('subject'),
            message: formData.get('message')
        };

        const submitBtn = form.querySelector('.btn-submit');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');

        // Show loading state
        btnText.classList.add('d-none');
        btnLoading.classList.remove('d-none');
        submitBtn.disabled = true;

        // Simulate form submission delay
        setTimeout(() => {
            // Log the form data (for demo purposes)
            console.log('Form submitted:', data);

            // Show success message
            form.classList.add('d-none');
            document.getElementById('formSuccess').classList.remove('d-none');

            // Optional: Send to WhatsApp
            // const message = encodeURIComponent(`New Contact Form:\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nSubject: ${data.subject}\nMessage: ${data.message}`);
            // window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
        }, 1000);
    });
}

// ============================================
// Smooth Scroll for Anchor Links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ============================================
// Prefers Reduced Motion
// ============================================
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    document.documentElement.style.scrollBehavior = 'auto';

    document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
        el.style.transition = 'none';
    });
}
