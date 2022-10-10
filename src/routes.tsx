import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import Home from './pages/Home';
import Login from './pages/Login';
import { Register } from './pages/Register';

export default function Router() {
    return (
        <BrowserRouter>
            <UserProvider>
                <Routes>
                    <Route path='/' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/home' element={<Home />}/>
                </Routes>
            </UserProvider>
        </BrowserRouter>
    )
}