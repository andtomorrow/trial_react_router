import { Link, useLoaderData } from "react-router-dom"

export function Users() {
  const users = useLoaderData()

  return (
    <div className="container">
      <h1 className="page-title">Users</h1>
      <div className="card-grid">
        {users.map((user) => (
          <div className="card">
            <div className="card-header">{user.name}</div>
            <div className="card-body">
              <div>{user.company.name}</div>
              <div>{user.website}</div>
              <div>{user.email}</div>
            </div>
            <div className="card-footer">
              <Link className="btn" to={`/users/${user.id}`}>
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
