import { BodyHome, DivButton, Divisor, Footer, GlobalStyle, Header, HeaderImgCompass, HeaderWeather, IconCloud, Main, Seconds, Temp, TextCountDown, TextCounter, TextFooter} from "./styles";
import logoHeader from '../../assets/home-compasso-preto.svg';
import CountDown from "./CountDown";
import { useDate } from "./Date";
import { DivTime, Time, Date } from "./Date/styles";
import ButtonFooter from "./ButtonFooter";
import { useContext, useEffect, useState } from "react";
import { TextCenter } from "./TextCenter";
import { OpenWeather } from "../../Components/OpenWeather";
import { UserContext } from "../../contexts/UserContext";
import { auth } from "../../services/firebase";

export default function Home() {

    const { currentUser, setCurrentUser } = useContext(UserContext);
    const { date, time } = useDate();

    useEffect(() => {
        const userName = currentUser.split(' ')[0];
        setCurrentUser(userName)
    }, [auth.currentUser])
    
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
                <div>
                    {currentUser}
                </div>
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