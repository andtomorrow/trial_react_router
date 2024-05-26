import { useLoaderData } from "react-router-dom"

export function Todos() {
  const todos = useLoaderData()

  return (
    <>
      <h1 className="page-title">Todos</h1>
      <ul>{todos.map((todo) => (todo.completed ? <li className="strike-through">{todo.title}</li> : <li>{todo.title}</li>))}</ul>
    </>
  )
}
