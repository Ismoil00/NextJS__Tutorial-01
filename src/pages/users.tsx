import User from "components/user";

// This is Stateless Container Component
export default function Userlist(props: any) {
  const users = props.users;

  return (
    <>
    <h1>List of Users:</h1>
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

// ||||| Static Generation Data Fetching |||||:
// Function getStaticProps() is used to fetch external data on Static Generation (on build time on production-deployment and each time on dev-deployment);
// This function must be exported, so that after fetching data it provides it to the page as 'props object', unless other functions (from the same page) can not access its props;
// This function never runs on client-side and isn't inculed in JS-Bundle, since it only runs on server-side;
// It only runs in a page folder (it should be included in routing) but not outside of it;
// It must return an object and the object should contain a props key which is an object in its turn;
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  // The 'Props Object' should have such format:
  return {
    props: {
      users: data,
    },
  };
}
