// script.js
document.getElementById('preferencesForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Collect form data
  const destination = document.getElementById('destination').value;
  const startDate = document.getElementById('startDate').value;
  const endDate = document.getElementById('endDate').value;
  const budget = document.getElementById('budget').value;
  const interests = Array.from(document.getElementById('interests').selectedOptions).map(option => option.value);

  // Generate itinerary (this is a simple example, you can customize it)
  const itinerary = `
      <h2>Destination: ${destination}</h2>
      <p><strong>Travel Dates:</strong> ${startDate} to ${endDate}</p>
      <p><strong>Budget:</strong> ${budget}</p>
      <p><strong>Interests:</strong> ${interests.join(', ')}</p>
      <h3>Suggested Itinerary:</h3>
      <ul>
          <li>Day 1: Arrival and check-in at hotel</li>
          <li>Day 2: Explore local attractions</li>
          <li>Day 3: Adventure activities</li>
          <li>Day 4: Relaxation and shopping</li>
          <li>Day 5: Departure</li>
      </ul>
  `;

  // Display itinerary
  document.getElementById('itineraryDetails').innerHTML = itinerary;
  document.getElementById('preferencesForm').classList.add('hidden');
  document.getElementById('itinerary').classList.remove('hidden');
});