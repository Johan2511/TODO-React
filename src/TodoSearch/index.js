import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {
  const {
    searchValue,
    setSearchValue,
} = React.useContext(TodoContext);
    

    return (
      <input placeholder="Todo Machine" 
      className="TodoSearch"
      value={searchValue}
      onChange={ (event) => {
        // console.log('Escribiste en el search');
        // console.log(event)
        // console.log(event.target)
        // console.log(event.target.value)

        setSearchValue(event.target.value);

      }
      }/>
    );
  }

  export { TodoSearch };