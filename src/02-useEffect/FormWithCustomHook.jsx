import { useEffect } from "react";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
    // Utiliza el custom hook useForm para gestionar el estado del formulario
    const { formState, onInputChange, username, email, password } = useForm({
        username: "",
        email: "",
        password: "",
    });

    // Desestructura las propiedades necesarias del objeto retornado por useForm

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
                onChange={onInputChange}
            />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="rizo@google.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            <input
                type="password"
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={onInputChange}
            />
        </>
    );
};
