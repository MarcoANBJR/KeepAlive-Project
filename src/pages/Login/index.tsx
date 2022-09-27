import { DivLeft, LoginTitle, Img, Main, LoginInfo, SectionLeft, SectionRight, LoginText, DivTop, DivBottom, ContinueButton, UserDivInput, Input, PasswordDivInput, Space } from "./styles";
import logoCompasso from '../../assets/Logo-Compasso-Branco.png'
import { AiOutlineLock, AiOutlineUser } from "react-icons/ai";
import { useState } from "react";
import Alert from "./Alert";
import { useNavigate } from "react-router-dom";

//! YUP

const OutIconUser = () => (                
    <Space>
        <AiOutlineUser size={25}/>
    </Space>
)

const OutIconPassword = () => (            
    <Space>
        <AiOutlineLock size={25}/>
    </Space>
)

export default function Login() {
    const [form, setForm] = useState({
        user: '',
        password: '',
    });

    const [visible, setVisible] = useState(false);
    const [focus, setFocus] = useState(false);
    const navigate = useNavigate();

    function btnContinue() {
        form.user == '' || form.password.length < 3 ? setVisible(true) : nextPage();        
    }

    function nextPage() {
        setVisible(false);
        navigate('/home');
    }   

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
                            <Input
                                type="text"
                                placeholder="Usuário"
                                value={form.user}
                                border={visible}
                                onChange={(e) => setForm({
                                    ...form,
                                    user: e.target.value
                                })}
                                onFocus={() => setFocus(true)}
                                onBlur={() => setFocus(false)}
                            />
                            {!focus ? OutIconUser() : <AiOutlineUser size={25}/>}
                        </UserDivInput>
                        <PasswordDivInput>
                            <Input 
                                type="password"                                
                                placeholder="Senha"
                                value={form.password}
                                border={visible}
                                onChange={(e) => setForm({
                                    ...form,
                                    password: e.target.value
                                })}
                                onFocus={() => setFocus(true)}
                                onBlur={() => setFocus(false)}
                            />                            
                            {!focus ? OutIconPassword() : <AiOutlineLock size={25}/>}
                        </PasswordDivInput>
                        {visible && 
                            <Alert>
                                Ops, usuário ou senha inválidos. Tente novamente!
                            </Alert>
                        }
                        <ContinueButton
                            onClick={() => btnContinue()}
                        >
                            Continuar
                        </ContinueButton>       
                    </DivBottom>         
                </DivLeft>                
            </SectionLeft>

            <SectionRight>
                <Img src={logoCompasso}/>
            </SectionRight>
        </Main>
    )
}
