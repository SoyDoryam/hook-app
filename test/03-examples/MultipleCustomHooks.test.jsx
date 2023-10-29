// Importación de funciones y componentes necesarios para las pruebas
import { render, screen } from '@testing-library/react'; // Importa funciones de React Testing Library
import { MultipleCustomHooks } from '../../src/03-examples'; // Importa el componente que se va a probar

// Bloque de pruebas: Agrupa varias pruebas relacionadas bajo una descripción
describe('Pruebas en <MultipleCustomHooks />', () => {

    // Prueba individual: Comprueba el comportamiento inicial del componente
    test('debe de mostrar el componente por defecto', () => { 
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
});
