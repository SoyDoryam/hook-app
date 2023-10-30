const { render, screen } = require("@testing-library/react");
const { TodoItem } = require("../../src/08-useReducer/TodoItem");

describe('Pruebas en <TodoItem />', () => { 
    // Definición de una tarea (todo) con propiedades iniciales
    const todo = {
        id: 1,
        describe: 'Piedra del Alma', // Nombre de la tarea
        done: false, // Estado inicial de la tarea (pendiente)
    }

    // Creación de funciones simuladas para onDeleteTodo y onToggleTodo
    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    // Antes de cada prueba, limpiar (resetear) todas las funciones simuladas
    beforeEach( () => jest.clearAllMocks() );

    // Prueba: Comprobar si el componente TodoItem muestra una tarea pendiente
    test('debe de mostrar el Todo Pendiente de completar', () => {
        // Renderizar el componente TodoItem con la tarea y funciones simuladas
        render( 
            <TodoItem todo={todo} 
                onToggleTodo={ onToggleTodoMock } 
                onDeleteTodo={ onDeleteTodoMock }
            />
        );

        // Obtener el elemento <li> que representa el TodoItem
        const liElement = screen.getByRole('listitem');

        // Expectativas (assertions):
        // Verificar que la clase CSS del elemento sea la esperada
        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between');

        // Obtener el elemento <span> dentro del TodoItem
        const spanElement = screen.getByLabelText('span');

        // Verificar las clases CSS del elemento <span>
        // Debe contener 'align-self-center' pero no 'text-decoration-line-through'
        expect( spanElement.className ).toContain('align-self-center');
        expect( spanElement.className ).not.toContain('text-decoration-line-through');

        // Mostrar información de depuración si es necesario
        // screen.debug()
    });
});
