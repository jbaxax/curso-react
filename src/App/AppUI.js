import React from 'react';
import { TodoForm } from '../TodoForm';
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';
import { TodosLoading } from '../TodosLoading';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { Modal1 } from '../Modal1';
import { TodoDiv } from '../TodoDiv';
import { TodosCrea } from '../TodosCrea';
import { TodoAlert } from '../TodoAlert';

function AppUI() {
    const {
        searchedTodos,
        completeTodo,
        loading,
        error,
        openModal, 
        handleDelete,
      openDeleteModal,
      openModal1
    } = React.useContext(TodoContext);

    

   

    return (
        <>
            <TodoSearch />
            <TodoCounter />
            <TodoForm />
            <TodoList>
                {loading && <TodosLoading />}
                {error && <p>Desesperate</p>}
                {!loading && searchedTodos.length === 0 && <TodosCrea />}

                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        note={todo.note}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        setOpenModal={() => openDeleteModal(todo)} // Abre el modal al hacer clic en el ícono de eliminar
                    />
                ))}

                {openModal && (
                    <Modal>
                        <TodoDiv onDelete={handleDelete} />
                    </Modal>
                )}

                {openModal1 && (
                    <Modal1>
                        <TodoAlert />
                    </Modal1>
                )}
            </TodoList>
        </>
    );
}

export { AppUI };
