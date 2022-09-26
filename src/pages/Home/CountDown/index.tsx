import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { Counter as CounterStyle } from "./styles"

type prop = {
    maxCounter: number
}

export default function CountDown({maxCounter}: prop) {

    const [counter, setCounter] = useState(maxCounter);
    const navigate = useNavigate();

    useEffect(() => {
        counter > 0 ? setTimeout(() => setCounter(counter - 1), 1000) : navigate('/');
        console.log(counter);
        
    },[counter])

    return (
        <CounterStyle>
            {counter}
        </CounterStyle>
    )
}