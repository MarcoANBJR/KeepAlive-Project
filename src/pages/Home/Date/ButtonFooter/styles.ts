import styled from "styled-components";

type ButtonProps = {
    dark: boolean
}

export const StyleButton = styled.button<ButtonProps>`
    width: 8.188rem;
    height: 100%;
    border: none;

    color: white;
    cursor: pointer;

    ${({dark})=> !dark ? 'background: #FFFFFF' : 'background: transparent'};
    ${({dark})=> !dark ? 'color: #C13216' : 'color: white' };

    &:hover {
        ${({dark})=> dark ? 'background: #FFFFFF' : 'background: transparent'};
        ${({dark})=> dark ? 'color: #C13216' : 'color: white' };
    }
    
    @media screen and (max-width: 768px) {
        width: 10.188rem;
    }
    @media screen and (max-width: 768px) {
        width: 9.5rem;
    }
`;