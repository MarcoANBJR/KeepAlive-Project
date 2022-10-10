import { useNavigate } from "react-router-dom";
import { Click, DivSend, Text } from "./styles";

export const SendLogin = ():any => {    
    const navigate = useNavigate();
    return(
        <DivSend>
            <Text>Se você já possui cadastro,</Text>
            <Click onClick={() => navigate('/')}> clique aqui!</Click>
        </DivSend>
)}