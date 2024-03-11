import React from 'react';
import { useTodos } from './useTodos';
import TodoHeader from '../Todoheader';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoForm } from '../TodoForm'; 
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { Modal } from '../Modal';

// const defaultTodos = [
//   { text: 'cortar cebolla' , completed: true},
//   { text: 'Tomar el curso de Intro a React.js' , completed: false},
//   { text: 'Llorar con la llorona' , completed: false},
//   { text: 'aprender ingles' , completed: false},
//   { text: 'aprender a bailar' , completed: true},
//   { text: 'Salir a bailar' , completed: false},
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

// localStorage.removeItem('TODOS_V1');

function App() {

  const {
    
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    serchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    addTodo
  } = useTodos();

  return (
    <>
      <TodoHeader >
      
        <TodoCounter 
        totalTodos={totalTodos}
        completedTodos={completedTodos}/>

        <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}/>  
      
      </TodoHeader>

          <TodoList>
            {loading  && (
              <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
            </>
            )}
            {error  && <TodosError/>}
            {(!loading && serchedTodos.length === 0) && <EmptyTodos/>}

            {serchedTodos.map(todo => (
              <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)} 
              onDelete={() => deleteTodo(todo.text)} />
            ))}
        </TodoList>

      <CreateTodoButton
        setOpenModal={setOpenModal} />

      {openModal && (
        <Modal>
        <TodoForm 
        addTodo={addTodo}
        setOpenModal={setOpenModal} />
      </Modal>
      )}
    </>
  );
}


export default App;
