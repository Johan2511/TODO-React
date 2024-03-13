import React from "react";

function useLocalStorage(itemName, initialvalue) {
    const [sincronizedItem, setSincronizedItem] = React.useState(true);  
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialvalue);

    
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
    
          let parsedItem;
  
          if (!localStorageItem) {
              localStorage.setItem(itemName, JSON.stringify(initialvalue));
              parsedItem = initialvalue;
            } else {
              parsedItem = JSON.parse(localStorageItem);
              setItem(parsedItem);
            }
            setLoading(false);
            
          } catch (error) {
            setLoading(false);
            setSincronizedItem(true);
            setError(true)
        }
      }, 2000)
        
    }, [sincronizedItem]);

    const saveItem = (newItem) => {
      localStorage.setItem( itemName, JSON.stringify(newItem));
  
      setItem(newItem);

      
    };

    const sincronizeItem = () => {
      setLoading(true);
      setSincronizedItem(false);
    }
  
return {
    item, 
    saveItem,
    loading,
    error,
    sincronizeItem
    };
}

export {useLocalStorage };

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