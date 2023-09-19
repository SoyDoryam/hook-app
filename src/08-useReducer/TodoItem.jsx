export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li key={todo.id} className="list-group-item d-flex justify-content-between">
      <span 
        // Aquí se utiliza una plantilla de cadena de texto para definir la clase del elemento <span>.
        // La clase "align-self-center" se aplica siempre, y la clase "text-decoration-line-through" se aplica si la tarea está marcada como completada (done es true).
        className={`align-self-center ${todo.done && 'text-decoration-line-through'}`}
        // Se agrega un evento onClick al <span> para manejar el clic en la tarea y llamar a la función onToggleTodo con el ID de la tarea.
        onClick={() => onToggleTodo( todo.id )}
      >
        {todo.description}
      </span>
      <button 
        className="btn btn-danger"
        // Se agrega un evento onClick al botón para manejar la eliminación de la tarea y llamar a la función onDeleteTodo con el ID de la tarea.
        onClick={() => onDeleteTodo( todo.id ) }
      >Borrar</button>
    </li>
  );
};
