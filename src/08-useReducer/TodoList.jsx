import { TodoItem } from "./TodoItem"; // Importa el componente TodoItem

export const TodoList = ({ todos = [], onDeleteTodo }) => {
  return (
    <ul className="list-group">
      {/* Mapea cada tarea en la lista de tareas y renderiza un TodoItem para cada una. */}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id} // Establece una clave única para cada elemento en la lista.
          todo={todo} // Pasa la tarea actual como prop al componente TodoItem.
          onDeleteTodo={(id) => onDeleteTodo(id)} // Pasa la función onDeleteTodo y el ID de la tarea para manejar la eliminación.
        />
      ))}
    </ul>
  );
};