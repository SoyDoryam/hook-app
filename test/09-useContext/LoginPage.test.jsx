import { fireEvent, render, screen } from "@testing-library/react"
import { useContext } from "react";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe('Pruebas en <LoginPage />', () => {
    const user = {
        id: 1,
        name: 'Juan',
        email: 'Juan@goggle.com'
    }

    const setUserMock = jest.fn();

    test('debe de mostrar el componente sin el usuario', () => {
        render(
            <useContext.Provider value={{ user: null }}>
                <LoginPage />
            </useContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        // Verifica que el elemento pre (representando al usuario) muestra 'null'
        expect(preTag.innerHTML).toBe('null');
    });

    test('debe de llamar el setUser cuando se hace click en el button', () => {
        render(
            <useContext.Provider value={{ user: null, setUser: setUserMock }}>
                <LoginPage />
            </useContext.Provider>
        );

        const button = screen.getByRole('button');
        // Simula un clic en el botón
        fireEvent.click(button);
        // Verifica que setUserMock se llamó sin argumentos
        expect(setUserMock).toHaveBeenCalledWith();
    });
});
