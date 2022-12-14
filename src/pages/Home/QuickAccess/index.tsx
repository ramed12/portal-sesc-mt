import { Link } from "react-router-dom";
import { FaHandPointRight, FaFireAlt } from "react-icons/fa";
import { BsFillCaretRightFill } from "react-icons/bs";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./styles.scss";

export default function QuickAccess() {
  return (
    <>
      <Container className="quickaccess">
        <Row>
          <Col>
            <h1 className="quickaccess__title text-lg-start text-center">
              Acesso Rápido
            </h1>
          </Col>
        </Row>

        <Row>
          <Col className="quickaccess__left" lg={6}>
            <div className="d-flex justify-content-center">
              <div className="quickaccess__left__divider" />

              <h2 className="quickaccess__left__recacc text-center">
                <FaHandPointRight /> Recomendados
              </h2>

              <div className="quickaccess__left__divider" />
            </div>

            <div className="d-flex flex-column justify-content-center w-100">
              <Link
                to="/"
                className="quickaccess__left__links d-flex justify-content-start w-100"
              >
                <BsFillCaretRightFill /> <p className="">Portal da Academia</p>
              </Link>

              <Link
                to="/"
                className="quickaccess__left__links d-flex justify-content-start w-100"
              >
                <BsFillCaretRightFill /> <p className="">Cursos e Atividades</p>
              </Link>

              <Link
                to="/"
                className="quickaccess__left__links d-flex justify-content-start w-100"
              >
                <BsFillCaretRightFill /> <p className="">Editais PCG</p>
              </Link>
            </div>
          </Col>

          <Col className="quickaccess__right" lg={6}>
            <div className="d-flex justify-content-center">
              <div className="quickaccess__right__divider" />

              <h2 className="quickaccess__right__recacc text-center">
                <FaFireAlt /> Mais acessados
              </h2>

              <div className="quickaccess__right__divider" />
            </div>

            <div className="d-flex flex-column justify-content-center w-100">
              <Link
                to="/"
                className="quickaccess__left__links d-flex justify-content-start w-100"
              >
                <BsFillCaretRightFill /> <p className="">Cartão Sesc</p>
              </Link>

              <Link
                to="/"
                className="quickaccess__left__links d-flex justify-content-start w-100"
              >
                <BsFillCaretRightFill /> <p className="">Portal do Cliente</p>
              </Link>

              <Link
                to="/"
                className="quickaccess__left__links d-flex justify-content-start w-100"
              >
                <BsFillCaretRightFill />{" "}
                <p className="">Contrato e Tabela de Valores</p>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
