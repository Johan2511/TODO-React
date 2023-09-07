import React from 'react';
import './TodoSearch.css';

function TodoSearch({
  searchValue,
  setSearchValue
}) {
    

    return (
      <input placeholder="Cortar cebollas" 
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