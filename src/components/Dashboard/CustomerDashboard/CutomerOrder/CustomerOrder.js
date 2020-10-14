import React from "react";

const CustomerOrder = () => {
  return (
    <div className="cutomer-order" style={{ width: "580px", height: "540px" }}>
      <form>
        <div class="form-group">
          <input
            type="text"
            className="form-control font-weight-lighter"
            placeholder="Your name / company's name"
          />
        </div>
        <div class="form-group">
          <input
            type="email"
            className="form-control font-weight-lighter"
            placeholder="Your email"
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            className="form-control font-weight-lighter"
            placeholder="Graphics Design"
          />
        </div>

        <div class="form-group">
          <textarea
            className="form-control font-weight-lighter"
            rows="5"
            placeholder="Project Details"
          ></textarea>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <input type="text" className="form-control" placeholder="price" />
          </div>
          <div className="form-group col-md-6">
            <input type="file" className="form-control input-group-prepend" />
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-10">
            <button type="submit" class="btn btn-main px-4">
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CustomerOrder;
