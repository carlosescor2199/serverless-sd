import React, { useState, useEffect } from "react"
import { db } from "../firebase"

export default function LinkForm(props) {

  useEffect(() => {
    if (props.currentId === '') {
      setValues({ url: "", name: "", description: "" })
    } else {
      getLinkById(props.currentId)
    }
  }, [props.currentId])

  const getLinkById = async (id) => {
    const doc = await db.collection('links').doc(id).get();
    setValues({...doc.data()})
  }

  const [values, setValues] = useState({
    url: "",
    name: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addOrEdit(values);
    setValues({ url: "", name: "", description: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit} className="card card-body">
      <div className="form-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">insert_link</i>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="https://someurl.com"
          name="url"
          onChange={handleInputChange}
          value={values.url}
        />
      </div>
      <div className="form-group input-group-text bg-light">
        <i className="material-icons">create</i>
      </div>
      <input
        type="text"
        className="form-control"
        name="name"
        placeholder="websitename"
        onChange={handleInputChange}
        value={values.name}
      />
      <div className="form-group">
        <textarea
          name="description"
          cols="30"
          rows="3"
          className="form-control"
          placeholder="Write a description"
          onChange={handleInputChange}
          value={values.description}
        ></textarea>
      </div>
      <button className="btn btn-primary btn-block">
        {props.currentId === '' ? "Save" : "Update" }
      </button>
    </form>
  );
}
