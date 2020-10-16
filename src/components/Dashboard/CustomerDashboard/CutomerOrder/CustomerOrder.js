import React, { useState } from "react";
import { useForm } from "react-hook-form";

const CustomerOrder = () => {
  const { register, handleSubmit } = useForm();
  const [imgFile, setImgFile] = useState(null);

  const handleFileChange = (e) => {
    // console.log(e.target.files[0]);
    const newFile = e.target.files[0];
    setImgFile(newFile);
  }

  
  const onSubmit = (formData) => {
    const newFormData = new FormData();
    const status = 'pending';
    newFormData.append('imgFile', imgFile);
    newFormData.append('name', formData.username);
    newFormData.append('email', formData.email);
    newFormData.append('serviceName',formData.serviceName );
    newFormData.append('description', formData.description);
    newFormData.append('price', formData.price);
    newFormData.append('status', status);
    console.log(newFormData);
    
    fetch('https://powerful-reef-83308.herokuapp.com/placeAOrder', {
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
    <div className="cutomer-order" style={{ width: "580px", height: "540px" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-group">
          <input
            type="text"
            name="username"
            ref={register}
            className="form-control font-weight-lighter"
            placeholder="Your name / company's name"
          />
        </div>
        <div class="form-group">
          <input
            type="email"
            name="email"
            ref={register}
            className="form-control font-weight-lighter"
            placeholder="Your email"
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            name="serviceName"
            ref={register}
            className="form-control font-weight-lighter"
            placeholder="Graphics Design"
          />
        </div>

        <div class="form-group">
          <textarea
            className="form-control font-weight-lighter"
            name="description"
            ref={register}
            rows="5"
            placeholder="Project Details"
          ></textarea>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="price"
              name="price"
              ref={register}
            />
          </div>
          <div className="form-group col-md-6">
            <input
              type="file"
              className="form-control input-group-prepend"
              name="picture"
              // ref ={register}
              onChange={handleFileChange}
            />
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-10">
            <input type="submit" className="btn btn-main" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CustomerOrder;
