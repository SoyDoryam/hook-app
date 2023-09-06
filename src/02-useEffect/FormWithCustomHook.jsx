import { useEffect } from "react"
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
    // 1. Utilización del custom hook useForm para gestionar el formulario
    const { formState, onInputChange, onResetForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: '',
    });    

    return (
        <>
            <h1>Simple Form</h1>
            <hr />

            <input 
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                // 2. Manejo de cambios en el input con la función onInputChange
                onChange={ onInputChange } 
            />

            <input 
                type="email"
                className="form-control mt-2"
                placeholder="rizo@google.com"
                name="email" 
                value={ email }
                onChange={ onInputChange }
            />

            <input 
                type="password"
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password" 
                value={ password }
                onChange={ onInputChange }
            />

            <button
                // 3. Manejo del clic en el botón para restablecer el formulario
                onClick={ onResetForm } 
                className="btn btn-primary mt-2"
            >Borrar</button>
        </>
    )
}
