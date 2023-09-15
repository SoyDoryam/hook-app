import { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

// Estado inicial de la lista de tareas.
const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del alma',
        done: false
    },
    {
        id: new Date().getTime() * 3,
        description: 'Recolectar la piedra del infinito',
        done: false
    },
];

export const TodoApp = () => {

    // Usamos el hook useReducer para gestionar el estado de la lista de tareas.
    // Pasamos el reducer (todoReducer) y el estado inicial (initialState) como argumentos.
    const [todos, dispatch] = useReducer(todoReducer, initialState);

    // Función para manejar la creación de nuevas tareas.
    const handleNewTodo = (todo) => {
        // Esta función podría ser usada para agregar nuevas tareas al estado.
        // Por ahora, simplemente muestra la nueva tarea en la consola.
        console.log(todo)
    }

    return (
        <>
            <h1>TodoApp 10, <small>pendientes: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    {/* Renderiza el componente TodoAdd y pasa la función handleNewTodo como prop. */}
                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>
            </div>
        </>
    );
}
