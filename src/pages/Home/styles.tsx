import styled from "styled-components";

//! Header

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const HeaderImgCompass = styled.img`
    max-width: 150px;
    max-height: 42.75px;
    padding: 25px 0 0 40px;
`;

export const HeaderImgTime = styled.img`
    width: 327px;
    height: 169px;
`;

export const HeaderImgTemp = styled.img`
    width: 121px;
    height: 78px;
    padding: 25px 40px 0 0;
`;

//! Body

export const Main = styled.main`
    display: flex;
    justify-content: space-between;
`;

export const DivImg = styled.div`
    position: relative;
`;

export const ImgLogo = styled.img`    
    position: absolute;
    top: 88px;
    z-index: -1;
`;


export const DivText = styled.div`
    padding-right: 8.375rem;
    padding-top: 10.375rem;
    padding-bottom: 16.375rem;
`;

export const TextIng = styled.h1`
    font-weight: 700;
    font-size: 4rem;
    line-height: 5.063rem;
    text-align: right;
    color: #C12D18;
`;

export const FirstTextIng = styled(TextIng)`
    font-size: 2.25rem;
    line-height: 2.875rem;
`;

export const TextPt = styled.p`    
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.875rem;
    text-align: right;
    color: #222222;
`;

//! Footer

export const Footer = styled.footer`
    max-height: 6.25rem;
    background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: white;
`;

export const TextFooter = styled.p`
    font-size: 12px;
    line-height: 15px;
    text-align: right;
    width: 541px;   
`;

export const Divisor = styled.div`
    width: 61px;
    height: 0px;
    border: 1px solid;
    transform: rotate(90deg);
    `;

export const TextCountDown = styled.p`    
    width: 109px;
    font-size: 14px;
    line-height: 18px;
    text-align: right;
    padding-left: 123px;
`;

export const Seconds = styled.div`
    text-align: center;
    padding-left: 33px;
`;

export const TextCounter = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
`;

export const DivButton = styled.div`
    display: flex;
    padding-left: 23.063rem;
`;

export const ButtonLogout = styled.button`
    width: 131px;
    height: 99px;
    border: none;

    background: transparent;
    color: white;
`;

export const ButtonContinue = styled(ButtonLogout)`
    background: #FFFFFF;
    color: #C13216;
`;