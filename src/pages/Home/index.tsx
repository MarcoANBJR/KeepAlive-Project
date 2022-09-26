import { useNavigate } from "react-router-dom";
import { ButtonContinue, ButtonLogout, DivButton, DivImg, Divisor, DivText, FirstTextIng, Footer, Header, HeaderImgCompass, HeaderImgTemp, HeaderImgTime, ImgLogo, Main, Seconds, TextCountDown, TextCounter, TextFooter, TextIng, TextPt } from "./styles";
import logoHeader from '../../assets/home-compasso-preto.svg'
import timeHeader from '../../assets/time-TEMPORARIO.png'
import tempoHeader from '../../assets/temperatura-TEMPORARIO.png'
import imgLogo from '../../assets/Bola-Logo-Compasso.png'
import CountDown from "./CountDown";

export default function Home() {
    const navigate = useNavigate()
    function voltar() {
        navigate('/')
    }
    return (
        <>
            <Header>
                <HeaderImgCompass src={logoHeader}/>
                <HeaderImgTime src={timeHeader}/>
                <HeaderImgTemp src={tempoHeader}/>
            </Header>

            <Main>
                <DivImg><ImgLogo src={imgLogo}/></DivImg>
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
                    <ButtonContinue>Continuar Navegando</ButtonContinue>
                    <ButtonLogout onClick={() => voltar()}>Logout</ButtonLogout>
                </DivButton>
            </Footer>
        </>
    )
}

import { useEffect, useState } from "react";

export const useDate = () => {
    const locale = 'en';
    const [today, setDate] = useState(new Date());
  
    useEffect(() => {
        const timer = setInterval(() => { setDate(new Date()) }, 60 * 1000);
      return () => {
        clearInterval(timer);
      }
    }, []);
  
    const day = today.toLocaleDateString(locale, { weekday: 'long' });
    const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;
  
    const hour = today.getHours();
    const wish = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'}, `;
  
    const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });
  
    return {
      date,
      time,
      wish,
    };
  };