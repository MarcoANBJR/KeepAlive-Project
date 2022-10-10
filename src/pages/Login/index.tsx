import { DivLeft, ImgRight, Main, SectionLeft, SectionRight, LoginText, DivBottom, ContinueButton, UserDivInput, Input, PasswordDivInput, IconUser, IconPassword, ImgLeft, GlobalStyle } from "./styles";
import logoCompasso from '../../assets/Logo-Compasso-Branco.png'
import { useState } from "react";
import Alert from "./Alert";
import { useNavigate } from "react-router-dom";
import { Intro } from "./Intro";
import { SendRegister } from "./SendRegister";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../../services/firebase";


export default function Login() {
    const [form, setForm] = useState({
        user: '',
        password: '',
        login: '',
    });
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    function handleCreate() {
        signInWithEmailAndPassword(form.user, form.password)
    }

    if(user) console.log(user);
    if(error) console.log(error);
    

    const [visible, setVisible] = useState(false);
    const [focusUser, setFocusUser] = useState('false');
    const [focusPassword, setFocusPassword] = useState('false');
    const navigate = useNavigate();

    function btnContinue() {
        form.user == '' || form.password.length < 3 ? setVisible(true) : nextPage();        
    }

    function nextPage() {
        setVisible(false);
        handleCreate();
        navigate('/home');
    }   

    return (
        <Main>
            <GlobalStyle />
            <SectionLeft>
                <DivLeft>                    
                    <ImgLeft src={logoCompasso}/>
                    <Intro />
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
                                onFocus={() => setFocusUser('true')}
                                onBlur={() => setFocusUser('false')}
                            />
                            <IconUser focus={focusUser}/>
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
                                onFocus={() => setFocusPassword('true')}
                                onBlur={() => setFocusPassword('false')}
                            />
                            <IconPassword focus={focusPassword} />
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
                        <SendRegister />
                    </DivBottom>         
                </DivLeft>                
            </SectionLeft>

            <SectionRight>
                <ImgRight src={logoCompasso}/>
            </SectionRight>
        </Main>
    )
}