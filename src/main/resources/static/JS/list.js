// Initialize Lucide icons
lucide.createIcons();

// Sample purchasers data
const purchasers = [
    {
        id: 1,
        name: "Global Agri Traders",
        type: "Wholesale Purchaser",
        location: "Mumbai, Maharashtra",
        rating: 4.8,
        verified: true,
        categories: ["Grains", "Pulses"],
        requiredQuantity: "1000+ quintals",
        activeDeals: 15,
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400"
    },
    {
        id: 2,
        name: "Fresh Foods Ltd",
        type: "Retail Chain",
        location: "Delhi, NCR",
        rating: 4.6,
        verified: true,
        categories: ["Vegetables", "Fruits"],
        requiredQuantity: "500+ quintals",
        activeDeals: 8,
        image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=400"
    },
    // Add more purchasers...
];

// Render purchaser cards
const purchasersGrid = document.getElementById('purchasersGrid');

function renderPurchasers(purchasersList) {
    purchasersGrid.innerHTML = purchasersList.map(purchaser => `
        <div class="purchaser-card">
            <div class="card-header">
                <img src="${purchaser.image}" alt="${purchaser.name}" class="purchaser-image">
                <div class="purchaser-info">
                    <h3>${purchaser.name}</h3>
                    <p class="type">${purchaser.type}</p>
                    <div class="rating">
                        <i data-lucide="star" class="star-icon"></i>
                        <span>${purchaser.rating}</span>
                        ${purchaser.verified ? '<span class="verified-badge">Verified</span>' : ''}
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="location">
                    <i data-lucide="map-pin"></i>
                    <span>${purchaser.location}</span>
                </div>
                <div class="categories">
                    <h4>Interested in:</h4>
                    <div class="category-tags">
                        ${purchaser.categories.map(cat => `<span class="tag">${cat}</span>`).join('')}
                    </div>
                </div>
                <div class="stats">
                    <div class="stat">
                        <i data-lucide="package"></i>
                        <span>Required: ${purchaser.requiredQuantity}</span>
                    </div>
                    <div class="stat">
                        <i data-lucide="handshake"></i>
                        <span>${purchaser.activeDeals} Active Deals</span>
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <button class="btn btn-primary">Contact Purchaser</button>
                <button class="btn btn-outline">View Details</button>
            </div>
        </div>
    `).join('');
    
    // Reinitialize icons for new content
    lucide.createIcons();
}

// Initial render
renderPurchasers(purchasers);

// Search functionality
const searchInput = document.querySelector('.search-box input');
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredPurchasers = purchasers.filter(purchaser => 
        purchaser.name.toLowerCase().includes(searchTerm) ||
        purchaser.location.toLowerCase().includes(searchTerm) ||
        purchaser.categories.some(cat => cat.toLowerCase().includes(searchTerm))
    );
    renderPurchasers(filteredPurchasers);
});
