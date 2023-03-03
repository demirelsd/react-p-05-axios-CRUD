import { useState } from "react";
import axios from "axios";

const EditTutorial = ({ getTutorials, id }) => {
      const [title, setTitle] = useState("");
      const [description, setDescription] = useState("");
   
    const handleModal = (e) => {
        e.preventDefault()
        editTutorial(id)
        
    }
    const editTutorial = async (id) => {
      const BASE_URL = `https://tutorial-api.fullstack.clarusway.com/tutorials/${id}/`;
      try {
        const updatedTutorial = {
          title,
          description,
        };
        await axios.put(BASE_URL, updatedTutorial);
      } catch (err) {
        console.log(err);
      }
      getTutorials();
    };

  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Modal title
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <div className="modal-footer">
            {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
            <button type="submit" className="btn btn-primary" onClick={handleModal}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditTutorial;
