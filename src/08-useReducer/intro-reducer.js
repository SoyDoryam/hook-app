// Definimos un estado inicial con una tarea por hacer
const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false,
}];

// Definimos un reducer llamado todoReducer que recibe el estado actual y una acción
const todoReducer = (state = initialState, action = {}) => {
    // Verificamos si el tipo de acción es '[TODOS] add todo'
    if (action.type === '[TODOS] add todo') {
        // Si es una acción de agregar todo, creamos un nuevo estado con la nueva tarea
        return [...state, action.payload];
    }
    // Si no es una acción de agregar todo, devolvemos el estado sin cambios
    return state;
}

// Inicializamos una variable 'todos' utilizando el reducer (sin proporcionar estado inicial)
let todos = todoReducer();

// Creamos una nueva tarea por hacer
const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del poder',
    done: false,
}

// Creamos una acción de tipo '[TODOS] add todo' con el nuevo todo como payload
const addTodoAction = {
    type: '[TODOS] add todo',
    payload: newTodo,
}

// Llamamos al reducer para agregar la nueva tarea al estado actual
todos = todoReducer(todos, addTodoAction);

// Imprimimos el estado actualizado en la consola
console.log({ state: todos });
