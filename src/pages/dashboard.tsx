import { useState, useEffect } from "react";

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [dashboard, setDashboard] = useState<any>({});

  // || CLIENT-SIDE DATA FETCHING:
  // This Client-Side Data Fetching, which like React and is not supported by Pre-Rendering. So, it lackes SEO opptimization eaither and other features that Pre-rendering makes possible;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4000/dashboard");
      const data = await response.json();
      setDashboard(data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Dahsboard</h1>
      <h2>Posts: {dashboard.posts}</h2>
      <h2>Likes: {dashboard.likes}</h2>
      <h2>Followers: {dashboard.followers}</h2>
      <h2>Following: {dashboard.following}</h2>
    </div>
  );
}
