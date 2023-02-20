import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch("http://localhost:4000/dashboard");
  const data = await response.json();
  return data;
};

// || CLIENT-SIDE DATA FETCHING:
// This Client-Side Data Fetching, which like React and is not supported by Pre-Rendering. So, it lackes SEO opptimization eaither and other features that Pre-rendering makes possible;

export default function Dashboard() {
  //This is React Hook based API call method that Next.js team has developed and has the following advantages;
  // 1) Upon a change it reacts right away without any page refreshing;
  // 2) it loads data faster than typical fetch method of data fetching;
  const { data, error } = useSWR("dashboard", fetcher);

  if (error) return "An Error has occured!";
  if (!data) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>Dahsboard</h1>
      <h2>Posts: {data.posts}</h2>
      <h2>Likes: {data.likes}</h2>
      <h2>Followers: {data.followers}</h2>
      <h2>Following: {data.following}</h2>
    </div>
  );
}
