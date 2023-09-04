

const apiKey = "bfa2d0934f358d58055cfacb9b67933e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")

const WeatherIcon = document.querySelector(".Weather-Icon")


async function weatherCheck(City){
    const response = await fetch(apiUrl + City + `&appId=${apiKey}`);

    if (response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".Weather").style.display = "none";
    } else {
        var data = await response.json();
        

    document.querySelector(".City").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

    if(data.weather[0].main == "Clouds"){
        WeatherIcon.src = "Images/clouds.png";
    } else if (data.weather[0].main == 'Clear'){
        WeatherIcon.src = "Images/clear.png";
    } else if (data.weather[0].main == 'Rain'){
        WeatherIcon.src = "Images/rain.png";
    } else if (data.weather[0].main == 'Snow'){
        WeatherIcon.src = "Images/snow.png";
    } else if (data.weather[0].main == 'Drizzle'){
        WeatherIcon.src = "Images/drizzle.png";
    } else if (data.weather[0].main == 'Mist'){
        WeatherIcon.src = "Images/mist.png";
    }else if (data.weather[0].main == 'Haze'){
        WeatherIcon.src = "Images/mist.png";
    }

    document.querySelector(".error").style.display = "none";
    document.querySelector(".Weather").style.display = "block";
    

    }
    
}


searchBtn.addEventListener ("click", () =>{
    weatherCheck(searchBox.value);

})



