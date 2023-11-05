const { render, screen } = require("@testing-library/react");
const { UserContext } = require("../../src/09-useContext/context/UserContext");
const { HomePage } = require("../../src/09-useContext/HomePage");

describe('Pruebas en <HomePage />', () => {

    // Definición de un usuario ficticio para las pruebas
    const user = {
        id: 1,
        name: 'Dorian'
    }

    // Primera prueba: debe de mostrar el componente sin el usuario
    test('debe de mostrar el componente sin el usuario', () => {
        // Renderiza el componente HomePage dentro de UserContext con un usuario nulo
        render( 
            <UserContext.Provider value={{ user: null }}>
                <HomePage /> 
            </UserContext.Provider>
        );

        // Busca un elemento con la etiqueta 'pre' y obtiene su contenido
        const preTag = screen.getByLabelText('pre');

        // Verifica que el contenido del elemento 'pre' sea exactamente igual a 'null'
        expect(preTag.innerHTML).toBe('null');
    });

    // Segunda prueba: debe de mostrar el componente con el usuario
    test('debe de mostrar el componente con el usuario', () => {
        // Renderiza el componente HomePage dentro de UserContext con el usuario ficticio definido anteriormente
        render(
            <UserContext.Provider value={{ user }}>
                <HomePage />
            </UserContext.Provider>
        );

        // Busca un elemento con la etiqueta 'pre'
        const preTag = screen.getByLabelText('pre');

        // Verifica que el contenido del elemento 'pre' contenga el nombre del usuario
        expect(preTag.innerHTML).toContain(user.name);

        // Verifica que el contenido del elemento 'pre' contenga el ID del usuario como una cadena
        expect(preTag.innerHTML).toContain(`${user.id}`);
    })
});
