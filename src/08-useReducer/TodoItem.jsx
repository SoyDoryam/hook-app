export const TodoItem = ({ todo, onDeleteTodo }) => {
  return (
    // Representa un elemento de lista <li> que muestra una tarea individual.
    <li key={todo.id} className="list-group-item d-flex justify-content-between">
      {/* Muestra la descripción de la tarea dentro de un elemento <span>. */}
      <span className="align-self-center">{todo.description}</span>
      {/* Crea un botón con estilo de Bootstrap para eliminar la tarea. */}
      <button 
        className="btn btn-danger"
        // Cuando se hace clic en el botón, se llama a la función onDeleteTodo con el ID de la tarea como argumento.
        onClick={() => onDeleteTodo( todo.id ) }
      >Borrar</button>
    </li>
  );
};
