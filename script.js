document.addEventListener("DOMContentLoaded", function () {
  if (window.matchMedia("(min-width: 992px)").matches) {
    const dropdowns = document.querySelectorAll(".navbar .dropdown");

    dropdowns.forEach(function (dropdown) {
      const dropdownMenu = dropdown.querySelector(".dropdown-menu");

      const dropdownToggle = dropdown.querySelector(".dropdown-toggle");

      if (dropdownMenu && dropdownToggle) {
        dropdownToggle.removeAttribute("data-bs-toggle");

        dropdown.addEventListener("mouseenter", function () {
          dropdownMenu.classList.add("show");
          dropdown.classList.add("show");
        });

        dropdown.addEventListener("mouseleave", function () {
          dropdownMenu.classList.remove("show");
          dropdown.classList.remove("show");
        });
      }
    });
  }
});

// for slider
const container = document.getElementById("carouselContainer");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

nextBtn.addEventListener("click", () => {
  container.scrollBy({ left: container.offsetWidth / 2, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
  container.scrollBy({ left: -container.offsetWidth / 2, behavior: "smooth" });
});

// for tabs
const tabButtons = document.querySelectorAll(".tab-btn");
const productCards = document.querySelectorAll(".product-cards");
const tabs = document.querySelectorAll(".tab-btn");
const products = document.querySelectorAll(".product-cards");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    const category = tab.dataset.category;

    products.forEach((product) => {
      if (category === "all" || product.dataset.category === category) {
        product.style.display = "flex";
      } else {
        product.style.display = "none";
      }
    });
  });
});

// Add to cart functionality
const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");

addToCartButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();

    const originalText = this.innerHTML;
    this.innerHTML = '<i class="fas fa-check"></i> Added!';
    this.style.background = "var(--primary-green)";
    this.style.color = "white";

    setTimeout(() => {
      this.innerHTML = originalText;
      this.style.background = "transparent";
      this.style.color = "var(--primary-green)";
    }, 2000);
  });
});

document
  .querySelector(".more-products-btn")
  .addEventListener("click", function () {
    alert("Loading more products...");
  });

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollTopBtn.classList.add("visible");
  } else {
    scrollTopBtn.classList.remove("visible");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", function () {
  const scrollBtn = document.querySelector(".scroll-top-btn");
  if (window.pageYOffset > 300) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
});

window.addEventListener("load", () => {
  productCards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 100);
  });
});

// for gallery
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".category-card");

  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";

    setTimeout(() => {
      card.style.transition = "all 0.6s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 150);
  });

  cards.forEach((card) => {
    card.addEventListener("click", function (e) {
      if (
        !e.target.classList.contains("browse-btn") &&
        !e.target.closest(".browse-btn")
      ) {
        console.log(
          "Card clicked:",
          this.querySelector(".category-title").textContent
        );
      }
    });
  });

  const browseButtons = document.querySelectorAll(".browse-btn");
  browseButtons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      const categoryName = this.closest(".category-card")
        .querySelector(".category-title")
        .textContent.trim();
      console.log("Browse products for:", categoryName);

      const ripple = document.createElement("span");
      ripple.style.cssText = `
                        position: absolute;
                        background: rgba(255,255,255,0.5);
                        border-radius: 50%;
                        width: 100px;
                        height: 100px;
                        pointer-events: none;
                        animation: ripple 0.6s ease-out;
                    `;
      this.style.position = "relative";
      this.style.overflow = "hidden";
      this.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    });
  });
});

const style = document.createElement("style");
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
  const email = event.target.querySelector("input").value;
  alert(`Thank you for subscribing with ${email}!`);
  event.target.reset();
}

window.addEventListener("scroll", function () {
  const scrollBtn = document.querySelector(".scroll-top");
  if (window.pageYOffset > 300) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
});

document.querySelector(".scroll-top").style.display = "none";

document.querySelectorAll(".footer-column a").forEach((link) => {
  link.addEventListener("mouseenter", function () {
    this.style.transition = "all 0.3s ease";
  });
});
