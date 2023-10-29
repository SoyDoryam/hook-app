import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe('Pruebas en useForm', () => {
    // Definir un formulario de ejemplo para las pruebas
    const initialForm = {
        name: 'Dorian Rizo',
        email: 'dorian@rizo.com'
    }

    // Prueba para verificar si el hook retorna los valores por defecto
    test('debe de regresar los valores por defecto', () => {
        // Renderiza el hook useForm con el formulario inicial
        const { result } = renderHook(() => useForm(initialForm));

        // Verifica que el resultado del hook coincida con los valores esperados
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function),
        });
    });

    // Prueba para verificar si el nombre del formulario cambia correctamente
    test('debe de cambiar el nombre del formulario', () => {
        const newValue = 'Dorian Rizo';
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange } = result.current;

        // Simula un cambio en el nombre del formulario
        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } });
        });

        // Verifica que el nombre haya cambiado correctamente
        expect(result.current.name).toBe(newValue);
        expect(result.current.formState.name).toBe(newValue);
    })

    // Prueba para verificar si se realiza el reseteo del formulario
    test('debe de realizar el reset del formulario', () => {
        const newValue = 'Dorian Rizo';
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange, onResetForm } = result.current;

        // Simula un cambio en el nombre del formulario y luego un reseteo
        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } });
            onResetForm();
        });

        // Verifica que el nombre haya vuelto al valor inicial después del reset
        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name);
    })
});
