import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./AddService.css";

const AddService = () => {

  const {register, handleSubmit} = useForm();
  const [imgFile, setImgFile] = useState(null);

  const handleFileChange = (e) => {
    // console.log(e.target.files[0]);
    const newFile = e.target.files[0];
    setImgFile(newFile);
  }

  const onSubmit = (formData) => {
    console.log("Form data", formData);
    const newFormData = new FormData();
    newFormData.append('imgFile', imgFile);
    newFormData.append('title', formData.title);
    newFormData.append('description', formData.description);
 
    console.log("newFormData" ,newFormData);
    
    fetch('https://powerful-reef-83308.herokuapp.com/addAService', {
      method: 'POST',
      body: newFormData
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.error(error)
    })
  };

  return (
    <div className="px-4 py-4 add-service">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-row">
          <div className="form-group col-md-5">
            <input
              type="text"
              className="form-control"
              placeholder="Service Title"
              name="title"
              ref={register}
            />
          </div>
          <div className="form-group col-md-4">
            <input
              type="file"
              className="form-control "
              name="picture"
              ref ={register}
              onChange={handleFileChange}
            />
          </div>
        </div>
        <div class="form-group col-md-5 mr-auto">
          <textarea
            className="form-control font-weight-lighter"
            id="exampleFormControlTextarea1"
            rows="5"
            name="description"
            ref={register}
          ></textarea>
        </div>

        <div class="form-group row">
          <div class="col-sm-10">
            <button type="submit" class="btn btn-main px-4">
              Sent
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddService;
