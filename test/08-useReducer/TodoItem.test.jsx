const { render, screen, fireEvent } = require("@testing-library/react");
const { TodoItem } = require("../../src/08-useReducer/TodoItem");

describe("Pruebas en <TodoItem />", () => {
  // Definición de una tarea (todo) con propiedades iniciales
  const todo = {
    id: 1,
    describe: "Piedra del Alma", // Nombre de la tarea
    done: false, // Estado inicial de la tarea (pendiente)
  };

  // Creación de funciones simuladas para onDeleteTodo y onToggleTodo
  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  // Antes de cada prueba, limpiar (resetear) todas las funciones simuladas
  beforeEach(() => jest.clearAllMocks());

  // Prueba: Comprobar si el componente TodoItem muestra una tarea pendiente
  test("debe de mostrar el Todo Pendiente de completar", () => {
    // Renderizar el componente TodoItem con la tarea y funciones simuladas
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    // Obtener el elemento <li> que representa el TodoItem
    const liElement = screen.getByRole("listitem");

    // Expectativas (assertions):
    // Verificar que la clase CSS del elemento sea la esperada
    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );

    // Obtener el elemento <span> dentro del TodoItem
    const spanElement = screen.getByLabelText("span");

    // Verificar las clases CSS del elemento <span>
    // Debe contener 'align-self-center' pero no 'text-decoration-line-through'
    expect(spanElement.className).toContain("align-self-center");
    expect(spanElement.className).not.toContain("text-decoration-line-through");

    // Mostrar información de depuración si es necesario
    // screen.debug()
  });

  // Prueba: Comprobar que el componente TodoItem muestra una tarea como completada
test("debe de mostrar Todo completado", () => {
    // Cambiamos el estado 'done' de la tarea a completado
    todo.done = true;
  
    // Renderizamos el componente TodoItem con la tarea y funciones simuladas
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );
  
    // Obtenemos el elemento <span> dentro del TodoItem
    const spanElement = screen.getByLabelText("span");
  
    // Expectativas (assertions):
    // Verificar que la clase CSS del elemento contiene 'text-decoration-line-through'
    expect(spanElement.className).toContain("text-decoration-line-through");
  });
  
  // Prueba: Comprobar que al hacer clic en el span se llama la función ToggleTodo
  test("span debe de llamar el ToggleTodo cuando se hace click", () => {
    // Renderizamos el componente TodoItem con la tarea y funciones simuladas
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );
  
    // Obtenemos el elemento <span> dentro del TodoItem
    const spanElement = screen.getByLabelText("span");
  
    // Simulamos un clic en el span
    fireEvent.click(spanElement);
  
    // Expectativa (assertion):
    // Verificar que la función onToggleTodo ha sido llamada con el ID de la tarea
    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
  });
  
  // Prueba: Comprobar que al hacer clic en el botón se llama la función DeleteTodo
  test("button debe de llamar el deleteTodo", () => {
    // Renderizamos el componente TodoItem con la tarea y funciones simuladas
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );
  
    // Obtenemos el botón dentro del TodoItem
    const deleteButton = screen.getByRole("button");
  
    // Simulamos un clic en el botón
    fireEvent.click(deleteButton);
  
    // Expectativa (assertion):
    // Verificar que la función onDeleteTodo ha sido llamada con el ID de la tarea
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  });
  
});
