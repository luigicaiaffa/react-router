import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Posts() {
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

  console.log(postsData);

  return (
    <>
      <div className="container">
        <h1 className="mt-5">Lista dei Post</h1>
        <div className="p-3">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Titolo</th>
                <th scope="col">Autore</th>
                <th scope="col">Categoria</th>
                <th scope="col">Stato</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {postsData &&
                postsData.map((post) => {
                  return (
                    <tr key={post.id}>
                      <th scope="row">
                        <img src={post.image} alt="img" width="65" />
                      </th>
                      <td>{post.title}</td>
                      <td>
                        <i>&#45; {post.author}</i>
                      </td>
                      <td>
                        <span className="badge text-bg-primary">
                          {post.category}
                        </span>
                      </td>
                      <td>
                        {post.pubblished ? (
                          <i className="fa-solid fa-square-check text-success"></i>
                        ) : (
                          <i className="fa-solid fa-square-xmark text-danger"></i>
                        )}
                      </td>
                      <td>
                        <div className="d-flex justify-content-end">
                          <NavLink
                            to={`/posts/${post.id}`}
                            className="btn btn-light ms-1"
                          >
                            <i className="fa-solid fa-circle-info"></i>
                          </NavLink>
                          <button className="btn btn-danger ms-1">
                            <i className="fa-solid fa-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
