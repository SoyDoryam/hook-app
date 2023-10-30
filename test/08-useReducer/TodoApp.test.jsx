import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer/TodoApp';
import { useTodos } from '../../src/hooks/useTodos';

// Mockear el módulo useTodos para controlar su comportamiento durante las pruebas
jest.mock('../../src/hooks/useTodos')

describe('Pruebas en <TodoApp />', () => {
    // Configurar el comportamiento simulado de useTodos para las pruebas
    useTodos.mockReturnValue({
        todos: [
            {id: 1, description: 'Todo #1', done: false},
            {id: 2, description: 'Todo #2', done: true},
        ],
        todosCount: 2,
        pendingTodosCount: 1,
        handleNewTodo: jest.fn(),
        handledDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn(),
    });

    test('debe de mostar el componente correctamente', () => {
        // Renderizar el componente TodoApp
        render( <TodoApp /> );

        // Asegurarse de que los elementos esperados estén presentes en el renderizado
        expect( screen.getByText('Todo #1') ).toBeTruthy(); // Verificar que 'Todo #1' esté presente
        expect( screen.getByText('Todo #2') ).toBeTruthy(); // Verificar que 'Todo #2' esté presente
        expect( screen.getByRole('textbox') ).toBeTruthy(); // Verificar que haya un cuadro de texto

        // Puedes habilitar la línea siguiente para mostrar información de depuración si es necesario
        // screen.debug();
    });
});
