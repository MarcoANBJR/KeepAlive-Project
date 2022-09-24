import { DivLeft, LoginTitle, Img, Main, LoginInfo, SectionLeft, SectionRight, LoginText, DivTop, DivBottom, ContinueButton, UserDivInput, Input, PasswordDivInput } from "./styles";
import logoCompasso from '../../assets/Logo-Compasso-Branco.png'
import { AiOutlineLock, AiOutlineUser } from "react-icons/ai";
// import { useHistory } from 'react-router-dom'

export default function Login() {
    // const history = useHistory();
    return (
        <Main>
            <SectionLeft>
                <DivLeft>
                    <DivTop>
                        <LoginTitle>Olá,</LoginTitle>
                        <LoginInfo>Para continuar navegando de forma segura, efetue o login na rede.</LoginInfo>
                    </DivTop>
                    <DivBottom>
                        <LoginText>Login</LoginText>
                        <UserDivInput>
                            <Input type="text" /> 
                            <AiOutlineUser />
                        </UserDivInput>
                        <PasswordDivInput>
                            <Input type="password"/> 
                            <AiOutlineLock />
                        </PasswordDivInput>
                        <ContinueButton>Continuar</ContinueButton>       
                    </DivBottom>         
                </DivLeft>
                
            </SectionLeft>

            <SectionRight>
                <Img src={logoCompasso}/>
            </SectionRight>
        </Main>
    )
}