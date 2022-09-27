import { useNavigate } from "react-router-dom";
import { StyleButton } from "./styles";

type PropsButton = {
    dark: boolean;
    nameButton: string
}

export default function ButtonHome({dark, nameButton}: PropsButton) {
    const navigate = useNavigate();
    return (
        <StyleButton 
            dark={dark}
            onClick={() => dark ? window.open('http://google.com', 'Google', 'height=800, width=600') : navigate('/')}
        >
            {nameButton}
        </StyleButton>
        
    )
}