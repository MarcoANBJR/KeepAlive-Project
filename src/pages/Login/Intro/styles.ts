import styled from "styled-components";

export const DivTop = styled.div`
    width: 100%;
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