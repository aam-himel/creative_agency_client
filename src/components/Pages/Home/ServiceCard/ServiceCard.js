import React from "react";
import "./ServiceCard.css";
import { useSpring, animated } from "react-spring";
import { useHistory } from "react-router-dom";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const ServiceCard = ({service, key}) => {
    console.log(service, key);
    const history = useHistory();
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
//   console.log(props);

  const handleService = ()=> {
    history.push(`/dashboard/${service._id}`)
  }

  return (
    <div class="col mb-4 service" onClick={handleService}>
      <animated.div
        class="card d-flex align-items-center text-center py-4"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
      >
        {/* <img src={} class="card-img-top avatar " alt="..." /> */}
        <img src={`data:image/png;base64,${service.image.img}`} alt="services" className="avatar"/>
        <div class="card-body">
          <h5 class={"card-title"}>{service.title} </h5>
          <p class="card-text"> {service.description} </p>
        </div>

      </animated.div>
    </div>
  );
};

export default ServiceCard;
