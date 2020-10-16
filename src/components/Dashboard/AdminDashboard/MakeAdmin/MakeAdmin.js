import React from "react";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (formData) => {
      console.log(formData);
    fetch("https://powerful-reef-83308.herokuapp.com/makeAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div
      style={{
        width: "95%",
        height: "40%",
        margin: "0 auto",
        backgroundColor: "white",
        borderRadius: "10px",
      }}
    >
      <div className="px-4 py-4">
        <form className="form-inline" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group mx-sm-4 mb-2">
            <label for="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="example@gmail.com"
              name="email"
              ref={register}
            />
          </div>
          <input type="submit" className="btn btn-success mb-2" />
        </form>
      </div>
    </div>
  );
};

export default MakeAdmin;
