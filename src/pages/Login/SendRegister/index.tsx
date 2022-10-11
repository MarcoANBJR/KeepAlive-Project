import { useNavigate } from "react-router-dom";
import { DivSend, Click, Text } from "./styles";

export const SendRegister = ():any => {    
    const navigate = useNavigate();
    return(
        <DivSend>
            <Text>Se você não possui cadastro,</Text>
            <Click onClick={() => navigate('/register')}>clique aqui!</Click>
        </DivSend>
    )
}