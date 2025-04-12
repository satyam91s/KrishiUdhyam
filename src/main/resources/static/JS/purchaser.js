// Initialize Lucide icons
lucide.createIcons();

// Slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 5000);

// Sample data
const sellers = [
    { 
        id: 1, 
        name: "Rajesh Kumar", 
        location: "Punjab, India",
        rating: 4.8,
        products: [
            { name: "Organic Wheat", quantity: "500 quintals" },
            { name: "Basmati Rice", quantity: "300 quintals" }
        ]
    },
    { 
        id: 2, 
        name: "Amit Patel", 
        location: "Gujarat, India",
        rating: 4.7,
        products: [
            { name: "Cotton", quantity: "200 quintals" },
            { name: "Groundnuts", quantity: "150 quintals" }
        ]
    },
    { 
        id: 3, 
        name: "Suresh Singh", 
        location: "Haryana, India",
        rating: 4.9,
        products: [
            { name: "Premium Wheat", quantity: "400 quintals" },
            { name: "Mustard", quantity: "100 quintals" }
        ]
    },
    { 
        id: 4, 
        name: "Priya Sharma", 
        location: "Madhya Pradesh, India",
        rating: 4.6,
        products: [
            { name: "Organic Pulses", quantity: "250 quintals" },
            { name: "Soybeans", quantity: "300 quintals" }
        ]
    },
    { 
        id: 5, 
        name: "Mohan Verma", 
        location: "Uttar Pradesh, India",
        rating: 4.8,
        products: [
            { name: "Sugar Cane", quantity: "600 quintals" },
            { name: "Rice", quantity: "400 quintals" }
        ]
    },
    { 
        id: 6, 
        name: "Anita Desai", 
        location: "Maharashtra, India",
        rating: 4.7,
        products: [
            { name: "Cotton", quantity: "350 quintals" },
            { name: "Turmeric", quantity: "100 quintals" }
        ]
    }
];

const purchasedProducts = [
    { 
        id: 1, 
        name: "Organic Wheat",
        seller: "Rajesh Kumar",
        quantity: "100 quintals",
        price: 3200,
        status: "Delivered",
        date: "2025-03-15"
    },
    { 
        id: 2, 
        name: "Basmati Rice",
        seller: "Mohan Verma",
        quantity: "150 quintals",
        price: 4500,
        status: "In Transit",
        date: "2025-03-18"
    },
    { 
        id: 3, 
        name: "Cotton",
        seller: "Amit Patel",
        quantity: "80 quintals",
        price: 5200,
        status: "Processing",
        date: "2025-03-20"
    }
];

// Render seller cards
const sellerGrid = document.getElementById('sellerGrid');
sellers.forEach(seller => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <div class="card-header">
            <div>
                <h3 class="card-title">${seller.name}</h3>
                <p class="text-gray-600">${seller.location}</p>
            </div>
            <span class="card-rating">★ ${seller.rating}</span>
        </div>
        <div class="card-products">
            <h4 class="font-semibold mb-2">Available Products:</h4>
            <ul class="product-list">
                ${seller.products.map(product => `
                    <li class="product-item">
                        <i data-lucide="package"></i>
                        <span>${product.name}</span>
                        <span class="text-gray-500">(${product.quantity})</span>
                    </li>
                `).join('')}
            </ul>
        </div>
        <button class="btn btn-primary w-full mt-4">View Products</button>
    `;
    sellerGrid.appendChild(card);
    lucide.createIcons({
        icons: {
            'package': true
        }
    });
});

// Render purchased products
const purchasedGrid = document.getElementById('purchasedGrid');
purchasedProducts.forEach(product => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <div class="flex justify-between items-start">
            <div>
                <h3 class="card-title">${product.name}</h3>
                <p class="text-gray-600">Seller: ${product.seller}</p>
                <p class="text-gray-600">Quantity: ${product.quantity}</p>
                <p class="text-green-700 font-semibold">Price: ₹${product.price} per quintal</p>
                <p class="text-gray-600">Purchase Date: ${product.date}</p>
            </div>
            <span class="px-3 py-1 rounded ${
                product.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                product.status === 'In Transit' ? 'bg-blue-100 text-blue-700' :
                'bg-yellow-100 text-yellow-700'
            }">${product.status}</span>
        </div>
        <button class="btn btn-primary mt-4">View Details</button>
    `;
    purchasedGrid.appendChild(card);
});