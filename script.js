// constant variables
var APIKey="a11218307960288a55e529d42814916e";
var cityTitleEl=$("#cityName");
var date=$("#date");
var temp=$("#temp");
var windSpeed=$("#windSpeed");
var humidity=$("#humidity");
var UV=$("#UV");
var currentdate= moment().format('L');
var curIcon=$("#curIcon");
var city =$("#cityInfo").val();
// appending variables

$("il").click(function(){
    var newCity=this.innerHTML;
    $("#cityInfo").val(newCity);
    currentCityCall();
});



//current city call function 
var currentCityCall = function(){
    var city =$("#cityInfo").val();

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
        curIcon.attr("src","https://openweathermap.org/img/wn/"+response.weather[0].icon+"@2x.png");
        // UV variables 
        var curLat=response.coord.lat;
        var curLon=response.coord.lon;
        // uv Query URL 
        var UVQueryURL="https://api.openweathermap.org/data/2.5/uvi?appid="+APIKey+"&lat="+curLat+"&lon="+curLon;
        // UV index call
        $.ajax({
            url: UVQueryURL,
            Method: "GET"
        })
        .then(function(response){
            UV.text("UV Index: "+ response.value);
        })
    });
    
// third call for 5 day forecast
    var ForeQueryURL="https://api.openweathermap.org/data/2.5/forecast?q="+city+"&units=imperial&appid="+APIKey;
    $.ajax({
        url: ForeQueryURL,
        method: "GET"
    })
    .then(function(response){
        // deletes any prior information from the div so the new one can be appended
        $("#Forecastblock").empty(); 
        // for loop to get the forecast infromation from each day 
        for(var i=0,k=0;i<5;i++){
            // dynamically appending the forecast call response to html 
        $("#Forecastblock").append("<div class='col p-3 mb-2 bg-secondary text-white border border-white rounded'  id=forecast"+i+"></div>");
        
                    $("#forecast"+i).append("<p id=forcastDate"+i+"></p>");
                    $("#forecast"+i).append("<img id=iconForcast"+i+"></img>");
                    $("#forecast"+i).append("<p id=forcastTemp"+i+"></p>");
                    $("#forecast"+i).append("<p id=forcastHumidity"+i+"></p>");
                    $("#forecast"+i).append("<p id=forcastWindSpeed"+i+"></p>");
                    $("#forcastDate"+i).text(response.list[k].dt_txt);

                    var iconCode=response.list[k].weather[0].icon;
                    var iconURL="https://openweathermap.org/img/w/"+iconCode+".png";
                    $("#iconForcast"+i).attr("src",iconURL);

                    $("#forcastTemp"+i).text("Temperture : " + response.list[k].main.temp + "°F");
                    $("#forcastHumidity"+i).text("Humidity : " + response.list[k].main.humidity + " %");
                    $("#forcastWindSpeed"+i).text("Wind : " + response.list[k].wind.speed + " MPH");

                    k=k+8;
        }
    });
};
// Call function when document loads 
$(document).ready(currentCityCall);
// save the value of the searched item
localStorage.setItem("searchedCity",city);
