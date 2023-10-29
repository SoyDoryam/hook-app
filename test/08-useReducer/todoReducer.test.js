import { todoReducer } from "../../src/08-useReducer/todoReducer";

// Bloque de pruebas: Agrupa varias pruebas relacionadas bajo una descripción
describe('Pruebas en el todoReducer', () => { 

    // Estado inicial de la lista de tareas
    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false,
    }];

    // Prueba: Comprobar si el reducer devuelve el estado inicial
    test('debe de regresar el estado inicial', () => { 

        // Llama al reducer con el estado inicial y una acción vacía
        const newState = todoReducer( initialState, {} );

        // Expectativas (assertions):
        // Verifica que el nuevo estado sea el mismo que el estado inicial
        expect( newState ).toBe( initialState );

    });

    // Prueba: Comprobar si el reducer agrega una nueva tarea (todo)
    test('debe de agregar un todo', () => { 
        // Define una acción para agregar una nueva tarea
        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Nuevo todo #2',
                done: false,
            }
        };

        // Llama al reducer con el estado inicial y la acción de agregar una nueva tarea
        const newState = todoReducer(initialState, action);

        // Expectativas (assertions):
        // Verifica que la longitud del nuevo estado sea igual a 2 (una tarea inicial más una tarea nueva)
        expect( newState.length ).toBe( 2 );

        // Verifica que el nuevo estado contenga la tarea agregada (payload de la acción)
        expect( newState ).toContain( action.payload );
    });
    
 })
