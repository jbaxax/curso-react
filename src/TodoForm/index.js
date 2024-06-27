import React from 'react';
import './TodoForm.css'
import { TodoContext } from '../TodoContext';

function TodoForm(){
    const {
        addTodo
    } = React.useContext(TodoContext);

     const [newTodoValue, setNewTodoValue] = React.useState({
        text: '',
        note: '',
     }); //OBJETOVO INTENTAS
    
     const onSubmit = (event) =>{
        event.preventDefault();
        addTodo(newTodoValue.text, newTodoValue.note);
        setNewTodoValue({ text: '', note: '' }); 
         
    }
 
    /* const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }; */
    const onChange = (event) => {
        const { name, value } = event.target;
        setNewTodoValue(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    /* const onChange = (event) => {
        // El target es el input correspondiente
          const {name,value} = event.target; 
        // Guardamos en el estado correspondiente usando name
          setNewTodoValue({...newTodoValue,[name]:value});
        // Recuerda que los ... son el spread operator
        // Su función aquí, es sacar las llaves del objeto form y colocarlas una por una en este nuevo objeto que se le entrega a setForm, esto seria algo similar:
        // const newForm = {...form, [name]:value}; 
        // setForm(newForm);
        } */

   
    
   
    //COMO HAGO PARA QUE LOS DOS INPUTS (VALUE) SE MANDEN EN UNO
    //ESTADO COMO OBJETO
   

    return(
        <form onSubmit={onSubmit}>
            <div>
                <input  className='task' name='text' placeholder="Añadir una tarea"  value={newTodoValue.text} onChange={onChange}  required/>
                <input  className='note' name='note' placeholder="Notas (opcional)" value={newTodoValue.note}  onChange={onChange}/>
            </div>
            
            <button type="submit">Añadir</button>
        </form>
    )
}

export {TodoForm}