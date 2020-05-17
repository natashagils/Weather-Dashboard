# Weather Dashboard 

# Synopsis
This simple application retrives data from another application's API and uses it in its own context. In this case, we're retrieving data from the OpenWeather API to retrieve weather data for cities. All persistent data is stored in `localStorage.` 

# User Story
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly


# Screenshot 


# Acceptance Criteria 
The weather dashboard fulfils the below criteria: 

* GIVEN a weather dashboard with form inputs
* WHEN I search for a city
* THEN I am presented with current and future conditions for that city and that city is added to the search history
* WHEN I view current weather conditions for that city
* THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
* WHEN I view the UV index
* THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
* WHEN I view future weather conditions for that city
* THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
* WHEN I click on a city in the search history
* THEN I am again presented with current and future conditions for that city

# Sample Code


    var curQueryURL="https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial&appid="+APIKey;
    $.ajax({
        url: curQueryURL,
        method: "GET"
    })
    .then(function(response){
        cityTitleEl.text(response.name);
        date.text(currentdate);
        temp.text("Temperature: "+response.main.temp+"°");
        humidity.text("Humidity: "+response.main.humidity+"%");
        windSpeed.text("Wind Speed: "+response.wind.speed+"MPH");
 
  
  
 # Installation
To use this portfolio, log into your GitHub account (if you don’t have a GitHub user profile, create one at https://github.com/join) and open this link in your browser: https://github.com/natashagils/Weather-Dashboard. Then click on the "Fork" button at the top right corner and wait until the repo is forked. 




