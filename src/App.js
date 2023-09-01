import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  { text: 'cortar cebolla' , completed: true},
  { text: 'Tomar el curso de Intro a React.js' , completed: false},
  { text: 'Llorar con la llorona' , completed: false},
  { text: 'aprender ingles' , completed: false},
  { text: 'aprender a bailar' , completed: false},
]

function App() {
  return (
    <>

      <TodoCounter completed={16} total={25} />
    
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}


export default App;
