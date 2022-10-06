import OpenWeatherMap from "openweathermap-ts";
import { useState, useEffect } from "react";
import { WiDayCloudyGusts } from "react-icons/wi";
import { City, HeaderWeather, IconCloud, Temp } from "../../Home/styles";


export const OpenWeather = () => {

    const [ tempo, setTempo ] = useState({name: '', cidade: '', temperatura: 0});
    
    const openWeather = new OpenWeatherMap({
        apiKey: '2886710fdb8b15cecdd5e8710d80ac20'
        });    
    openWeather.setUnits('metric');
    openWeather.setLanguage('pt_br');
    
    const [lat, setLat] = useState<number>(-27.59746067670719);
    const [long, setLong] = useState<number>(-48.55632441704621);
    
    const location = () => {        
        navigator.geolocation && 
        navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
        })
    }
    
    useEffect(() => {

        location();
        openWeather.getCurrentWeatherByGeoCoordinates(lat, long).then(async(weather)=> {
            await setTempo({name: weather.name, cidade: weather.sys.country, temperatura: weather.main.temp})
        });
    
    },[lat, long]);

    return (
        <HeaderWeather>
            <City>{tempo.name} - {tempo.cidade}</City>                    
            <Temp>
                <IconCloud>
                    <WiDayCloudyGusts />
                </IconCloud>
                {tempo.temperatura.toFixed(0)}°
            </Temp>
        </HeaderWeather>
    )
}