// Definición del reducer. Recibe el estado inicial y una acción como argumentos.
export const todoReducer = (initialState = [], action) => {
    // Utiliza un switch para manejar diferentes tipos de acciones.
    switch (action.type) {
        case '[TODO] Add Todo':
            // Cuando el tipo de acción es '[TODO] Add Todo', agrega la tarea al estado actual.
            // Utiliza el operador spread para crear un nuevo arreglo que incluye todas las tareas actuales y la nueva tarea del payload.
            return [...initialState, action.payload];
        case '[TODO] Remove Todo':
            return initialState.filter( todo => todo.id !== action.payload);
        default:
            // Si el tipo de acción no coincide con ninguno de los casos anteriores, devuelve el estado actual sin cambios.
            return initialState;
    }
}
