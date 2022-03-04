import React from "react"

function Button(props) {
  console.log(props.children)
  return <button onClick={props.onClick}>{props.children}</button>
}

export default Button
