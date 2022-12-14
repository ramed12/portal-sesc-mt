import { Link } from "react-router-dom";

import "./styles.scss";

export function Card(props: any) {
  return (
    <Link className="card__default" to={`${props.link}`}>
      <div className="card">
        <div className="card-img">
          <img
            src={props.image}
            className="card-img-top img-fluid"
            alt={`SESC MT - ${props.title}`}
          />
        </div>

        <div className="card-body">
          <h5 className="card-title mt-2 mb-3">{props.title}</h5>
          <p className="card-text mb-4 flexible">{props.description}</p>
          <span>+ detalhes</span>
        </div>
      </div>
    </Link>
  );
}
