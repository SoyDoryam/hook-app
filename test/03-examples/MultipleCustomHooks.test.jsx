// Importación de funciones y componentes necesarios para las pruebas
import { fireEvent, render, renderHook, screen } from '@testing-library/react'; // Importa funciones de React Testing Library
import { MultipleCustomHooks } from '../../src/03-examples'; // Importa el componente que se va a probar
import { useFetch } from '../../src/hooks/useFetch'; // Importa el hook useFetch para simular llamadas a la API
import { useCounter } from '../../src/hooks/useCounter'; // Importa el hook useCounter para simular el contador

// Mock de los hooks para controlar su comportamiento
jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

// Bloque de pruebas: Agrupa varias pruebas relacionadas bajo una descripción
describe('Pruebas en <MultipleCustomHooks />', () => {

    // Mock de la función de incrementar del contador
    const mockIncrement = jest.fn();

    // Configura el mock de useCounter para devolver valores controlados
    useCounter.mockReturnValue({
      counter: 1,
      increment: mockIncrement,
    });

    // Antes de cada prueba, se limpian todos los mocks
    beforeEach( () => {
        jest.clearAllMocks()
    } );

    // Prueba individual: Comprueba el comportamiento inicial del componente
    test('debe de mostrar el componente por defecto', () => { 
        // Mock del hook useFetch para simular la respuesta de la API
        useFetch.mockReturnValue({ 
            data: null,
            isLoading: true,
            hasError: null,
         });

        // Renderiza el componente MultipleCustomHooks
        render(<MultipleCustomHooks />);

        // Expectativas (assertions):
        // 1. Verifica que el componente contenga el texto 'Loading...'
        expect(screen.getByText('Loading...'));

        // 2. Verifica que el componente contenga el texto 'BreakingBad Quotes'
        expect(screen.getByText('BreakingBad Quotes'));

        // 3. Busca un botón con el atributo 'role' igual a 'button' y nombre 'Next quote'
        //    Luego, verifica que el botón esté deshabilitado (propiedad 'disabled' establecida en true)
        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        expect(nextButton.disabled).toBe(true);
    });

    // Prueba: Comprueba que el componente muestra un Quote correctamente
    test('debe de mostrar un Quote', () => {
        // Mock del hook useFetch para simular la respuesta de la API
        useFetch.mockReturnValue({
            data: [{ author: 'Fernando', quote: 'Hola Mundo' }],
            isLoading: false,
            hasError: null,
        });

        // Renderiza el componente MultipleCustomHooks
        render( <MultipleCustomHooks /> );
        
        // Expectativas (assertions):
        // Verifica que el componente muestre el autor y la cita correctamente
        expect( screen.getByText('Hola Mundo') ).toBeTruthy();
        expect( screen.getByText('Fernando') ).toBeTruthy(); 

        // Verifica que el botón 'Next quote' no esté deshabilitado
        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        expect(nextButton.disabled).toBeFalsy();
    });

    // Prueba: Comprueba que se llama la función de incrementar al hacer clic en el botón
    test('debe de llamar la función de incrementar', () => {
        // Mock del hook useFetch para simular la respuesta de la API
        useFetch.mockReturnValue({
            data: [{ author: 'Dorian', quote: 'Hola Mundo'}],
            isLoading: false,
            hasError: null,
        });

        // Renderiza el componente MultipleCustomHooks
        render( <MultipleCustomHooks /> );
        
        // Simula un clic en el botón 'Next quote'
        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        fireEvent.click( nextButton );

        // Verifica que la función de incrementar del contador haya sido llamada
        expect( mockIncrement ).toHaveBeenCalled();
    });
});
