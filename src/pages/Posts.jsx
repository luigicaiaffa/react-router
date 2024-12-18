import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import Modal from "react-bootstrap/Modal";

export default function Posts() {
  const [postsData, setPostsData] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [toDeleteId, setToDeleteId] = useState(undefined);
  const toDeletePost = postsData.find((post) => post.id === toDeleteId);

  useEffect(() => {
    fetchPostsData();
  }, []);

  const fetchPostsData = () => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => {
        setPostsData(data);
      });
  };

  const fetchDeletePost = (id) => {
    fetch(`http://localhost:3000/posts/${id}`, {
      method: "DELETE",
    })
      .then((res) => res)
      .then(() => {
        fetchPostsData();
      });
  };

  const handleDeleteButton = (id) => {
    handleClose();
    fetchDeletePost(id);
  };

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
                          <button
                            className="btn btn-danger ms-1"
                            onClick={() => {
                              setToDeleteId(post.id);
                              handleShow();
                            }}
                          >
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

      <Modal
        key={toDeletePost && toDeletePost.id}
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-danger fs-5">
            Stai eliminando: {toDeletePost && toDeletePost.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column">
          <div className="p-2">
            Quest'azione è irreversibile, procedere comunque?
          </div>
          <div className="align-self-end mt-3">
            <button className="btn btn-secondary ms-2" onClick={handleClose}>
              Annulla
            </button>
            <button
              className="btn btn-danger ms-2"
              onClick={() => handleDeleteButton(toDeletePost.id)}
            >
              Elimina
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
