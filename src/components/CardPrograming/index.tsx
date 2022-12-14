import { useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

import { AiFillClockCircle, AiTwotoneCalendar } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";

import "./styles.scss";

export function CardPrograming(props: any) {
  const [open1, setOpen1] = useState(false);

  return (
    <Card className="programmingpage__card mb-5">
      <Row className="g-0">
        <Col
          className="programmingpage__card__image"
          lg={4}
          xl={3}
          style={{
            backgroundImage: `url(${props.image})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />

        <Col lg={6} xl={7}>
          <div className="programmingpage__card__body card-body d-flex flex-column h-100">
            <Button className="programmingpage__card__body__button mb-3">
              {props.category}
            </Button>

            <h1 className="programmingpage__card__body__title mb-3">
              {props.title}
            </h1>

            <div className="programmingpage__card__body__infos d-flex flex-column flex-md-row justify-content-between">
              <p className="mb-2 mb-md-3 me-md-4">
                <AiTwotoneCalendar />
                {props.day}
              </p>

              <p className="mb-2 mb-md-3 me-md-4">
                <AiFillClockCircle />
                {props.time}
              </p>

              <p className="mb-2 mb-md-3 me-md-4">
                <FaMapMarkerAlt />
                {props.local}
              </p>
            </div>

            <p className="programmingpage__card__body__desc mt-2 mb-2 mb-md-3">
              {props.desc}
            </p>

            <Collapse in={open1}>
              <div id="programmingpage__card__body__collapse">
                <p className="programmingpage__card__body__collapse__editor">
                  <b>Segunta a sexta</b>: às 16h
                </p>

                <p className="programmingpage__card__body__collapse__value">
                  <b>Investimento</b>
                  {props.value}
                </p>
              </div>
            </Collapse>

            <Button
              variant="link"
              className="programmingpage__card__body__details btn mb-0"
              onClick={() => setOpen1(!open1)}
              aria-controls="programmingpage__card__body__collapse"
              aria-expanded={open1}
            >
              + detalhes
            </Button>
          </div>
        </Col>

        <Col
          lg={2}
          className="d-flex flex-column justify-content-center align-items-center align-self-start"
        >
          <Button className="programmingpage__card__button btn btn-dark">
            Reservar
          </Button>
        </Col>
      </Row>
    </Card>
  );
}
