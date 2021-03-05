// dom manipulation
const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details')
const time = document.querySelector('img.time')
const icon = document.querySelector('.icon img')

//update ui
const updateUI = (data) => {

// const cityDets = data.cityDets;
// const weather = data.weather;

//destructure prop.
const {cityDets, weather } = data;

// update details template
console.log(data)
details.innerHTML = `
<h5 class="my-3">${cityDets.EnglishName}</h5>
 <div class="my-3">${weather.WeatherText}</div>  
      <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
     <span>&deg;C</span>
 </div>
`;

// aupdate imgs
const iconSrc = `imgs/img/icons/${weather.WeatherIcon}.svg`;
icon.setAttribute('src', iconSrc)




let timeSrc = weather.IsDayTime ? 'imgs/img/day.svg' : 'imgs/img/night.svg';
// if(weather.IsDayTime){
//     timeSrc = 'imgs/img/day.svg';
// } else {
//     timeSrc = 'imgs/img/night.svg';
// }
time.setAttribute('src', timeSrc )

//remove the d-none class if present
if(card.classList.contains('d-none')){
    card.classList.remove('d-none');

}


}


const updateCity = async (city) => {
const cityDets = await getCity(city)
const weather = await getWeather(cityDets.Key);

return {
     cityDets,
     weather
};
    };

cityForm.addEventListener('submit', e => {
    //prevent default action
    e.preventDefault();
    //get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();
    //update ui with new city
    updateCity(city)
    .then(data => {
        console.log("data", data)
        updateUI(data)
    })
    .catch(err => console.log(err))
});

