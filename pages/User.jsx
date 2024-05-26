import { useLoaderData } from "react-router-dom"

export function User() {
  const { name, email, company, website, address } = useLoaderData()

  return (
    <div class="container">
      <h1 class="page-title">{name}</h1>
      <div class="page-subtitle">{email}</div>
      <div>
        <b>Company:</b> {company.name}
      </div>
      <div>
        <b>Website:</b> {website}
      </div>
      <div>
        <b>Address:</b> Kulas Light Apt. 556, Gwenborough, 92998-3874{address.street} {address.suite}, {address.city}, {address.zipcode}
      </div>
    </div>
  )
}
