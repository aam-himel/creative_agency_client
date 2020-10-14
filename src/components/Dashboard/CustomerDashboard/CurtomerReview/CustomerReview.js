import React from "react";

const CustomerReview = () => {
  return (
    <div className="" style={{ width: "580px", height: "540px" }}>
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
            placeholder="Description"
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
