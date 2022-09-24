import styled from 'styled-components';
import background from '../../assets/login-background.svg'

export const Main = styled.main`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);
    display: flex;
    color: #E0E0E0;
`;

export const SectionLeft = styled.section`
    width: 50%;
`;

export const DivLeft = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 30%;
`;

export const DivTop = styled.div`
    max-width: 301px;
`;

export const DivBottom = styled.div`
    max-width: 379px;
`;

export const LoginTitle = styled.h1`
    font-size: 3.75rem;
    padding-bottom: 1.063rem;
`;

export const LoginInfo = styled.p`
    font-size: 1rem;
    padding-bottom: 8.438rem;
`;

export const LoginText = styled.p`
    font-size: 1.875rem;
    padding-bottom: 2rem;
`;

export const DivInput = styled.div`
    background: #26292C;
    border: 1px solid #FFFFFF;
    border-radius: 50px;
    width: 379px;
    height: 60px;       
`;
    export const UserDivInput = styled(DivInput)`
        margin-bottom: 2rem;
    `;
    export const PasswordDivInput = styled(DivInput)`
        margin-bottom: 7.188rem;
    `;

export const Input = styled.input`
    background-color: transparent;
    border: none;
`;

export const ContinueButton = styled.button`
    width: 379px;
    height: 67px;   
    color: #FFFFFF;
    font-size: 1.125rem;
    font-family: 'Mark Pro';
    cursor: pointer;

    border-radius: 50px;
    background: linear-gradient(90deg, #FF2D04 0%, #C13216 100%);    
    filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.5));
    border: none;
`;

//! Right Side

export const SectionRight = styled(SectionLeft)`
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    padding-top: 2%;
`;

export const Img = styled.img`
    max-width: 309px;
    max-height: 69px;
`;