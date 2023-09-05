import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'dorian@google.com',
    });

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    };

    useEffect(() => {
        // console.log('useEffect called! (No dependencias)');
    }, []);

    useEffect(() => {
        // console.log('FormStage change! (Dependencia: formState)');
    }, [ formState ]);

    useEffect(() => {
        // console.log('email change! (Dependencia: email)');
    }, [ email ]);
    
    return (
        <>
            <h1>Simple Form</h1>
            <hr />

            <input 
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={ onInputChange } 
            />

            <input 
                type="email"
                className="form-control mt-2"
                placeholder="rizo@google.com"
                name="email" 
                value={email}
                onChange={ onInputChange }
            />

            {
                username === 'strider2' && <Message />
            }

        </>
    )
}
