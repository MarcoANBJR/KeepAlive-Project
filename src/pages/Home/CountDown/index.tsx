import { signOut } from "firebase/auth";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { auth } from "../../../services/firebase";
import { Counter as CounterStyle } from "./styles"

type prop = {
    maxCounter: number
}

export default function CountDown({maxCounter}: prop) {

    const [counter, setCounter] = useState(maxCounter);
    const navigate = useNavigate();

    const logout = () => {
        signOut(auth);
        navigate('/');
    }

    useEffect(() => {
        counter > 0 ? setTimeout(() => setCounter(counter - 1), 1000) : logout();
        // console.log(counter);
        
    },[counter])

    return (
        <CounterStyle>
            {counter}
        </CounterStyle>
    )
}