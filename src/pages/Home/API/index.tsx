import OpenWeatherMap from 'openweathermap-ts';
import { useEffect, useState } from 'react';
import { WiDayCloudyGusts } from 'react-icons/wi';
import { City, Temp, IconCloud } from '../styles';

const openWeather = new OpenWeatherMap({
    apiKey: '2886710fdb8b15cecdd5e8710d80ac20'
  });

openWeather.setUnits('metric');
openWeather.setLanguage('pt_br');

export const Tempo = () => openWeather
.getCurrentWeatherByCityName({
cityName: 'Florianopolis'
})


// export const Climate = () => {
  
//   const [lat, setLat] = useState<number>();
//   const [long, setLong] = useState<number>();

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition((position) => {
//         setLat(position.coords.latitude);
//         setLong(position.coords.longitude);
//     });

//     lat == 0 && long == 0 ? 
//       openWeather.getCurrentWeatherByCityName({ cityName: 'Florianopolis' }).then((weather)=>weather) :
//       openWeather.getCurrentWeatherByGeoCoordinates(lat, long).then((weather)=>weather) 

//     console.log(lat);
//     console.log(long);


//   }, []);

//   return (
//     <>
//       <City>{tempo.name} - {tempo.cidade}</City><Temp>
//         <IconCloud>
//           <WiDayCloudyGusts />
//         </IconCloud>
//         {tempo.temperatura.toFixed(0)}°
//       </Temp>
//     </>
//   )
// }