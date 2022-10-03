import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai';
import styled, { createGlobalStyle } from 'styled-components';
import background from '../../assets/notebook-login.jpg'

type PropBorder = {
    border: boolean
}
type PropIcon = {
    focusUser?: boolean,
    focusPassword?: boolean
}

export const Main = styled.main`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);
    display: flex;
    color: #E0E0E0;
`;

export const SectionLeft = styled.section`
    width: 50%;
    @media screen and (max-width: 1024px) {
        width: 100%;
    }
`;

export const DivLeft = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 27%;
    @media screen and (max-width: 1024px) {
        padding: 0 30%;
    }
    @media screen and (max-width: 768px) {
        padding: 0 25%;
    }
    @media screen and (max-width: 425px) {        
    padding: 0 15% 0 14%;
    }
    @media screen and (max-width: 280px) {        
        padding: 0 19% 0 8%;
    }
`;

export const ImgLeft = styled.img`
    display: none;
@media screen and (max-width: 1024px) {
    display: flex;
    padding-bottom: 5.438rem;
    height: 7%;
    padding-bottom: 20%;
}
    display: none;
@media screen and (max-width: 425px) {
    height: 6%;
    padding-bottom: 30%;
}

`;

export const DivTop = styled.div`
    width: 100%;
`;

//! Bottom

export const DivBottom = styled.div`
    width: 100%;
    position: relative;
`;

export const LoginTitle = styled.h1`
    font-size: 3.75rem;
    padding-bottom: 1.063rem;
    @media screen and (max-width: 280px) {
        font-size: 3.2rem;
    }
`;

export const LoginInfo = styled.p`
    font-size: 1rem;
    padding-bottom: 8.438rem;
    padding-right: 6rem;
    line-height: 20px;
    @media screen and (max-width: 1440px) {
        padding-right: unset;
    }
    @media screen and (max-width: 1024px) {
        padding-bottom: 5.438rem;
        padding-right: 6rem;
    }
    @media screen and (max-width: 425px) {
        padding-right: unset;
    }
    @media screen and (max-width: 280px) {
        padding-bottom: 3.438rem;
    }
`;

export const LoginText = styled.p`
    font-size: 1.875rem;
    padding-bottom: 2rem;
`;

export const DivInput = styled.div`
    display: flex;    
    justify-content: space-between;
    align-items: center;
`;
    export const UserDivInput = styled(DivInput)`
        margin-bottom: 2rem;
    `;
    export const PasswordDivInput = styled(DivInput)`
        margin-bottom: 7.188rem;
        @media screen and (max-width: 280px) {
            margin-bottom: 5.188rem;
        }
    `;

export const IconUser = styled(AiOutlineUser)<PropIcon>`    
    position: absolute;
    font-size: 25px;
    transition: 0.5s;

    ${({focusUser}) => focusUser ? 'right: 20px' : 'right: -40px'}
    /* @media screen and (max-width: 280px) {
        right: 20px
    } */
`;
export const IconPassword = styled(AiOutlineLock)<PropIcon>`    
    position: absolute;
    font-size: 25px;
    transition: 0.5s;

    ${({focusPassword}) => focusPassword ? 'right: 20px' : 'right: -40px'}
    /* @media screen and (max-width: 280px) {
        ${({focusPassword}) => focusPassword ? 'right: 10px' : 'right: 10px'}
    } */
`;

export const Input = styled.input<PropBorder>`
    
    border: 1px solid #FFFFFF;
    border-radius: 3.125rem;
    height: 3.75rem; 
    padding: 0 0.938rem;
    background-color: transparent;
    outline: none;
    font-size: 1.3rem;
    color: #E0E0E0;
    width: 100%;
    padding-right: 15%;
    
    ${({border}) => border && 'border: 1px solid #E9B425'}; 
    
    font-family: 'Mark Pro';
    &::placeholder {
        color: #E0E0E0;
        font-size: 1.3rem;
    }
    
    @media screen and (max-width: 1024px) {
        padding-right: 20%;
    }
    @media screen and (max-width: 280px) {
        height: 3.6rem;
    }
`;

//! Como consertar Placeholder 
// export const InputPassword = styled(Input)`
//     font-size: 2rem;
// `;

export const ContinueButton = styled.button`
    width: 100%;
    height: 4.188rem;   
    color: #FFFFFF;
    font-size: 1.125rem;
    font-family: 'Mark Pro';
    cursor: pointer;

    border-radius: 50px;
    background: linear-gradient(90deg, #FF2D04 0%, #C13216 100%);    
    filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.5));
    border: none;

    @media screen and (max-width: 280px) {
    width: 115%;
    }
`;

//! Right Side

export const SectionRight = styled(SectionLeft)`
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    padding-top: 2%;
    @media screen and (max-width: 1024px) {
        display: none;
    }
`;

export const ImgRight = styled.img`
    max-width: 309px;
    max-height: 69px;
`;

//! Global Style

export const GlobalStyle = createGlobalStyle`
    @media screen and (max-width: 425px) {
        :root{
            font-size: 15px;
            transition: 1s;
        }
    }
    @media screen and (max-width: 280px) {
        :root{
            font-size: 14px;
            transition: 1s;
        }
    }
`;