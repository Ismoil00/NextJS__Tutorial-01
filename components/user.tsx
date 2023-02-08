
// This is Stateless Presentational Molecula Component;
export default function User ({ user } : any) {
  return (
    <>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </>
  )
}