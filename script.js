console.log("Script loaded and running");

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle logic
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Reveal Animation on Scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});

// Product Data
const products = {
    'plain': {
        title: 'Plain Appalam',
        subtitle: 'The Classic Choice',
        description: 'Light, crispy, and perfectly salted. Our Plain Appalam is the traditional accompaniment to every South Indian meal, made with high-quality urad dal and processed under hygienic conditions.',
        ingredients: 'Urad Dal, Rice Flour, Salt, Edible Oil',
        bestFor: 'Everyday Meals, Kids, Mild Palates',
        image: 'assets/images/plain-appalam.jpg'
    },
    'masala': {
        title: 'Masala Appalam',
        subtitle: 'Spicy & Aromatic',
        description: 'Infused with cracked black pepper and roasted cumin (jeera) for a distinct, flavorful kick. This appalam brings a burst of spice that perfectly complements mild curries and rice dishes.',
        ingredients: 'Urad Dal, Black Pepper, Cumin, Red Chilli Powder, Salt, Oil',
        bestFor: 'Spicy Lovers, Evening Snacks, Special Occasions',
        image: 'assets/images/masala-appalam.jpg'
    },
    'urad': {
        title: 'Crisps & Urad Chips',
        subtitle: 'Thick & Crunchy',
        description: 'Perfectly sun-dried and thicker than regular appalams, these Urad Chips offer a satisfying crunch. They are ideal as a standalone snack or a crunchy side dish for variety rice.',
        ingredients: 'Premium Urad Dal, Rice Flour, Asafoetida, Salt, Oil',
        bestFor: 'Snacking, Variety Rice (Lemon/Tomato Rice), Dipping',
        image: 'assets/images/urad-chips.jpg'
    }
};

// Modal Logic
function openProductModal(productId) {
    const product = products[productId];
    if (!product) return;

    // Populate Modal Content
    document.getElementById('modal-title').textContent = product.title;
    document.getElementById('modal-subtitle').textContent = product.subtitle;
    document.getElementById('modal-desc').textContent = product.description;
    document.getElementById('modal-ingredients').textContent = product.ingredients;
    document.getElementById('modal-best-for').textContent = product.bestFor;
    document.getElementById('modal-image').src = product.image;

    // Show Modal
    const modal = document.getElementById('product-modal');
    modal.classList.remove('hidden');
    // Small delay to allow display:block to apply before opacity transition
    setTimeout(() => {
        modal.classList.remove('opacity-0');
    }, 10);
    document.body.style.overflow = 'hidden'; // Prevent scrolling background
}

function closeProductModal() {
    const modal = document.getElementById('product-modal');
    modal.classList.add('opacity-0');

    // Wait for transition to finish before hiding
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
    document.body.style.overflow = ''; // Restore scrolling
}

// Close modal on Escape key
document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
        closeProductModal();
    }
});

