import { BodyHome, City, DivButton, Divisor, Footer, GlobalStyle, Header, HeaderImgCompass, HeaderWeather, IconCloud, Main, Seconds, Temp, TextCountDown, TextCounter, TextFooter} from "./styles";
import logoHeader from '../../assets/home-compasso-preto.svg';
import CountDown from "./CountDown";
import { useDate } from "./Date";
import { DivTime, Time, Date } from "./Date/styles";
import ButtonFooter from "./Date/ButtonFooter";
import { useEffect, useState } from "react";
import { WiDayCloudyGusts } from "react-icons/wi";
import OpenWeatherMap from "openweathermap-ts";
import { TextCenter } from "./TextCenter";
import { OpenWeather } from "../Components/OpenWeather";

export default function Home() {

    //! Testando
    // const [ tempo, setTempo ] = useState({name: '', cidade: '', temperatura: 0});

    // const openWeather = new OpenWeatherMap({
    //     apiKey: '2886710fdb8b15cecdd5e8710d80ac20'
    //   });    
    // openWeather.setUnits('metric');
    // openWeather.setLanguage('pt_br');

    // const [lat, setLat] = useState<number>(-27.59746067670719);
    // const [long, setLong] = useState<number>(-48.55632441704621);

    // const location = () => {        
    //     navigator.geolocation && 
    //     navigator.geolocation.getCurrentPosition((position) => {
    //         setLat(position.coords.latitude);
    //         setLong(position.coords.longitude);
    //     })
    // }

    // useEffect(() => {
    //     location();

    //     openWeather.getCurrentWeatherByGeoCoordinates(lat, long).then(async(weather)=> {
    //         await setTempo({name: weather.name, cidade: weather.sys.country, temperatura: weather.main.temp})
    //     });

    // },[lat, long]);
    // console.log(lat);
    // console.log(long);
    
    // lat == 0 && long == 0 ? 
    //     openWeather.getCurrentWeatherByCityName({ cityName: 'Florianopolis' }).then((weather)=> {
    //         setTempo({name: weather.name, cidade: weather.sys.country, temperatura: weather.main.temp})
    //     }) :
    
    const { date, time } = useDate();

    return (
        <BodyHome>
            <GlobalStyle />
            <Header>
                <HeaderImgCompass src={logoHeader}/>
                <DivTime>
                    <Time>{time}</Time>
                    <Date>{date}</Date>
                </DivTime>
                <OpenWeather />
            </Header>

            <Main>
                <TextCenter />
            </Main>

            <Footer>
                <TextFooter>
                    Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.
                </TextFooter>
                <Divisor />
                <TextCountDown>Application refresh in</TextCountDown>
                <Seconds>
                    <CountDown maxCounter={500}/> 
                    <TextCounter>seconds</TextCounter>
                </Seconds>
                <DivButton>
                    <ButtonFooter dark={false} nameButton={'Continuar Navegando'} />
                    <ButtonFooter dark={true} nameButton={'Logout'} />
                </DivButton>
            </Footer>
        </BodyHome>        
    )
}