import { useState } from "react";

export const useForm = (initialForm = {}) => {
    // 1. Utilización de useState para gestionar el estado del formulario
    const [formState, setFormState] = useState(initialForm);

    // 2. Definición de la función onInputChange para manejar cambios en los inputs
    const onInputChange = ({target}) => {
        const {name, value} = target;
        // 3. Actualización del estado del formulario al cambiar un input
        setFormState({
            ...formState, // 4. Preservación del estado actual
            [name]: value // 5. Actualización del campo específico
        });
    };

    // 6. Definición de la función onResetForm para restablecer el formulario
    const onResetForm = () => {
        // 7. Restablecimiento del formulario al estado inicial
        setFormState(initialForm);
    };

    // 8. Retorno de los elementos necesarios para gestionar el formulario
    return {
        ...formState, // 9. Retorno de los campos del formulario
        formState, // 10. Retorno del estado del formulario (redundante)
        onInputChange, // 11. Retorno de la función para manejar cambios en los inputs
        onResetForm, // 12. Retorno de la función para restablecer el formulario
    }
}
