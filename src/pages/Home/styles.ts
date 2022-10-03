import { WiDayCloudyGusts } from "react-icons/wi";
import styled, { createGlobalStyle } from "styled-components";
import imgLogo from '../../assets/bola-LogoCompasso.jpg'

//! Header

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 767px) {
        flex-direction: column;
    }
`;

export const HeaderImgCompass = styled.img`
    max-width: 150px;
    max-height: 42.75px;
    padding: 25px 0 55px 40px;
    @media screen and (max-width: 768px) {        
        padding: 25px 33px 0 40px;
    }
    @media screen and (max-width: 425px) {        
        padding: 5% 0;
    }
`;

export const HeaderImgTime = styled.img`
    width: 327px;
    height: 169px;
`;

export const HeaderImgTemp = styled.div`
    width: 121px;
    height: 78px;
    padding: 10px 40px 0 0;
    @media screen and (max-width: 425px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: unset;        
        padding: unset;
    }
`;
export const City = styled.div`
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 18px;
    text-align: center;
    color: #222222;    
    @media screen and (max-width: 425px){
        font-size: 1.8rem;      
    }
`;
export const Temp = styled.div`
    display: flex;
    font-weight: 700;
    font-size: 48px;
    line-height: 61px;
    text-align: center;
    color: #222222;
    @media screen and (max-width: 425px){
        font-size: 7rem;      
    }
`;

export const IconCloud = styled(WiDayCloudyGusts)`
    font-size: 3rem;
    font-weight: 500;
    margin-top: 8px;

`;

//! Body

export const Main = styled.main`
    display: flex;
    justify-content: flex-end;
`;

export const DivText = styled.div`
    padding-right: 8.375rem;
    /* padding-top: 10.375rem;
    padding-bottom: 16.375rem; */
    @media screen and (max-width: 768px) {
        padding-right: 5.375rem;        
    }
    @media screen and (max-width: 425px) {
        padding: 0 3.3rem 10rem 3.3rem;      
    }
    @media screen and (max-width: 320px) {
        padding-bottom: 10rem;
        padding-right: 2.375rem;       
    }
`;

export const TextIng = styled.h1`
    font-weight: 700;
    font-size: 4rem;
    line-height: 5.063rem;
    text-align: right;
    color: #C12D18;
    
    @media screen and (max-width: 425px) {
        font-size: 3rem;     
        line-height: 6.063rem;
    }
    @media screen and (max-width: 320px) {
        font-size: 3rem;     
        line-height: 3.063rem;
    }
`;

export const FirstTextIng = styled(TextIng)`
    font-size: 2.25rem;
    line-height: 2.875rem;
    @media screen and (max-width: 425px) {
        font-size: 2.5rem;
    }
`;

export const TextPt = styled.p`    
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 1.875rem;
    text-align: right;
    color: #222222;
    @media screen and (max-width: 425px) {
        padding-bottom: 7%;
        padding-top: 2%;
    }
`;

//! Footer

export const Footer = styled.footer`
    background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: white;
    height: 9vh;
    @media screen and (max-width: 1440px) {
        /* height: 8vh; */
    }
    @media screen and (max-width: 875px) {
        height: 20vh;
    }
    @media screen and (max-width: 768px) {
        height: 9vh;
    }
    @media screen and (min-height: 767px) {
        height: 10vh;
    }
    @media screen and (max-width: 425px) {
        height: 20%;
        display: grid;
        grid-template-areas: 
            'text text text'
            'bar bar bar'
            'textS seconds buttons'
        ;
    }
    @media screen and (max-width: 320px) {
        height: 32%;
        display: grid;
        grid-template-areas: 
            'text text text'
            'bar bar bar'
            'textS seconds seconds'
            'buttons buttons buttons';
        ;
        align-items: flex-end;
    }
`;

export const TextFooter = styled.p`
    font-size: 12px;
    line-height: 15px;
    text-align: right;
    width: 33.813rem;  
    @media screen and (max-width: 768px) {
    }
    @media screen and (max-width: 425px) {
        width: 80%;  
        justify-self: center;
        text-align: center;

        grid-area: text;
    }
`;

export const Divisor = styled.div`
    width: 61px;
    height: 0px;
    border: 1px solid;
    transform: rotate(90deg);
    @media screen and (max-width: 1440px) {
        width: 3.2rem;
    }
    @media screen and (max-width: 768px) {
    }
    @media screen and (max-width: 425px) {
        grid-area: bar;
        transform: rotate(0deg);
        width: 80%;
        justify-self: center;
    }
`;

export const TextCountDown = styled.p`    
    width: 109px;
    font-size: 14px;
    line-height: 18px;
    text-align: right;
    padding-left: 7.688rem;
    @media screen and (max-width: 768px) {
        padding-left: unset;
    }
    @media screen and (max-width: 425px) {
        grid-area: textS;
    }
`;

export const Seconds = styled.div`
    text-align: center;
    padding-left: 2.063rem;
    @media screen and (max-width: 425px) {
    padding-left: 0rem;
        grid-area: seconds;
        justify-self: flex-start;
    }
    @media screen and (max-width: 320px) {
        justify-self: unset;
    }
`;

export const TextCounter = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
`;

export const DivButton = styled.div`
    display: flex;
    padding-left: 23.063rem;
    height: 100%;
    @media screen and (max-width: 1024px) {
        padding-left: 13.063rem;        
    }
    @media screen and (max-width: 768px) {
        padding-left: 6.063rem;        
    }
    @media screen and (max-width: 425px) {
        padding-left: 0rem;        
        grid-area: buttons;
    }
    @media screen and (max-width: 320px) {
        height: 8rem;
    }
`;

export const BodyHome = styled.div`
    background: url(${imgLogo}) no-repeat;
    background-size: 40%;
    background-position: -21% 87%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (max-width: 1024px) {
        background-position: -21% 91%;        
    }
    @media screen and (max-width: 875px) {
        height: 875px;      
    }
    @media screen and (max-width: 768px) {
        height: 875px;      
    }
    @media screen and (max-width: 425px) {
        background-position: -17% 78%;
    }   
    @media screen and (max-width: 320px) {
        background-position: -17% 64.5%;
    }   
`;

export const GlobalStyle = createGlobalStyle`
    @media screen and (max-width: 1440px) {
        :root{
            font-size: 13px;
            transition: 1s;
        }
    }
    @media screen and (max-width: 1024px) {
        :root{
            font-size: 10px;  
            transition: 1s;    
        }
    }        
    @media screen and (max-width: 875px) {
        :root{
            font-size: 9px;    
            transition: 1s;   
        }
    }        
    @media screen and (max-width: 425px) {
        background-position: -21% 94%;
        :root{
            font-size: 9px;   
            transition: 1s;      
        }
    }        
    @media screen and (max-width: 425px) {
        background-position: -21% 94%;
        :root{
            font-size: 8px; 
            transition: 1s;      
        }
    }        
`;