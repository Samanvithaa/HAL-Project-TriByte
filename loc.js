const apiKey = "cab8e63e512a23bc2af81b5b9b041767"; 
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const cityElement = document.querySelector(".city");
const tempElement = document.querySelector(".temp");
const humidityElement = document.querySelector(".humidity");
const windElement = document.querySelector(".wind");


async function fetchWeather(city) {
    try {
        const response = await fetch(`${apiUrl}${city}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error("City not found");
        }
        const data = await response.json();

        
        cityElement.innerText = data.name;
        tempElement.innerText = `${data.main.temp}°C`;
        humidityElement.innerText = `${data.main.humidity}%`;
        windElement.innerText = `${data.wind.speed} km/hr`;
    } catch (error) {
        alert("City not found. Please enter a valid city name.");
    }
}

searchButton.addEventListener("click", () => {
    const city = searchBox.value.trim();
    if (city) {
        fetchWeather(city);
    } else {
        alert("Please enter a city name.");
    }
});
