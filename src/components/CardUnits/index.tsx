import { Link } from "react-router-dom";

import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

import "./styles.scss";

const img = require("../../assets/img/image-3.png");

export function CardUnits(props: any) {
  return (
    <Link className="card__units" to={`${props.id}`}>
      <div className="card">
        <div className="card-img">
          <img
            src={img}
            className="card-img-top img-fluid"
            alt={`SESC MT - ${props.title}`}
          />
        </div>

        <div className="card-body">
          <h5 className="card-title mt-2 mb-3">{props.title}</h5>

          <p className="card-text mb-2">
            <FaMapMarkerAlt />
            {props.address}
          </p>

          <p className="card-text mb-4">
            <FaPhoneAlt />
            {props.phone}
          </p>

          <span>+ detalhes</span>
        </div>
      </div>
    </Link>
  );
}
