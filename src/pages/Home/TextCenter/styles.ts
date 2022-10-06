import styled from "styled-components";

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


export const TextPt = styled.p`    
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 1.875rem;
    text-align: right;
    color: #222222;
    @media screen and (max-width: 425px) {
        padding-bottom: 4%;
        padding-left: 10%;
    }
    @media screen and (max-width: 375px) {
        line-height: 2.3rem;
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
        line-height: 5.063rem;
    }
    @media screen and (max-width: 375px) {
        font-size: 3rem;     
        line-height: 3.3rem;
    }
`;

export const FirstTextIng = styled(TextIng)`
    font-size: 2.25rem;
    line-height: 2.875rem;
    @media screen and (max-width: 425px) {
        font-size: 2.5rem;
    }
`;