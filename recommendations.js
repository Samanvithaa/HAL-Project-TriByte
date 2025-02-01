const urlParams = new URLSearchParams(window.location.search);
const city = urlParams.get('city');
const budget = parseFloat(urlParams.get('budget'));
const fromDate = urlParams.get('from-date');
const toDate = urlParams.get('to-date');
const interest = urlParams.get('interest');

// Sample dataset (same as in script.js)
const dataset = [
    { zone: "Northern", state: "Delhi", city: "Delhi", name: "India Gate", duration: "0.5hr", budget: 1000, bestTimeToVisit: "Evening", significance: "Historical" },
    { zone: "Northern", state: "Delhi", city: "Delhi", name: "Humayun's Tomb", duration: "2hr", budget: 3000, bestTimeToVisit: "Afternoon", significance: "Historical" },
    { zone: "Northern", state: "Delhi", city: "Delhi", name: "Akshardham Temple", duration: "5hr", budget: 6100, bestTimeToVisit: "Afternoon", significance: "Religious" },
    { zone: "Western", state: "Maharastra", city: "Mumbai", name: "Marine Drive", duration: "2hr", budget: 10000, bestTimeToVisit: "Evening", significance: "Scenic" },
    { zone: "Western", state: "Maharastra", city: "Mumbai", name: "Gateway of India", duration: "2hr", budget: 1000, bestTimeToVisit: "All time", significance: "Historical" },
    { zone: "Western", state: "Maharastra", city: "Mumbai", name: "Sanjay Gandhi National Park", duration: "3hr", budget: 5000, bestTimeToVisit: "All time", significance: "Wildlife" },
    { zone: "Western", state: "Maharastra", city: "Mumbai", name: "Imagicaa", duration: "12hr", budget: 2000, bestTimeToVisit: "All time", significance: "Recreational" },
    { zone: "Southern", state: "Karnataka", city: "Bangalore", name: "Vidhaan Soudha", duration: "0.5hr", budget: 500, bestTimeToVisit: "All time", significance: "Architectural" },
];

// Display details
const detailsDiv = document.getElementById('details');
detailsDiv.innerHTML = `<p>City: ${city}</p>
                        <p>Budget: ₹${budget}</p>
                        <p>From Date: ${fromDate}</p>
                        <p>To Date: ${toDate}</p>
                        <p>Interest: ${interest}</p>`;

const recommendationsList = document.getElementById('recommendations');
recommendationsList.innerHTML = ''; // Clear previous results

// Filter recommendations based on user input
const filteredRecommendations = dataset.filter(place => {
    return place.city.toLowerCase() === city.toLowerCase() &&
           place.budget <= budget &&
           place.significance.toLowerCase() === interest.toLowerCase();
});

if (filteredRecommendations.length > 0) {
    filteredRecommendations.forEach(rec => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${rec.name}</strong><br>
                             Budget: ₹${rec.budget}<br>
                             Duration: ${rec.duration} hours<br>
                             Best Time to Visit: ${rec.bestTimeToVisit}`;
        recommendationsList.appendChild(listItem);
    });
} else {
    const listItem = document.createElement('li');
    listItem.textContent = "No matching places found.";
    recommendationsList.appendChild(listItem);
}