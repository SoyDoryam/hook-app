import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

// Estado inicial de la lista de tareas.
const initialState = [
  // {
  //     id: new Date().getTime(),
  //     description: 'Recolectar la piedra del alma',
  //     done: false
  // },
];

// Función de inicialización para obtener las tareas desde el "LocalStorage".
const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || []; // Si no hay datos, retorna un arreglo vacío.
};

export const TodoApp = () => {
  // Utiliza el hook useReducer para gestionar el estado de la lista de tareas.
  // Se pasa la función init como tercer argumento para inicializar el estado desde el "LocalStorage".
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  // Efecto secundario para guardar los cambios en el "LocalStorage" cuando los datos de las tareas cambian.
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Función para manejar la adición de una nueva tarea.
  const handleNewTodo = (todo) => {
    // Crea una acción con un tipo que representa la adición de una tarea y el payload con la tarea a agregar.
    const action = {
      type: '[TODO] Add Todo',
      payload: todo,
    };

    // Llama a la función `dispatch` para enviar la acción al reducer.
    dispatch(action);
  };

  const handledDeleteTodo = (id) => {
    // Crea una acción con un tipo que representa la eliminación de una tarea y el payload con el ID de la tarea a eliminar.
    const action = {
      type: '[TODO] Remove Todo',
      payload: id,
    };

    // Llama a la función `dispatch` para enviar la acción al reducer.
    dispatch(action);
  };

  const handleToggleTodo = (id) => {
    // Crea una acción con un tipo que representa el cambio de estado de una tarea y el payload con el ID de la tarea a modificar.
    const action = {
      type: '[TODO] Toggle Todo',
      payload: id,
    }

    // Llama a la función `dispatch` para enviar la acción al reducer.
    dispatch(action)
  }

  return (
    <>
      <h1>
        TodoApp 10, <small>pendientes: 2</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          {/* Renderiza el componente TodoList y pasa la lista de tareas como prop, junto con la función para eliminar tareas y la función para cambiar el estado de las tareas. */}
          <TodoList todos={todos} onDeleteTodo={handledDeleteTodo} onToggleTodo={handleToggleTodo} />
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          {/* Renderiza el componente TodoAdd y pasa la función handleNewTodo como prop para agregar nuevas tareas. */}
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
