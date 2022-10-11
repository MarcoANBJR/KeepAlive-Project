import { DivLeft, ImgRight, Main, SectionLeft, SectionRight, LoginText, DivBottom, ContinueButton, UserDivInput, Input, PasswordDivInput, IconUser, IconPassword, ImgLeft, GlobalStyle } from "./styles";
import logoCompasso from '../../assets/Logo-Compasso-Branco.png'
import { useContext, useEffect, useState } from "react";
import Alert from "./Alert";
import { useNavigate } from "react-router-dom";
import { Intro } from "./Intro";
import { SendRegister } from "./SendRegister";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../../services/firebase";
import { UserContext } from "../../contexts/UserContext";


export default function Login() {

    const { setCurrentUser } = useContext<any>(UserContext);
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

    const [visible, setVisible] = useState(false);
    const [focusUser, setFocusUser] = useState('false');
    const [focusPassword, setFocusPassword] = useState('false');
    const navigate = useNavigate();

    useEffect(() => {
        auth.currentUser && navigate('/home');
    }, [])

    async function btnContinue() {        
        await signInWithEmailAndPassword(form.user, form.password)
        const validUser = auth.currentUser?.displayName;        
        console.log(validUser);
        setCurrentUser(validUser);
        auth.currentUser ? nextPage() : setVisible(true); 
    }    

    function nextPage() {
        setVisible(false);
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