import React from "react";
import FeedbackCard from "../FeedbackCard/FeedbackCard";
import "./FeedBacks.css";

const FeedBacks = () => {
  return (
    <section id="feedback" className=" pb-5 container">
      <div className="feedback">
        <h3 className="py-5 text-center">
        Clients <span className="span-color">Feedbacks</span>
        </h3>

        <div className="row">
            <FeedbackCard />
            <FeedbackCard />
            <FeedbackCard />
            <FeedbackCard />
            <FeedbackCard />
        </div>
      </div>
    </section>
  );
};

export default FeedBacks;
