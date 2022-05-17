import React, { useState } from 'react';

export function App() {
  const [ counter, setCounter ] = useState(0);

  return (
    <div className="App">
      <h1>Testing</h1>
      <hr />
      <button onClick={() => setCounter(counter - 1)}>
        Decrementar
      </button>
      <span>
        {counter}
      </span>
      <button>Incrementar</button>
    </div>
  );
};
