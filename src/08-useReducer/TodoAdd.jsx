// Importamos el hook useForm para gestionar el formulario.
import { useForm } from "../hooks/useForm"

// Este es el componente TodoAdd que muestra el formulario para agregar nuevas tareas.
export const TodoAdd = ({ onNewTodo }) => {
    // Usamos el hook useForm para gestionar el estado del formulario.
    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    });

    // Esta función se llama cuando se envía el formulario.
    const onFormSubmit = (event) => {
        event.preventDefault(); // Evita que se recargue la página al enviar el formulario.

        // Verificamos si la descripción de la tarea es válida (más de 1 carácter).
        if (description.length <= 1) return;

        // Creamos un nuevo objeto NewTodo que representa la tarea a agregar.
        const NewTodo = {
            id: new Date().getTime(), // Generamos una ID única basada en la fecha y hora actual.
            description: description, // Asignamos la descripción del formulario.
            done: false, // Inicializamos la tarea como no completada.
        }

        // Llamamos a la función onNewTodo para agregar la nueva tarea.
        onNewTodo(NewTodo);

        // Reseteamos el formulario limpiando la descripción.
        onResetForm();
    }

    return (
        // Creamos el formulario con un campo de entrada de texto y un botón de "Agregar".
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                placeholder="¿Qué hay que hacer?"
                className="form-control"
                name="description"
                value={description}
                onChange={onInputChange} // Maneja cambios en el campo de entrada.
            />

            <button
                type="submit"
                className="btn btn-outline-primary mt-1"
            >
                Agregar
            </button>
        </form>
    )
}
