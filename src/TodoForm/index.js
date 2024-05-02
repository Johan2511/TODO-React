import React from 'react';
import './TodoForm.css';

function TodoForm({addTodo,setOpenModal}) {
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event)=> {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false)
    };
    const onCancel = ()=> {
        setOpenModal(false)
    };
    const onChange = (event)=> {
        setNewTodoValue(event.target.value);
    };
    return (
        <form onSubmit={ onSubmit}>
            <label>Escribe tu Nuevo TODO</label>
            <textarea 
                placeholder='Crear TODO del dia'
                value={newTodoValue}
                onChange={onChange}
            />
            <div className='Todoform-buttonContainer'>
                <button
                    type='button'
                    className='TodoForm-button
                    TodoForm-button--cancel'
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type='submit'
                    className='TodoForm-button
                    TodoForm-button--add'
                >
                    Crear
                </button>
            </div>
        </form>
    )
}

export { TodoForm };