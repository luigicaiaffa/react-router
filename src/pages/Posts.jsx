import { useEffect } from "react";

export default function Posts() {
  const fetchPostsData = () => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  useEffect(() => {
    fetchPostsData();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="mt-5">Lista dei Post</h1>
      </div>
    </>
  );
}
