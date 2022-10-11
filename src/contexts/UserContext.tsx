import { createContext, useState } from "react";

type Props = {
    currentUser: string,
    setCurrentUser: (newState: string) => void
}

type ChildrenProps = {
    children: React.ReactNode,
}

export const UserContext = createContext<Props>({} as Props);
UserContext.displayName = 'UserContext';

export const UserProvider = ({children}: ChildrenProps) => {
    const [currentUser, setCurrentUser] = useState('');
    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </UserContext.Provider>
    )
}