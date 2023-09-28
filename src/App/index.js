import React from 'react';
import { AppUI } from './AppUI';
import  {useLocalStorage} from './useLocalStorage';

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
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
    } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo =>
    !!todo.completed).length;
  const totalTodos = todos.length;

  const serchedTodos = todos.filter(
      (todo) => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText)
      }
  );

    const completeTodo = (text) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
      );
      newTodos[todoIndex].completed = true;
      saveTodos(newTodos)
    }

    const deleteTodo = (text) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
      );
      newTodos.splice(todoIndex, 1);
      saveTodos(newTodos)
    }

  return (
    <AppUI
    loading={loading}
    error={error}
    completedTodos = {completedTodos}
    totalTodos = {totalTodos}
    searchValue = {searchValue}
    setSearchValue = {setSearchValue}
    serchedTodos = {serchedTodos}
    completeTodo = {completeTodo}
    deleteTodo = {deleteTodo}
    />
  )
}


export default App;
