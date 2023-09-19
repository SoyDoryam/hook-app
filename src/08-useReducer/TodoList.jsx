import { TodoItem } from "./TodoItem"; // Importa el componente TodoItem

export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
  return (
    <ul className="list-group">
      {/* Mapea cada tarea en la lista de tareas y renderiza un TodoItem para cada una. */}
      {todos.map((todo) => (
        <TodoItem
          key={ todo.id } // Establece una clave única para cada elemento en la lista.
          todo={ todo } // Pasa la tarea actual como prop al componente TodoItem.
          onDeleteTodo={ onDeleteTodo } // Pasa la función onDeleteTodo y el ID de la tarea para manejar la eliminación.
          onToggleTodo={ onToggleTodo } // Pasa la función onToggleTodo y el ID de la tarea para manejar el cambio de estado.
        />
      ))}
    </ul>
  );
};
