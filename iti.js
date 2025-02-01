// Sample dataset
const dataset = [
    { zone: "Northern", state: "Delhi", city: "Delhi", name: "India Gate", duration: "0.5", budget: 1000, bestTimeToVisit: "Evening", significance: "Historical" },
    { zone: "Northern", state: "Delhi", city: "Delhi", name: "Humayun's Tomb", duration: "2", budget: 3100, bestTimeToVisit: "Afternoon", significance: "Historical" },
    { zone: "Northern", state: "Delhi", city: "Delhi", name: "Akshardham Temple", duration: "5", budget: 6100, bestTimeToVisit: "Afternoon", significance: "Religious" },
    { zone: "Western", state: "Maharastra", city: "Mumbai", name: "Marine Drive", duration: "2", budget: 10000, bestTimeToVisit: "Evening", significance: "Scenic" },
    // Add more data as needed...
    { zone: "Western", state: "Maharastra", city: "Mumbai", name: "Gateway of India", duration: "2hr", budget: 1000, bestTimeToVisit: "All time", significance: "Historical" },
    { zone: "Western", state: "Maharastra", city: "Mumbai", name: "Sanjay Gandhi National Park", duration: "3hr", budget: 5000, bestTimeToVisit: "All time", significance: "Wildlife" },
    { zone: "Western", state: "Maharastra", city: "Mumbai", name: "Imagicaa", duration: "12hr", budget: 2000, bestTimeToVisit: "All time", significance: "Recreational" },
    { zone: "Southern", state: "Karnataka", city: "Bangalore", name: "Vidhaan Soudha", duration: "0.5hr", budget: 500, bestTimeToVisit: "All time", significance: "Architectural" },
];

// Populate unique significance values in the dropdown
const interestDropdown = document.getElementById('interest');
const uniqueSignificance = [...new Set(dataset.map(item => item.significance))];
uniqueSignificance.forEach(significance => {
    const option = document.createElement('option');
    option.value = significance;
    option.textContent = significance;
    interestDropdown.appendChild(option);
});
