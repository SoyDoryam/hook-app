import { act, render, renderHook } from '@testing-library/react';
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

    // Prueba para verificar si el contador se incrementa correctamente
    test('debe de incrementar el contador', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter, increment } = result.current;

        // Simula dos incrementos usando act
        act(() => {
            increment();
            increment(2);
        });

        // Verifica que el contador se haya incrementado a 103
        expect(result.current.counter).toBe(103);
    })

    // Prueba para verificar si el contador se decrementa correctamente
    test('debe de decrementar el contador', () => {
        const { result } = renderHook(() => useCounter(100));
        const { decrement } = result.current;

        // Simula dos decrementos usando act
        act(() => {
            decrement();
            decrement(2);
        });

        // Verifica que el contador se haya decrementado a 97
        expect(result.current.counter).toBe(97);
    })  

    // Prueba para verificar si el contador se resetea correctamente
    test('debe de resetear el contador', () => {
        const { result } = renderHook(() => useCounter(100));
        const { reset, decrement } = result.current;

        // Simula un decremento y luego un reset usando act
        act(() => {
            decrement();
            reset();
        });

        // Verifica que el contador se haya reseteado a 100
        expect(result.current.counter).toBe(100);
    });
});
