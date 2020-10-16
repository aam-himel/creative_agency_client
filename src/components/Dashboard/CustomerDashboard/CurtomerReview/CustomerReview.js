import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../../App";

const CustomerReview = () => {

  const { register, handleSubmit} = useForm();
  const [loggedInUser] = useContext(UserContext);

  const onSubmit = (formData) => {
    console.log(loggedInUser);
    const newFormData = {...formData};
    newFormData['email'] = sessionStorage.getItem('email');
    console.log(newFormData);
    fetch('https://powerful-reef-83308.herokuapp.com/addAFeedback', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newFormData)
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
    <div  style={{ width: "580px", height: "540px" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-group">
          <input
            type="text"
            className="form-control font-weight-lighter"
            id="exampleFormControlInput1"
            placeholder="Your email"
            ref={register}
            name="name"
          />
        </div>

        <div class="form-group">
          <input
            type="text"
            className="form-control font-weight-lighter"
            id="exampleFormControlInput1"
            placeholder="Your name / company's name"
            ref={register}
            name="company"          
          />
        </div>

        <div class="form-group">
          <textarea
            className="form-control font-weight-lighter"
            id="exampleFormControlTextarea1"
            rows="5"
            placeholder="Description"
            ref={register}
            name="description"
          ></textarea>
        </div>

        <div class="form-group row">
          <div class="col-sm-10">
            <button
              type="submit"
              class="btn btn-main px-4"
              
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CustomerReview;
