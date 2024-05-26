import { Outlet, createBrowserRouter } from "react-router-dom"
import { Posts } from "../pages/Posts"
import { Users } from "../pages/Users"
import { Todos } from "../pages/Todos"
import { Navbar } from "../pages/Navbar"
import { Post } from "../pages/Post"
import { User } from "../pages/User"

export const router = createBrowserRouter([
  {
    element: <NavLayout />,
    children: [
      {
        path: "/posts",
        children: [
          {
            index: true,
            loader: ({ request: { signal } }) => {
              return fetch("http://localhost:3000/posts", { signal })
            },
            element: <Posts />,
          },
          {
            path: ":id",
            loader: ({ params, request: { signal } }) => {
              return fetch(`http://localhost:3000/posts/${params.id}`, { signal }).then((res) => {
                if (res.status === 200) return res.json()

                throw redirect("/posts")
              })
            },
            element: <Post />,
          },
        ],
      },
      {
        path: "/users",
        children: [
          {
            index: true,
            loader: ({ request: { signal } }) => {
              return fetch("http://localhost:3000/users", { signal })
            },
            element: <Users />,
          },
          {
            path: ":id",
            loader: ({ params, request: { signal } }) => {
              return fetch(`http://localhost:3000/users/${params.id}`, { signal }).then((res) => {
                if (res.status === 200) return res.json()

                throw redirect("/posts")
              })
            },
            element: <User />,
          },
        ],
      },
      {
        path: "/todos",
        children: [
          {
            index: true,
            loader: ({ request: { signal } }) => {
              return fetch("http://localhost:3000/todos", { signal })
            },
            element: <Todos />,
          },
        ],
      },
    ],
  },
])

function NavLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
