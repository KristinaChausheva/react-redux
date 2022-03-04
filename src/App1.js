//an example using the context API

import "./App.css"
import React, { useState } from "react"
import Button from "./components/Button"

function App() {
  const [count, setCount] = useState(0)
  return (
    <countContext.Provider value={count}>
      <div className="App">
        <h1>The counter is : {count}</h1>
        <button onClick={() => setCount((prevState) => prevState + 1)}>
          increment
        </button>
        <button onClick={() => setCount((prevState) => prevState - 1)}>
          decrement
        </button>
        <button onClick={() => setCount((prevState) => prevState + 10)}>
          Increment by 10
        </button>
        <Button onClick={() => setCount((prevState) => prevState - 10)}>
          Decrement by 10
        </Button>
      </div>
    </countContext.Provider>
  )
}

export default App

export const countContext = React.createContext()
