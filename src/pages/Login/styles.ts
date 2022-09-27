import styled from 'styled-components';
import background from '../../assets/notebook-login.jpg'

type PropBorder = {
    border: boolean | any
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
    padding-left: 30%;
    padding-right: 20%;
    @media screen and (max-width: 1024px) {
        padding: 0 15%;
        align-items: center;
    }
`;

export const DivTop = styled.div`
    max-width: 301px;
`;

//! Bottom

export const DivBottom = styled.div`
    max-width: 379px;
    position: relative;
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
    display: flex;    
    justify-content: space-between;
    align-items: center;
`;
    export const UserDivInput = styled(DivInput)`
        margin-bottom: 2rem;
    `;
    export const PasswordDivInput = styled(DivInput)`
        margin-bottom: 7.188rem;
    `;

export const Space = styled.div`
    position: absolute;
    right: -40px;
    transition: 0.5s;
`;
export const NoSpace = styled.div`
    position: absolute;
    right: 20px;
    transition: 1s;
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
`;

//! Como consertar Placeholder 
// export const InputPassword = styled(Input)`
//     font-size: 2rem;
// `;

export const ContinueButton = styled.button`
    width: 100%;
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
    @media screen and (max-width: 1024px) {
        display: none;
    }
`;

export const Img = styled.img`
    max-width: 309px;
    max-height: 69px;
`;