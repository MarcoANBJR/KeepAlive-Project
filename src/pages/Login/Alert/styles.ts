import styled from "styled-components";

export const Alert = styled.span`
    top: 58%;
    width: 70%;
    left: 15%;
    font-weight: 700;
    font-size: 1rem;
    line-height: 20px;
    text-align: center;
    color: #E9B425;
    position: absolute;
    
    @media screen and (max-width: 375px) {
        width: 100%;
        left: 0%;        
    }   
    @media screen and (max-width: 280px) {
        top: 63%;
        width: 100%;
        left: 7%;        
    }   
`;