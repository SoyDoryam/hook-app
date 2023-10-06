import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe('Pruebas en useForm', () => { 
    // Definir un formulario de ejempo para las pruebas
    const initialForm = {
        name: 'Dorian Rizo',
        email: 'dorian@rizo.com'

    };

    // Pruebas para verificar si el hook retorna los valores por defectio 
    test('debe de regresar los valores por defecto', () => { 
        // Renderiza el hook useForm con el formulario inicial
        const { result } = renderHook( () => useForm( initialForm ) );

        // Verifica que el resultado del hook coincida con los valores esperados
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function ),
        });
    });

    // Prueba para verificar si el nomnbre del formulario cambia correctamente
    test('debe de cambiar el nombre del formulario ', () => { 
        const newValue = 'Dorian Rizo';
         const { result  } = renderHook(() => useForm( initialForm ) );
         const { onInputChange } = result.current;

         // Simula el cambio del nombre del formulario 
         act( () => {
            onInputChange({ target: { name: 'name',value: newValue } })
         });

         // Verifica que el nombre haya cambiado correctamente
        expect(result.current.name).toBe( newValue );;
        expect(result.current.formState.name ).toBe( newValue );;
     })
    
     // Prueba para verificar si se realiza el reseteo del formualrio
     test('debe de realizar el reset del formulario', () => { 
        const newValue = 'Dorian Rizo';
         const { result  } = renderHook(() => useForm( initialForm ) );
         const { onInputChange, onResetForm } = result.current;

        // Simula un cambio en el nombre del formulario y luego lo resetea
        act( () => {
            onInputChange({ target: { name: 'name',value: newValue } });
            onResetForm();
        });

        // Verifica que el nombre haya vuelto al valor inicial despues del reset
        expect(result.current.name).toBe( initialForm.name );;
        expect(result.current.formState.name ).toBe( initialForm.name );;
     })
 });