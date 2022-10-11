import { BodyHome, DisplayName, DivButton, Divisor, Footer, GlobalStyle, Header, HeaderImgCompass, Main, Seconds, TextCountDown, TextCounter, TextFooter} from "./styles";
import logoHeader from '../../assets/home-compasso-preto.svg';
import CountDown from "./CountDown";
import { useDate } from "./Date";
import { DivTime, Time, Date } from "./Date/styles";
import ButtonFooter from "./ButtonFooter";
import { useContext, useEffect } from "react";
import { TextCenter } from "./TextCenter";
import { OpenWeather } from "../../Components/OpenWeather";
import { UserContext } from "../../contexts/UserContext";
import { auth } from "../../services/firebase";
import { useNavigate } from "react-router-dom";

export default function Home() {

    const navigate = useNavigate();

    const { currentUser, setCurrentUser } = useContext(UserContext);
    const { date, time } = useDate();

    useEffect(() => {
        const userName = currentUser.split(' ')[0];
        setCurrentUser(userName);
        !auth.currentUser && navigate('/');
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
                <DisplayName>
                    Bem Vindo(a), {currentUser}
                </DisplayName>
                <TextFooter>
                    Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.
                </TextFooter>
                <Divisor />
                <TextCountDown>Application refresh in</TextCountDown>
                <Seconds>
                    <CountDown maxCounter={5000}/> 
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