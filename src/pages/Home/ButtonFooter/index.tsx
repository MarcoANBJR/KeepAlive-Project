import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../services/firebase";
import { StyleButton } from "./styles";

type PropsButton = {
    dark: boolean;
    nameButton: string
}

export default function ButtonFooter({dark, nameButton}: PropsButton) {
    const navigate = useNavigate();
    
    const logout = () => {
        signOut(auth);
        navigate('/');
    }
    return (
        <StyleButton 
            dark={dark}
            // onClick={() => dark ? navigate('/') : window.open('http://google.com', 'Google', 'height=800, width=600')}
            onClick={() => dark ? logout() : open('http://google.com', '_blank')}
        >
            {nameButton}
        </StyleButton>
        
    )
}