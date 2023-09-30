import { UserContext } from "./UserContext"

const user = {
    id: 123,
    name: 'Fernando Herrera',
    email: 'fernando@google.com'
};

export const UserProvider = ({ children }) => {
    return (
        <UserContext.Provider value={{hola: 'Mundo', user}}>
            { children }
        </UserContext.Provider>   
    )
}
