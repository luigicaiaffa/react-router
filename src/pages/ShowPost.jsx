import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ShowPost() {
  const [postData, setPostData] = useState(null);
  const goToPage = useNavigate();
  const { id } = useParams();

  const fetchPostData = () => {
    fetch(`http://localhost:3000/posts/${id}`)
      .then((res) => {
        if (!res.ok) {
          if (res.status === 404) {
            goToPage("/not-found");
          }

          throw new Error("Qualcosa è andato storto");
        }

        return res.json();
      })
      .then((data) => {
        setPostData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchPostData();
  }, []);

  return (
    <div className="container">
      {postData && (
        <>
          <h1 className="mt-5">{postData.title}</h1>
          <div className="card mt-4">
            <div className="row g-0">
              <div className="col-md-4 d-flex">
                <img
                  src={postData.image}
                  className="img-fluid rounded-start"
                  alt="img"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <div className="card-text">
                        <strong>Autore: </strong>
                        <i>{postData.author}</i>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="card-text">
                        <strong>Contenuto</strong>
                        {postData.content}
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="card-text">
                        <strong>Categoria: </strong>
                        {postData.category}
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="card-text">
                        <p>
                          <strong>Stato Pubblicazione:</strong>
                          {postData.pubblished ? (
                            <i className="ms-2 fa-solid fa-square-check text-success"></i>
                          ) : (
                            <i className="ms-2 fa-solid fa-square-xmark text-danger"></i>
                          )}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
