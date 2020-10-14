import React from "react";
import "./AddService.css";
const AddService = () => {
  return (
    <div className="px-4 py-4 add-service">
      <div >
        <form>
          <div class="form-group">
            <input
              type="email"
              className="form-control font-weight-lighter"
              id="exampleFormControlInput1"
              placeholder="Your email"
            />
          </div>

          <div class="form-group">
            <input
              type="email"
              className="form-control font-weight-lighter"
              id="exampleFormControlInput1"
              placeholder="Your name / company's name"
            />
          </div>

          <div class="form-group">
            <textarea
              className="form-control font-weight-lighter"
              id="exampleFormControlTextarea1"
              rows="5"
            ></textarea>
          </div>

          <div class="form-group row">
            <div class="col-sm-10">
              <button type="submit" class="btn btn-main px-4">
                Sign in
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
