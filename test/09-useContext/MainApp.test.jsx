import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MainApp } from "../../src/09-useContext/MainApp";
import { HomePage } from "../../src/09-useContext/HomePage";

describe('Pruebas en <MainApp />', () => {
    test('debe de mostrar el <HomePage />', () => {
        // Renderiza MainApp dentro de MemoryRouter para simular el enrutamiento.
        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter> 
        );

        // Verifica que el texto 'HomePage' esté presente en la pantalla.
        const homePage = screen.getByText('HomePage');
        // Esto indica que MainApp ha mostrado correctamente HomePage.
        expect( homePage ).toBeTruthy();
    }); 

    test('debe de mostrar el <LoginPage />', () => {
        // Renderiza MainApp dentro de MemoryRouter con una ruta inicial '/login'.
        // Esto simula que estamos en la ruta de inicio de sesión.
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        );

        // Verifica que el texto 'LoginPage' esté presente en la pantalla.
        const loginPage = screen.getByText('LoginPage');
        // Esto indica que MainApp ha mostrado correctamente LoginPage al estar en la ruta '/login'.
        expect( screen.getByText('LoginPage') ).toBeTruthy();
    });
});
