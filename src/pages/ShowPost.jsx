import { useEffect, useState } from "react";

export default function ShowPost(id) {
  const [postsData, setPostsData] = useState(null);

  const fetchPostsData = () => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => {
        setPostsData(data);
      });
  };

  useEffect(() => {
    fetchPostsData();
  }, []);

  return (
    <div className="container">
      <h1 className="mt-5">Post</h1>
    </div>
  );
}
