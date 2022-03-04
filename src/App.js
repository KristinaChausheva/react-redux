import "./App.css"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, incrementByAmount } from "./redux/counter"

function App() {
  const { count } = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>The counter is : {count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>
        Increment by 10
      </button>
    </div>
  )
}

export default App
