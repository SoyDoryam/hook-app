import { TodoItem } from "./TodoItem"; // Importa el componente TodoItem

export const TodoList = ({ todos = [] }) => {
  return (
    <ul className="list-group">
      {
        todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} /> // Renderiza un TodoItem para cada tarea en la lista
        ))
      }
    </ul>
  );
};
