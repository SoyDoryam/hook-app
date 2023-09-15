// Definición del reducer. Recibe el estado inicial y una acción como argumentos.
export const todoReducer = (initialState = [], action) => {
    
    // Utiliza un switch para manejar diferentes tipos de acciones.
    switch (action.type) {
        case 'ABC':
            // Cuando se recibe una acción de tipo 'ABC', lanzamos un error indicando que esta acción no está implementada.
            throw new Error('Action.type = ABC no está implementada');
    
        default:
            // En caso de cualquier otra acción, simplemente se devuelve el estado inicial sin cambios.
            return initialState;
    }
}
