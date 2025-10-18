document.addEventListener("DOMContentLoaded", function () {
    // Only apply hover logic on screens wider than the Bootstrap large breakpoint (992px)
    if (window.matchMedia("(min-width: 992px)").matches) {
        
        // Find all dropdowns in the navbar
        const dropdowns = document.querySelectorAll('.navbar .dropdown');

        dropdowns.forEach(function (dropdown) {
            
            // Get the dropdown menu element
            const dropdownMenu = dropdown.querySelector('.dropdown-menu');
            
            // Get the dropdown toggle element
            const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
            
            if (dropdownMenu && dropdownToggle) {
                
                // Remove the click handler so Bootstrap doesn't interfere
                dropdownToggle.removeAttribute('data-bs-toggle');

                // Add mouseenter listener to open the dropdown
                dropdown.addEventListener('mouseenter', function () {
                    dropdownMenu.classList.add('show');
                    dropdown.classList.add('show');
                });

                // Add mouseleave listener to close the dropdown
                dropdown.addEventListener('mouseleave', function () {
                    dropdownMenu.classList.remove('show');
                    dropdown.classList.remove('show');
                });
            }
        });
    }
});

// for slider
const container = document.getElementById('carouselContainer');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    nextBtn.addEventListener('click', () => {
      container.scrollBy({ left: container.offsetWidth / 2, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
      container.scrollBy({ left: -container.offsetWidth / 2, behavior: 'smooth' });
    });

// for tabs
const tabButtons = document.querySelectorAll('.tab-btn');
        const productCards = document.querySelectorAll('.product-cards');
const tabs = document.querySelectorAll('.tab-btn');
        const products = document.querySelectorAll('.product-cards');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs
                tabs.forEach(t => t.classList.remove('active'));
                // Add active class to clicked tab
                tab.classList.add('active');

                const category = tab.dataset.category;

                // Filter products
                products.forEach(product => {
                    if (category === 'all' || product.dataset.category === category) {
                        product.style.display = 'flex';
                    } else {
                        product.style.display = 'none';
                    }
                });
            });
        });

        // Add to cart functionality
        const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
        
        addToCartButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Visual feedback
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-check"></i> Added!';
                this.style.background = 'var(--primary-green)';
                this.style.color = 'white';
                
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.style.background = 'transparent';
                    this.style.color = 'var(--primary-green)';
                }, 2000);
            });
        });

        // More Products button
        document.querySelector('.more-products-btn').addEventListener('click', function() {
            alert('Loading more products...');
        });

        // Scroll to top functionality
        const scrollTopBtn = document.getElementById('scrollTopBtn');

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Show/hide scroll to top button
        window.addEventListener('scroll', function() {
            const scrollBtn = document.querySelector('.scroll-top-btn');
            if (window.pageYOffset > 300) {
                scrollBtn.style.display = 'flex';
            } else {
                scrollBtn.style.display = 'none';
            }
        });

        // Initial fade-in animation for products
        window.addEventListener('load', () => {
            productCards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 100);
            });
        });

// for gallery
        // Add smooth scroll animation on load
        document.addEventListener('DOMContentLoaded', function() {
            const cards = document.querySelectorAll('.category-card');
            
            cards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(40px)';
                
                setTimeout(() => {
                    card.style.transition = 'all 0.6s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 150);
            });

            // Click handlers
            cards.forEach(card => {
                card.addEventListener('click', function(e) {
                    if (!e.target.classList.contains('browse-btn') && !e.target.closest('.browse-btn')) {
                        console.log('Card clicked:', this.querySelector('.category-title').textContent);
                    }
                });
            });

            // Browse button handlers
            const browseButtons = document.querySelectorAll('.browse-btn');
            browseButtons.forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    const categoryName = this.closest('.category-card').querySelector('.category-title').textContent.trim();
                    console.log('Browse products for:', categoryName);
                    
                    // Add ripple effect
                    const ripple = document.createElement('span');
                    ripple.style.cssText = `
                        position: absolute;
                        background: rgba(255,255,255,0.5);
                        border-radius: 50%;
                        width: 100px;
                        height: 100px;
                        pointer-events: none;
                        animation: ripple 0.6s ease-out;
                    `;
                    this.style.position = 'relative';
                    this.style.overflow = 'hidden';
                    this.appendChild(ripple);
                    
                    setTimeout(() => ripple.remove(), 600);
                });
            });
        });

        // Add ripple animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                from {
                    transform: scale(0);
                    opacity: 1;
                }
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);


        // Footer
        function handleSubmit(event) {
            event.preventDefault();
            const email = event.target.querySelector('input').value;
            alert(`Thank you for subscribing with ${email}!`);
            event.target.reset();
        }

        // Show/hide scroll to top button
        window.addEventListener('scroll', function() {
            const scrollBtn = document.querySelector('.scroll-top');
            if (window.pageYOffset > 300) {
                scrollBtn.style.display = 'flex';
            } else {
                scrollBtn.style.display = 'none';
            }
        });

        // Initial hide
        document.querySelector('.scroll-top').style.display = 'none';

        // Add hover effects to footer links
        document.querySelectorAll('.footer-column a').forEach(link => {
            link.addEventListener('mouseenter', function() {
                this.style.transition = 'all 0.3s ease';
            });
        });