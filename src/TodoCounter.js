import './TodoCounter.css';

function TodoCounter({ total, completed}) {
    return (
      <h1 style={{
        
      }}>
        Has completado {completed} de {total} TODOS
      </h1>
    );
  }

  export { TodoCounter };