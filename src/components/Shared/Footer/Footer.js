import React from "react";
import './Footer.css';
import FooterForm from "../../Pages/Home/FooterForm/FooterForm";



const Footer = () => {
    const year = new Date();
  return (
    <div id="footer" className="pt-5">
      <div className="container">
      <div className="row">
        <div className="col-md-6 pr-5">
          <h3 className="font-weight-bold pb-3">Let us handle your project, professionally.</h3>
          <p className="font-weight-light">
            With well written codes, we build amazing apps for all platforms,
            mobile and web apps in general.
          </p>
        </div>
        <div className="col-md-6 pb-5">
          <FooterForm />
        </div>
      </div>

      <div className="copyright pt-5 mt-5">
          <p className="text-center  pt-auto">©copyright Orange labs -{year.getFullYear()} </p>
      </div>
      </div>
    </div>
  );
};

export default Footer;
