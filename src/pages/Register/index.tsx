import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../Login/Alert";
import { Intro } from "./Intro";
import { ContinueButton, DivBottom, DivLeft, GlobalStyle, IconLogin, IconPassword, IconUser, ImgLeft, ImgRight, Input, LoginText, Main, PasswordDivInput, Rule, Rules, SectionLeft, SectionRight, UserDivInput, Validations } from "./styles";
import logoCompasso from '../../assets/Logo-Compasso-Branco.png'
import { SendLogin } from "./SendLogin";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../../services/firebase";
import * as Regex from "../../common/helper/Regex";

export const Register = () => {

    const [confirmPassword, setConfirmPassword] = useState('');
    const [form, setForm] = useState({
        user: '',
        password: '',
        login: '',
    });
    const [loginValid, setLoginValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);
    const [userValid, setUserValid] = useState(false);

    useEffect(() => {
        Regex.login.test(form.login) ? setLoginValid(true) : setLoginValid(false);
        Regex.user.test(form.user) ? setUserValid(true) : setUserValid(false);
        Regex.password.test(form.password) ? setPasswordValid(true) : setPasswordValid(false);
        form.password == confirmPassword ? setConfirmPasswordValid(true) : setConfirmPasswordValid(false);
    },[form.login, form.password, form.user, confirmPassword])

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    function handleCreate() {
        createUserWithEmailAndPassword(form.login, form.password)
    }


    const [visible, setVisible] = useState(false);
    const [focusUser, setFocusUser] = useState('false');
    const [focusPassword, setFocusPassword] = useState('false');
    const [focusLogin, setFocusLogin] = useState('false');
    const [focusConfirmPassword, setFocusConfirmPassword] = useState('false');
    const navigate = useNavigate();

    function btnContinue() {
        loginValid && userValid && passwordValid && confirmPasswordValid ? setVisible(true) : nextPage();        
    }

    function nextPage() {
        setVisible(false);
        handleCreate();
        navigate('/');
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
                                placeholder="Login"
                                value={form.login}
                                border={visible}
                                onChange={(e) => setForm({
                                    ...form,
                                    login: e.target.value
                                })}
                                onFocus={() => setFocusLogin('true')}
                                onBlur={() => setFocusLogin('false')}
                            />
                            <IconLogin focus={focusLogin}/>
                        </UserDivInput>
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
                        <UserDivInput>
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
                        </UserDivInput>
                        <UserDivInput>
                            <Validations>
                                <Rules>A senha deve conter:</Rules>
                                <Rule test={form.password.length > 7}>Mínimo 6 caracteres</Rule>
                                <Rule test={Regex.number.test(form.password)}>Um número</Rule>
                                <Rule test={Regex.lowercase.test(form.password)}>1 letra minúscula</Rule>
                                <Rule test={Regex.uppercase.test(form.password)}>1 letra maiúscula</Rule>
                                <Rule test={Regex.sCharacter.test(form.password)}>1 carácter especial</Rule>
                            </Validations>
                        </UserDivInput>
                        <PasswordDivInput>
                            <Input 
                                type="password"                                
                                placeholder="Confirmar Senha"
                                value={confirmPassword}
                                border={visible}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                onFocus={() => setFocusConfirmPassword('true')}
                                onBlur={() => setFocusConfirmPassword('false')}
                            />
                            <IconPassword focus={focusConfirmPassword} />
                        </PasswordDivInput>
                        <ContinueButton
                            onClick={() => btnContinue()}
                        >
                            Continuar
                        </ContinueButton>    
                        <SendLogin />
                    </DivBottom>         
                </DivLeft>                
            </SectionLeft>

            <SectionRight>
                <ImgRight src={logoCompasso}/>
            </SectionRight>
        </Main>
    )
}