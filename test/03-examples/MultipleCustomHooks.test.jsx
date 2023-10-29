import { render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples';

describe('Pruebas en <MultipleCustomHooks />', () => { 
    test('debe de mostra el componente por defecto', () => { 
         render(<MultipleCustomHooks />);
         expect( screen.getByText('Loading...') );
         expect( screen.getByText('BreakingBad Quotes') );
         
        const nextButton = screen.getByRole('button', { name: 'Next quote'});
        expect(nextButton.disabled).toBe(true);

    });
 });