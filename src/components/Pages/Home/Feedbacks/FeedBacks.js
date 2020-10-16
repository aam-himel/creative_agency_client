import React, { useEffect, useState } from "react";
import FeedbackCard from "../FeedbackCard/FeedbackCard";
import "./FeedBacks.css";

const FeedBacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/feedbacks')
    .then(res => res.json())
    .then(data => setFeedbacks(data));
  }, [])
  return (
    <section id="feedback" className=" pb-5 container">
      <div className="feedback">
        <h3 className="py-5 text-center">
        Clients <span className="span-color">Feedbacks</span>
        </h3>

        <div className="row">
          {
            feedbacks.map(feedback => <FeedbackCard feedback={feedback} key={feedback._id}/>)
          }
            {/* <FeedbackCard/> */}
        </div>
      </div>
    </section>
  );
};

export default FeedBacks;
