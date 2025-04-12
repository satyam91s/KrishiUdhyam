// Initialize Lucide icons
lucide.createIcons();

// Sample data
const verificationRequests = [
    {
        id: 1,
        type: "Purchaser",
        name: "Global Agri Traders",
        location: "Mumbai, Maharashtra",
        documents: ["Business License", "GST Registration", "Bank Statements"],
        status: "Pending",
        date: "2025-03-15"
    },
    {
        id: 2,
        type: "Farmer",
        name: "Rajesh Kumar",
        location: "Amritsar, Punjab",
        documents: ["Land Records", "Farmer ID", "Bank Account"],
        status: "Under Review",
        date: "2025-03-16"
    },
    {
        id: 3,
        type: "Purchaser",
        name: "Fresh Foods Ltd",
        location: "Bangalore, Karnataka",
        documents: ["Company Registration", "Trade License", "Tax Returns"],
        status: "Pending",
        date: "2025-03-17"
    }
];

const recentDeals = [
    {
        id: 1,
        farmer: "Amit Patel",
        purchaser: "Global Agri Traders",
        crop: "Organic Wheat",
        quantity: "500 quintals",
        amount: "₹16,00,000",
        status: "Completed",
        date: "2025-03-15"
    },
    {
        id: 2,
        farmer: "Suresh Singh",
        purchaser: "Fresh Foods Ltd",
        crop: "Basmati Rice",
        quantity: "300 quintals",
        amount: "₹13,50,000",
        status: "In Progress",
        date: "2025-03-16"
    },
    {
        id: 3,
        farmer: "Priya Sharma",
        purchaser: "Nature's Best",
        crop: "Organic Pulses",
        quantity: "200 quintals",
        amount: "₹8,20,000",
        status: "Pending Approval",
        date: "2025-03-17"
    }
];

const certificates = [
    {
        id: "CERT001",
        type: "Deal Certificate",
        parties: "Global Agri Traders - Amit Patel",
        issueDate: "2025-03-15",
        validUntil: "2026-03-15",
        status: "Active"
    },
    {
        id: "CERT002",
        type: "Purchaser Verification",
        parties: "Fresh Foods Ltd",
        issueDate: "2025-03-10",
        validUntil: "2026-03-10",
        status: "Active"
    },
    {
        id: "CERT003",
        type: "Farmer Verification",
        parties: "Suresh Singh",
        issueDate: "2025-03-12",
        validUntil: "2026-03-12",
        status: "Active"
    }
];

// Render verification requests
const requestsGrid = document.getElementById('requestsGrid');
verificationRequests.forEach(request => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <div class="flex justify-between items-start">
            <div>
                <div class="flex items-center gap-2 mb-2">
                    <span class="px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm">${request.type}</span>
                    <span class="px-2 py-1 ${
                        request.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-orange-100 text-orange-700'
                    } rounded text-sm">${request.status}</span>
                </div>
                <h3 class="card-title">${request.name}</h3>
                <p class="text-gray-600">${request.location}</p>
                <div class="mt-3">
                    <p class="font-semibold mb-1">Submitted Documents:</p>
                    <ul class="list-disc list-inside text-gray-600">
                        ${request.documents.map(doc => `<li>${doc}</li>`).join('')}
                    </ul>
                </div>
                <p class="text-gray-600 mt-2">Submitted on: ${request.date}</p>
            </div>
        </div>
        <div class="flex gap-2 mt-4">
            <button class="btn btn-primary flex-1">Review</button>
            <button class="btn btn-secondary flex-1">Request Info</button>
        </div>
    `;
    requestsGrid.appendChild(card);
});

// Render recent deals
const dealsGrid = document.getElementById('dealsGrid');
recentDeals.forEach(deal => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <div class="flex justify-between items-start">
            <div>
                <h3 class="card-title">${deal.crop}</h3>
                <div class="grid grid-cols-2 gap-4 mt-2">
                    <div>
                        <p class="text-gray-600">Farmer:</p>
                        <p class="font-semibold">${deal.farmer}</p>
                    </div>
                    <div>
                        <p class="text-gray-600">Purchaser:</p>
                        <p class="font-semibold">${deal.purchaser}</p>
                    </div>
                    <div>
                        <p class="text-gray-600">Quantity:</p>
                        <p class="font-semibold">${deal.quantity}</p>
                    </div>
                    <div>
                        <p class="text-gray-600">Amount:</p>
                        <p class="font-semibold">${deal.amount}</p>
                    </div>
                </div>
                <p class="text-gray-600 mt-2">Date: ${deal.date}</p>
            </div>
            <span class="px-3 py-1 rounded ${
                deal.status === 'Completed' ? 'bg-green-100 text-green-700' :
                deal.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                'bg-yellow-100 text-yellow-700'
            }">${deal.status}</span>
        </div>
        <div class="flex gap-2 mt-4">
            <button class="btn btn-primary flex-1">View Details</button>
            <button class="btn btn-secondary flex-1">Generate Certificate</button>
        </div>
    `;
    dealsGrid.appendChild(card);
});

// Render certificates
const certificatesGrid = document.getElementById('certificatesGrid');
certificates.forEach(cert => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <div class="flex justify-between items-start">
            <div>
                <div class="flex items-center gap-2 mb-2">
                    <span class="px-2 py-1 bg-green-100 text-green-700 rounded text-sm">${cert.type}</span>
                    <span class="text-gray-600">${cert.id}</span>
                </div>
                <h3 class="card-title">${cert.parties}</h3>
                <div class="grid grid-cols-2 gap-4 mt-2">
                    <div>
                        <p class="text-gray-600">Issue Date:</p>
                        <p class="font-semibold">${cert.issueDate}</p>
                    </div>
                    <div>
                        <p class="text-gray-600">Valid Until:</p>
                        <p class="font-semibold">${cert.validUntil}</p>
                    </div>
                </div>
            </div>
            <span class="px-3 py-1 rounded bg-green-100 text-green-700">${cert.status}</span>
        </div>
        <div class="flex gap-2 mt-4">
            <button class="btn btn-primary flex-1">Download</button>
            <button class="btn btn-secondary flex-1">Verify</button>
        </div>
    `;
    certificatesGrid.appendChild(card);
});

function openCropPriceForm() {
    document.getElementById("cropPriceModal").style.display = "flex";
}

function closeCropPriceForm() {
    document.getElementById("cropPriceModal").style.display = "none";
}


