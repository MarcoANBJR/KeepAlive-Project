import OpenWeatherMap from 'openweathermap-ts';

const openWeather = new OpenWeatherMap({
    apiKey: '2886710fdb8b15cecdd5e8710d80ac20'
  });

openWeather.setUnits('metric');
openWeather.setLanguage('pt_br');
openWeather.setZipCode(88136366, 'BR');


export const Tempo = () => openWeather
.getCurrentWeatherByCityName({
cityName: 'Florianopolis'
})
.then((weather) => weather);