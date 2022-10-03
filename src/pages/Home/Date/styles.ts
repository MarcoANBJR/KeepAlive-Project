import styled from "styled-components";


export const DivTime = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;  
    text-align: center;  
    @media screen and (max-width: 425px) {
        display: none;
    }
`;

export const Time = styled.p`    
    font-weight: 700;
    font-size: 9rem;
    line-height: 183px;
    margin-bottom: -40px;    

    color: #222222;
    @media screen and (max-width: 767px){
        margin-top: -5rem;        
    }
`;

export const Date = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;

    color: #222222;
`;