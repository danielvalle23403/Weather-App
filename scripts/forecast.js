const key = 'cpt80M9iTDNXqGiOzrfZrs3c29pMGp2o'

// city info
//Weather info
const getWeather = async (id) => {

const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
const query = `${id}?apikey=${key}`;

const response = await fetch(base + query);
const data = await response.json();

return data[0];
}
// getting apis
const getCity = async (city) => {
    console.log(city)
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();
// closest match to what we request
    return data[0];
};

