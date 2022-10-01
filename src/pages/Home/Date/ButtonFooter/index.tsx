import { useNavigate } from "react-router-dom";
import { StyleButton } from "./styles";

type PropsButton = {
    dark: boolean;
    nameButton: string
}

export default function ButtonFooter({dark, nameButton}: PropsButton) {
    const navigate = useNavigate();
    return (
        <StyleButton 
            dark={dark}
            // onClick={() => dark ? navigate('/') : window.open('http://google.com', 'Google', 'height=800, width=600')}
            onClick={() => dark ? navigate('/') : open('http://google.com', '_blank')}
        >
            {nameButton}
        </StyleButton>
        
    )
}