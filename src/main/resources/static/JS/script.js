// Data
const purchasers = [
    { 
        id: 1, 
        name: "Green Fields Co.", 
        type: "Organic Produce", 
        rating: 4.8,
        location: "Punjab, India",
        requiredCrops: [
            { name: "Wheat", quantity: "1000 quintals" },
            { name: "Rice", quantity: "800 quintals" }
        ]
    },
    { 
        id: 2, 
        name: "Farm Fresh Ltd.", 
        type: "All Crops", 
        rating: 4.5,
        location: "Haryana, India",
        requiredCrops: [
            { name: "Corn", quantity: "500 quintals" },
            { name: "Soybeans", quantity: "300 quintals" }
        ]
    },
    { 
        id: 3, 
        name: "Nature's Best", 
        type: "Specialty Crops", 
        rating: 4.9,
        location: "Gujarat, India",
        requiredCrops: [
            { name: "Organic Cotton", quantity: "200 quintals" },
            { name: "Pulses", quantity: "400 quintals" }
        ]
    },
    { 
        id: 4, 
        name: "Agro Solutions", 
        type: "Mixed Farming", 
        rating: 4.7,
        location: "Maharashtra, India",
        requiredCrops: [
            { name: "Sugarcane", quantity: "2000 quintals" },
            { name: "Rice", quantity: "600 quintals" }
        ]
    },
    { 
        id: 5, 
        name: "Harvest Hub", 
        type: "Grain Specialist", 
        rating: 4.6,
        location: "Madhya Pradesh, India",
        requiredCrops: [
            { name: "Wheat", quantity: "1500 quintals" },
            { name: "Barley", quantity: "300 quintals" }
        ]
    },
    { 
        id: 6, 
        name: "Rural Connect", 
        type: "Local Produce", 
        rating: 4.8,
        location: "Uttar Pradesh, India",
        requiredCrops: [
            { name: "Rice", quantity: "1000 quintals" },
            { name: "Pulses", quantity: "500 quintals" }
        ]
    },
    { 
        id: 7, 
        name: "Global Agri", 
        type: "Export Quality", 
        rating: 4.9,
        location: "Rajasthan, India",
        requiredCrops: [
            { name: "Oilseeds", quantity: "400 quintals" },
            { name: "Wheat", quantity: "800 quintals" }
        ]
    },
    { 
        id: 8, 
        name: "Eco Farms", 
        type: "Organic Only", 
        rating: 4.7,
        location: "Karnataka, India",
        requiredCrops: [
            { name: "Organic Rice", quantity: "300 quintals" },
            { name: "Organic Wheat", quantity: "400 quintals" }
        ]
    },
    { 
        id: 9, 
        name: "Prime Produce", 
        type: "Premium Crops", 
        rating: 4.8,
        location: "Tamil Nadu, India",
        requiredCrops: [
            { name: "Premium Rice", quantity: "700 quintals" },
            { name: "Cotton", quantity: "300 quintals" }
        ]
    }
];


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

// Render purchaser cards
// const purchaserGrid = document.getElementById('purchaserGrid');
// purchasers.forEach(purchaser => {
//     const card = document.createElement('div');
//     card.className = 'card';
//     card.innerHTML = `
//         <div class="card-header">
//             <div>
//                 <h3 class="card-title">${purchaser.name}</h3>
//                 <p class="text-gray-600">${purchaser.type}</p>
//             </div>
//             <span class="card-rating">★ ${purchaser.rating}</span>
//         </div>
//         <div class="card-location">
//             <i data-lucide="map-pin"></i>
//             <span>${purchaser.location}</span>
//         </div>
//         <div class="card-crops">
//             <h4 class="font-semibold mb-2">Required Crops:</h4>
//             <ul class="crop-list">
//                 ${purchaser.requiredCrops.map(crop => `
//                     <li class="crop-item">
//                         <i data-lucide="wheat"></i>
//                         <span>${crop.name}</span>
//                         <span class="text-gray-500">(${crop.quantity})</span>
//                     </li>
//                 `).join('')}
//             </ul>
//         </div>
//         <button class="btn btn-primary w-full mt-4">View Details</button>
//     `;
//     purchaserGrid.appendChild(card);
//     lucide.createIcons({
//         icons: {
//             'map-pin': true,
//             'wheat': true
//         }
//     });
// });

// Modal functionality
const modal = document.getElementById('uploadModal');
const uploadBtn = document.getElementById('uploadProductBtn');
const cancelBtn = document.getElementById('cancelUpload');

uploadBtn.addEventListener('click', () => {
    modal.classList.add('active');
});

cancelBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

//  Removed preventDefault to allow form submission
