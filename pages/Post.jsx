import { useLoaderData } from "react-router-dom"

export function Post() {
  const { id, title, body } = useLoaderData()

  return (
    <>
      <h1 className="page-title">{title}</h1>
      <span className="page-subtitle">
        By: <a href="user.html">Leanne Graham</a>
        {/* NEEDS WORK */}
      </span>
      <div>{body}</div>
    </>
  )
}
