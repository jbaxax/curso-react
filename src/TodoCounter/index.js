import { TodoContext } from '../TodoContext';
import './TodoCounter.css';
import React from 'react';

function TodoCounter(){

    const {
        completedTodos,
        totalTodos,
    } = React.useContext(TodoContext);

    let message = '';

    if (totalTodos === 0) {
        message = '¡Empieza agregando tareas!';
    } else if (totalTodos === completedTodos) {
        message = '¡Felicidades, has completado todas tus tareas!';
    } else {
        message = `Has completado ${completedTodos} de ${totalTodos} TODOS`;
    }

    return (
        <h1 className='TodoCounter'>{message}</h1>
    );
}

export { TodoCounter };
