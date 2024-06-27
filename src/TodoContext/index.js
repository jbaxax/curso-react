import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = React.useState('');

  const [openModal, setOpenModal] = React.useState(false);

  const [openModal1, setOpenModal1] = React.useState(false);

  const [todoToDelete, setTodoToDelete] = React.useState(null);

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  /* const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText)
  }) */

  const searchedTodos = todos.filter((todo) => {
    const todoText = typeof todo.text === 'string' ? todo.text.toLowerCase() : '';
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const handleDelete = () => {
    if (todoToDelete) {
        deleteTodo(todoToDelete.text);
        setOpenModal(false);
    }
};

const openDeleteModal = (todo) => {
    setTodoToDelete(todo);
    setOpenModal(true);
};



const closeTheModal1 = () => {
  setOpenModal1(false);
};
  //ACTUALIZA LOCAL STORAGE Y EL ARRAY TODOS


  /*  const addTodo = (text,note) => {
     const newTodos = [...todos];
     newTodos.push({
         text,
         note,
         completed: false,
     });
     saveTodos(newTodos);
 }; */

  const addTodo = (text, note) => {
    

    if (todos.some(todo => todo.text === text)) {
      setOpenModal1(true);
      return;
    }

    
    const newTodos = [...todos];
    newTodos.push({
      text: String(text), // Asegura que text siempre sea una cadena
      note,
      completed: false,
    });
    saveTodos(newTodos);
  };
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  }

  const onCancel = () => {
    setOpenModal(false)
}
  

const deleteTodo = (text) => {
  const newTodos = [...todos];
  const todoIndex = newTodos.findIndex((todo) => todo.text === text);
  newTodos.splice(todoIndex, 1);
  saveTodos(newTodos);
  setOpenModal(false)
  
};

  console.log(searchValue);

  return (
    <TodoContext.Provider value={{
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo,
      loading,
      error,
      openModal,
      setOpenModal,
      addTodo,
      todoToDelete,
      setTodoToDelete,
      handleDelete,
      openDeleteModal,
      openModal1,
      setOpenModal1,
      onCancel,
      closeTheModal1
    }}>
      {children}
    </TodoContext.Provider>
  )
}


export { TodoContext, TodoProvider }