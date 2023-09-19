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
  { text: 'aprender a bailar' , completed: true},
  { text: 'Salir a bailar' , completed: false},
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo =>
    !!todo.completed).length;
  const totalTodos = !!todos.length;

  const serchedTodos = todos.filter(
      (todo) => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText)
      }
  );

    console.log('Los usuarios buscan todos de ' + searchValue);

  return (
    <>

      <TodoCounter completed={completedTodos} 
      total={totalTodos} />
    
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {serchedTodos.map(todo => (
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
