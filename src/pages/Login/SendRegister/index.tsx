import { useNavigate } from "react-router-dom";

export const SendRegister = ():any => {    
    const navigate = useNavigate();
    return(
        <>
            <p>Se você não possui cadastro,</p>
            <p onClick={() => navigate('/register')}>clique aqui!</p>
        </>
)}