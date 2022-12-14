import { Link } from "react-router-dom";

import { BsFillClockFill } from "react-icons/bs";

import "./styles.scss";

const img = require("../../assets/img/image-8.jpg");

export function CardUnitsDetails(props: any) {
  return (
    <Link className="card__unitsdetails" to={`${props.link}`}>
      <div
        className="card"
        style={{
          background: `linear-gradient(180deg, rgba(0, 74, 141, 0.231) 0%, rgba(34, 34, 34, 0.35) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="card__unitsdetails__body card-body d-flex flex-column justify-content-between position-absolute w-100 h-100">
          <span className="card__unitsdetails__body__activity position-relative">
            {props.activity}
          </span>

          <div className="d-flex justify-content-between">
            <span className="card__unitsdetails__body__daytime position-relative">
              {props.day}
            </span>

            <span className="card__unitsdetails__body__daytime position-relative">
              <BsFillClockFill />
              {props.time}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
