import React, { useState, useRef } from "react";

export default function ResumePersonals(props) {
  const [path, setPath] = useState();
  const imageFile = useRef();

  function handleChange() {
    setPath(URL.createObjectURL(imageFile.current.files[0]));
  }

  return (
    <div className="personals">
      <img className="image" src={path} />

      <label htmlFor="update" className="update">
        Update Photo
      </label>

      <input
        className="input-update"
        id="update"
        type="file"
        accept="image/png, image/jpeg"
        ref={imageFile}
        onChange={handleChange}
      />

      <div className="updated-personals">
        <p className="name-value">{props.name}</p>
        <p className="title-value">{props.title}</p>
        <p className="cell-value">{props.cell}</p>
        <p className="email-value">{props.email}</p>
        <a href={`${props.linkedin}`}>LinkedIn</a>
      </div>
      <hr className="divider" />
    </div>
  );
}
