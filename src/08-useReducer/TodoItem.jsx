// Este es el componente TodoItem que muestra una tarea individual en la lista de tareas pendientes.
export const TodoItem = ({ todo }) => {
    return (
      // Creamos un elemento de lista <li> para representar la tarea y aplicamos estilos de Bootstrap.
      <li key={todo.id} className="list-group-item d-flex justify-content-between">
        {/* Mostramos la descripción de la tarea dentro de un elemento <span>. */}
        <span className="align-self-center">{todo.description}</span>
        {/* Creamos un botón con clase Bootstrap para eliminar la tarea. */}
        <button className="btn btn-danger">Borrar</button>
      </li>
    );
  };
  