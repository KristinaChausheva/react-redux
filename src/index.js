import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import App1 from "./App1"

import store from "./redux/store"
import { Provider } from "react-redux"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App1 />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
