
import User from "components/user";

// This is Stateless Container Component
export default function Userlist(props: any) {
  const users = props.users;
  // console.log(users);

  return (
    <>
    <h1>List of Users</h1>
    {
      users.map(function (user: any) {
        return (
          <div key={user.id} style={{marginTop: "10px"}}>
            <User user={user}/>
          </div>
        )
      })
    }
  </>
  )
}

// function getStaticProps() is to fetch external data running on server-side (on build-time(in prod) and on each request (on dev));
// >>> This function is server-side-function, so it never runs on client-side and isn't inculed in JS-Bundle for the same reason;
// >>> it only runs in a page folder but not outside of it;
// >>> it must return an object and the object should contain a props key which is an object in its turn;
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);

  // the return of such object with such structure is must;
  return {
    props: {
      users: data,
    },
  };
}
