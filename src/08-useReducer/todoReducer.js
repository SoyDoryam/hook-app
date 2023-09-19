// Definición del reducer. Recibe el estado inicial y una acción como argumentos.
export const todoReducer = (initialState = [], action) => {
    // Utiliza un switch para manejar diferentes tipos de acciones.
    switch (action.type) {
        case '[TODO] Add Todo':
            // Cuando el tipo de acción es '[TODO] Add Todo', agrega la tarea al estado actual.
            // Utiliza el operador spread (...) para crear un nuevo arreglo que incluye todas las tareas actuales y la nueva tarea del payload.
            return [...initialState, action.payload];
        case '[TODO] Remove Todo':
            // Cuando el tipo de acción es '[TODO] Remove Todo', filtra las tareas del estado actual.
            // Retorna un nuevo arreglo que excluye la tarea con el ID proporcionado en el payload.
            return initialState.filter(todo => todo.id !== action.payload);
        case '[TODO] Toggle Todo':
            // Cuando el tipo de acción es '[TODO] Toggle Todo', cambia el estado de una tarea de completa a incompleta o viceversa.
            // Utiliza el método map() para crear un nuevo arreglo de tareas. Si una tarea tiene el mismo ID que el proporcionado en el payload, se actualiza su estado (done).
            // En caso contrario, se devuelve la tarea sin cambios.
            return initialState.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            });
        default:
            // Si el tipo de acción no coincide con ninguno de los casos anteriores, devuelve el estado actual sin cambios.
            return initialState;
    }
}
