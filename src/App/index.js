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


function App() {

  const {
    
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
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

      <TodoList 
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        onError={() => {<TodosError/>}}
        onLoading={() => {<TodosLoading/>}}
        onEmpty={() => {<EmptyTodos/>}}
        render= {todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)} 
          onDelete={() => deleteTodo(todo.text)} />
        )}
      
      />


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
