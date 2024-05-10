import React from "react";

export default function File_upload() {
  return (
    <div className="file_uploader_container">
      <div className="file_header">
        <img src="../../assets/icons/file.png" alt="" />
        <h4>Upload dokumenter</h4>
      </div>
      <form className="file_form">
        <label>Vælg type</label>
        <select>
          <option>Vedtæger</option>
          <option>Generalforsamling</option>
          <option>Regnskab</option>
        </select>
        <label>Titel</label>
        <input type="text" />
        <label>Vedhæft fil</label>
        <input type="file" />
        <button>Upload</button>
      </form>
    </div>
  );
}
