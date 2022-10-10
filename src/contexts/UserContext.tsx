import { createContext, useState } from "react";

type Props = {
    currentUser: any,
    setCurrentUser: any
}

type ChildrenProps = {
    children: React.ReactNode,
}


export const UserContext = createContext<Props>({} as Props);
UserContext.displayName = 'UserContext';

export const UserProvider = ({children}: ChildrenProps) => {
    const [currentUser, setCurrentUser] = useState(0);
    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </UserContext.Provider>
    )
}