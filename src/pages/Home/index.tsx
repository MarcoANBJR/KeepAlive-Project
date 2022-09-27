import { BodyHome, City, DivButton, Divisor, DivText, FirstTextIng, Footer, GlobalStyle, Header, HeaderImgCompass, HeaderImgTemp, IconCloud, Main, Seconds, Temp, TextCountDown, TextCounter, TextFooter, TextIng, TextPt } from "./styles";
import logoHeader from '../../assets/home-compasso-preto.svg';
import tempoHeader from '../../assets/temperatura-TEMPORARIO.png';
import CountDown from "./CountDown";
import { useDate } from "./Date";
import { DivTime, Time, Date } from "./Date/styles";
import ButtonFooter from "./Date/ButtonFooter";
import { Tempo } from "./API";
import { useEffect, useState } from "react";
import { WiDayCloudyGusts } from "react-icons/wi";

export default function Home() {
    const { date, time } = useDate();
    const [ tempo, setTempo ] = useState({name: '', cidade: '', temperatura: 0});
    useEffect(() => {
        Tempo().then((res) => {
            setTempo({name: res.name, cidade: res.sys.country, temperatura: res.main.temp})
        })
    }, [])


    return (
        <BodyHome>
            <GlobalStyle />
            <Header>
                <HeaderImgCompass src={logoHeader}/>
                <DivTime>
                    <Time>{time}</Time>
                    <Date>{date}</Date>
                </DivTime>
                <HeaderImgTemp>
                    <City>{tempo.name} - {tempo.cidade}</City>                    
                    <Temp>
                        <IconCloud>
                            <WiDayCloudyGusts />
                        </IconCloud>
                        {tempo.temperatura.toFixed(0)}°
                    </Temp>
                </HeaderImgTemp>
            </Header>

            <Main>
                <DivText>
                    <FirstTextIng>Our mission is</FirstTextIng>
                    <TextPt>Nossa missão é</TextPt>
                    <TextIng>to transform the world</TextIng>
                    <TextPt>transformar o mundo</TextPt>
                    <TextIng>building digital experiences</TextIng>
                    <TextPt>construindo experiências digitais</TextPt>
                    <TextIng>that enable our client’s growth</TextIng>
                    <TextPt>que permitam o crescimento dos nossos clientes</TextPt>
                </DivText>
            </Main>

            <Footer>
                <TextFooter>
                    Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.
                </TextFooter>
                <Divisor />
                <TextCountDown>Application refresh in</TextCountDown>
                <Seconds>
                    <CountDown maxCounter={600}/> 
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