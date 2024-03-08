import React from 'react';
import TodoHeader from '../Todoheader';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoForm } from '../TodoForm'; 
import { Modal } from '../Modal';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';


function AppUI() {
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
            } = React.useContext(TodoContext);
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
            <TodoForm />
          </Modal>
          )}
        </>
      );
}

export { AppUI };