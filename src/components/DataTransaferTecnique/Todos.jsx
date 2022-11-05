import React from 'react'
import Todo from './Todo'

const Todos = (props) => {
  return (
    <>
      {props.todos.map((todo) =>
        <Todo key={Math.random()} todo={todo}/>
     )}
    </>
  )
}

export default Todos