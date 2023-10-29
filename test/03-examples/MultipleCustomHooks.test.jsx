// Importación de funciones y componentes necesarios para las pruebas
import { fireEvent, render, renderHook, screen } from '@testing-library/react'; // Importa funciones de React Testing Library
import { MultipleCustomHooks } from '../../src/03-examples'; // Importa el componente que se va a probar
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';


jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

// Bloque de pruebas: Agrupa varias pruebas relacionadas bajo una descripción
describe('Pruebas en <MultipleCustomHooks />', () => {

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
      counter: 1,
      increment: mockIncrement,
    });

    beforeEach( () => {
        jest.clearAllMocks()
    } );

    // Prueba individual: Comprueba el comportamiento inicial del componente
    test('debe de mostrar el componente por defecto', () => { 

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

    test('debe de mostrar un Quote', () => {
        useFetch.mockReturnValue({
            data: [{ author: 'Fernando', quote: 'Hola Mundo' }],
            isLoading: false,
            hasError: null,
        });

        render( <MultipleCustomHooks /> );
        expect( screen.getByText('Hola Mundo') ).toBeTruthy();
        expect( screen.getByText('Fernando') ).toBeTruthy(); 

        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        expect(nextButton.disabled).toBeFalsy();
    })

    test('debe de llamar la fucion de incrementar', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Dorian', quote: 'Hola Mundo'}],
            isLoading: false,
            hasError: null,
        });

        render( <MultipleCustomHooks /> );
        
        const nextButton = screen. getByRole('button', {name: 'Next quote'});
        fireEvent.click( nextButton );

        expect( mockIncrement ).toHaveBeenCalled();
    });
});
