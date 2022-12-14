
import { CardUnitsDetails } from "../../../components/CardUnitsDetails";
import { Footer } from "../../../components/Footer";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { IoMapSharp, IoMailSharp } from "react-icons/io5";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { FiClock } from "react-icons/fi";

import "./styles.scss";
import { NavbarHome } from "../../../components/Navbar";


const img = require("../../../assets/img/image-1.png");

const cards1 = [
  {
    id: 1,
    activity: "Dança de Salão",
    day: "Terças e quintas-feiras",
    time: "19h",
    link: "danca-de-salao",
  },
  {
    id: 2,
    activity: "Dança de Salão",
    day: "Terças e quintas-feiras",
    time: "19h",
    link: "danca-de-salao",
  },
  {
    id: 3,
    activity: "Dança de Salão",
    day: "Terças e quintas-feiras",
    time: "19h",
    link: "danca-de-salao",
  },
  {
    id: 4,
    activity: "Dança de Salão",
    day: "Terças e quintas-feiras",
    time: "19h",
    link: "danca-de-salao",
  },
  {
    id: 5,
    activity: "Dança de Salão",
    day: "Terças e quintas-feiras",
    time: "19h",
    link: "danca-de-salao",
  },
  {
    id: 6,
    activity: "Dança de Salão",
    day: "Terças e quintas-feiras",
    time: "19h",
    link: "danca-de-salao",
  },
  {
    id: 7,
    activity: "Dança de Salão",
    day: "Terças e quintas-feiras",
    time: "19h",
    link: "danca-de-salao",
  },
  {
    id: 8,
    activity: "Dança de Salão",
    day: "Terças e quintas-feiras",
    time: "19h",
    link: "danca-de-salao",
  },
];

const cards2 = [
  {
    id: 1,
    activity: "Dança de Salão",
    day: "Terças e quintas-feiras",
    time: "19h",
    link: "danca-de-salao",
  },
  {
    id: 2,
    activity: "Dança de Salão",
    day: "Terças e quintas-feiras",
    time: "19h",
    link: "danca-de-salao",
  },
  {
    id: 3,
    activity: "Dança de Salão",
    day: "Terças e quintas-feiras",
    time: "19h",
    link: "danca-de-salao",
  },
  {
    id: 4,
    activity: "Dança de Salão",
    day: "Terças e quintas-feiras",
    time: "19h",
    link: "danca-de-salao",
  },
  {
    id: 5,
    activity: "Dança de Salão",
    day: "Terças e quintas-feiras",
    time: "19h",
    link: "danca-de-salao",
  },
  {
    id: 6,
    activity: "Dança de Salão",
    day: "Terças e quintas-feiras",
    time: "19h",
    link: "danca-de-salao",
  },
];

export function UnitDetails() {
  return (
    <>
      <NavbarHome />

      <Container className="unitdetails">
        <Row>
          <Col>
            <h1 className="unitdetails__title mb-3 mb-md-4">Sesc Arsenal</h1>
          </Col>
        </Row>

        <Row>
          <Col lg={5} className="unitdetails__left mb-5">
            <div
              className="unitdetails__left__image mb-3 mb-md-4"
              style={{
                background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${img})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            <div className="unitdetails__left__button d-grid">
              <Button variant="primary">
                <IoMapSharp /> Ver no mapa a localização
              </Button>
            </div>
          </Col>

          <Col lg={7} className="unitdetails__right">
            <div className="d-flex flex-column justify-content-between h-100">
              <div className="unitdetails__right__infos">
                <p className="mb-3 mb-md-4">
                  <FaPhoneAlt />
                  (65) 3611-0550
                </p>
                <p className="mb-3 mb-md-4">
                  <FaMapMarkerAlt />
                  Rua Treze de Junho, s/n - Centro Sul - Cuiabá-MT
                </p>
                <p className="mb-3 mb-md-4">
                  <IoMailSharp />
                  arsernal@sescmt.com.br/
                </p>
                <p className="mb-3 mb-md-4">
                  <RiWhatsappFill />
                  (65) 3611-0550
                </p>
              </div>

              <div className="unitdetails__right__service mt-4 mt-md-0">
                <p className="mb-3 mb-md-4">
                  <FiClock />
                  Atendimento
                </p>

                <div className="d-flex flex-column flex-md-row justify-content-between">
                  <Card className="unitdetails__right__service__cards mb-3 me-4">
                    <Card.Body>
                      <Card.Title>Espaço do Artesanato</Card.Title>
                      <Card.Text>
                        · Segunda das 10h às 18h · Terça a Sábado das 12h30 às
                        21h · Domingo das 14h às 20h
                      </Card.Text>
                    </Card.Body>
                  </Card>

                  <Card className="unitdetails__right__service__cards mb-3 me-4">
                    <Card.Body>
                      <Card.Title>Espaço de Alimentação</Card.Title>
                      <Card.Text>· Terça a Domingo das 14h às 21h</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between">
                  <Card className="unitdetails__right__service__cards mb-3 me-4">
                    <Card.Body>
                      <Card.Title>Cinema</Card.Title>
                      <Card.Text>
                        · Quinta a sábado das 17h às 21h (Conforme os horários
                        das sessões/filme)
                      </Card.Text>
                    </Card.Body>
                  </Card>

                  <Card className="unitdetails__right__service__cards mb-3 me-4">
                    <Card.Body>
                      <Card.Title>Galeria de Artes</Card.Title>
                      <Card.Text>
                        · Terça a Sábado das 13h às 21h · Domingo das 14h às 20h
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between">
                  <Card className="unitdetails__right__service__cards mb-3 me-4">
                    <Card.Body>
                      <Card.Title>Academia</Card.Title>
                      <Card.Text>
                        · Segunda a Sexta - 05h30 às 21h; · Sábado - 07h às 10h;
                      </Card.Text>
                    </Card.Body>
                  </Card>

                  <Card className="unitdetails__right__service__cards mb-3 me-4">
                    <Card.Body>
                      <Card.Title>Recreação</Card.Title>
                      <Card.Text>· Terça a Domingo das 14h às 21h</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between">
                  <Card className="unitdetails__right__service__cards mb-3 me-4">
                    <Card.Body>
                      <Card.Title>Biblioteca Adulta e Infantil</Card.Title>
                      <Card.Text>· Segunda das 10h às 18h</Card.Text>
                    </Card.Body>
                  </Card>

                  <Card className="unitdetails__right__service__cards mb-3 me-4">
                    <Card.Body>
                      <Card.Title>Ateliê de Artes</Card.Title>
                      <Card.Text>· Terça a Sábado das 14h às 21h;</Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                <div className="d-flex flex-column flex-md-row justify-content-between">
                  <Card className="unitdetails__right__service__cards unitdetails__right__service__cards--large mb-3 me-4">
                    <Card.Body>
                      <Card.Title>
                        Central de Relacionamento com o Cliente
                      </Card.Title>
                      <Card.Text>
                        · Segunda das 09h às 18h; · Terça a Sexta das 09h às
                        19h; · O atendimento para pagamentos encerra 30 minutos
                        antes do horário de fechamento da Central de segunda a
                        sexta-feira;
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between">
                  <Card className="unitdetails__right__service__cards unitdetails__right__service__cards--large me-4">
                    <Card.Body>
                      <Card.Title>Administração</Card.Title>
                      <Card.Text>
                        · Segunda das 09h às 18h; · Terça a Sexta das 09h às
                        19h; · O atendimento para pagamentos encerra 30 minutos
                        antes do horário de fechamento da Central de segunda a
                        sexta-feira;
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="unitcards">
        <Row>
          <Col>
            <h1 className="unitcards__title mb-3 mb-md-4">
              Ativades Regulares de Cultura
            </h1>
          </Col>
        </Row>

        <Row>
          {cards1.map((card) => {
            return (
              <section key={card.id} className="col-12 col-md-6 col-lg-3 mb-5">
                <CardUnitsDetails
                  id={card.id}
                  activity={card.activity}
                  day={card.day}
                  time={card.time}
                  link={card.link}
                />
              </section>
            );
          })}
        </Row>
      </Container>

      <Container className="unitcards">
        <Row>
          <Col>
            <h1 className="unitcards__title mb-3 mb-md-4">
              Ativades Regulares de Lazer
            </h1>
          </Col>
        </Row>

        <Row>
          {cards2.map((card) => {
            return (
              <section key={card.id} className="col-12 col-md-6 col-lg-4 mb-5">
                <CardUnitsDetails
                  id={card.id}
                  activity={card.activity}
                  day={card.day}
                  time={card.time}
                  link={card.link}
                />
              </section>
            );
          })}
        </Row>
      </Container>

      <Container className="unitmore">
        <Row>
          <Col className="unitmore__button text-center">
            <Button variant="light">Ver mais</Button>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}
