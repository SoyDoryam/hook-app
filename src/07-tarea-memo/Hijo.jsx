import React from "react";

export const Hijo = React.memo(({ numero, incrementar }) => {
    
    // Esta línea imprimirá un mensaje en la consola cada vez que el componente se renderice.
    console.log('Me volvi a generar :(');

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={() => incrementar(numero)}
        >
            {/* El número pasado como prop se muestra en el botón */}
            {numero}
        </button>
    );
});
