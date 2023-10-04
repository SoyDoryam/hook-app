import { renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';

describe('Pruebas en el useCounter', () => {
    // Prueba para verificar si los valores por defecto son los esperados
    test('debe de retornar los valores por defecto', () => {
        // Renderiza el hook useCounter
        const { result } = renderHook(() => useCounter());
        
        // Desestructura las propiedades del resultado
        const { counter, decrement, increment, reset } = result.current;

        // Comprobaciones utilizando expect
        // Verifica que el valor inicial del contador sea 10
        expect(counter).toBe(10);
        
        // Verifica que decrement sea una función
        expect(decrement).toEqual(expect.any(Function));
        
        // Verifica que increment sea una función
        expect(increment).toEqual(expect.any(Function));
        
        // Verifica que reset sea una función
        expect(reset).toEqual(expect.any(Function));
    });

    // Prueba para verificar si el contador se inicializa con el valor correcto (100)
    test('debe de generar el counter con el valor de 100', () => {
        // Renderiza el hook useCounter con un valor inicial de 100
        const { result } = renderHook(() => useCounter(100));

        // Desestructura el resultado para obtener el contador
        const { counter } = result.current;

        // Verifica que el contador se haya inicializado correctamente con el valor 100
        expect(counter).toBe(100);
    });
});
