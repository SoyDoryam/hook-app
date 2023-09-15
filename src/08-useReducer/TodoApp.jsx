import { useReducer } from "react";
import { todoReducer } from "./todoReducer";

// Estado inicial de la lista de tareas.
const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del alma',
        done: false
    },
    {
        id: new Date().getTime() * 3,
        description: 'Recolectar la piedra del alma',
        done: false
    },
];

export const TodoApp = () => {

    // Usamos el hook useReducer para gestionar el estado de la lista de tareas.
    // Pasamos el reducer (todoReducer) y el estado inicial (initialState) como argumentos.
    const [state, dispatch] = useReducer(todoReducer, initialState);


    return (
        <>
            <h1>TodoApp 10, <small>pendientes: 2</small></h1>
            <hr />

        <div className="row">
            <div className="col-7">
                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="align-self-center">Item 1</span>
                        <button className="btn btn-danger">Borrar</button>
                    </li>
                </ul>
            </div>

            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />
                <form >
                    <input 
                        type="text" 
                        placeholder="¿Que hay que hacer?"
                        className="form-control"
                    />
                </form>

                <button
                    type="submit"
                    className="btn btn-outline-primary mt-1"
                >
                    Agregar
                </button>
            </div>
        </div>
        </>
    );
}
