import { AiOutlineSearch } from "react-icons/ai";


import { CardUnits } from "../../components/CardUnits";
import { Footer } from "../../components/Footer";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

import "./styles.scss";
import { NavbarHome } from "../../components/Navbar";

const cards = [
  {
    id: 1,
    title: "Arsenal",
    address: "Rua Treze de Junho, s/n - Centro Sul - Cuiabá-MT",
    phone: "(65) 3611-0550",
    link: "sesc-arsenal",
  },
  {
    id: 2,
    title: "Dr. Meirelles (Balneário)",
    address: "Rua Treze de Junho, s/n - Centro Sul - Cuiabá-MT",
    phone: "(65) 3611-0550",
    link: "sesc-arsenal",
  },
  {
    id: 3,
    title: "Rondonópolis",
    address: "Rua Treze de Junho, s/n - Centro Sul - Cuiabá-MT",
    phone: "(65) 3611-0550",
    link: "sesc-arsenal",
  },
  {
    id: 4,
    title: "Alta Floresta",
    address: "Rua Treze de Junho, s/n - Centro Sul - Cuiabá-MT",
    phone: "(65) 3611-0550",
    link: "sesc-arsenal",
  },
  {
    id: 5,
    title: "Poxoréu",
    address: "Rua Treze de Junho, s/n - Centro Sul - Cuiabá-MT",
    phone: "(65) 3611-0550",
    link: "sesc-arsenal",
  },
  {
    id: 6,
    title: "Cáceres",
    address: "Rua Treze de Junho, s/n - Centro Sul - Cuiabá-MT",
    phone: "(65) 3611-0550",
    link: "sesc-arsenal",
  },
  {
    id: 7,
    title: "Barão de Melgaço",
    address: "Rua Treze de Junho, s/n - Centro Sul - Cuiabá-MT",
    phone: "(65) 3611-0550",
    link: "sesc-arsenal",
  },
  {
    id: 8,
    title: "Equilíbrio",
    address: "Rua Treze de Junho, s/n - Centro Sul - Cuiabá-MT",
    phone: "(65) 3611-0550",
    link: "sesc-arsenal",
  },
  {
    id: 9,
    title: "Restaurante do Comércio",
    address: "Rua Treze de Junho, s/n - Centro Sul - Cuiabá-MT",
    phone: "(65) 3611-0550",
    link: "sesc-arsenal",
  },
  {
    id: 10,
    title: "Odonto",
    address: "Rua Treze de Junho, s/n - Centro Sul - Cuiabá-MT",
    phone: "(65) 3611-0550",
    link: "sesc-arsenal",
  },
  {
    id: 11,
    title: "Escola",
    address: "Rua Treze de Junho, s/n - Centro Sul - Cuiabá-MT",
    phone: "(65) 3611-0550",
    link: "sesc-arsenal",
  },
  {
    id: 12,
    title: "Unidades Móveis",
    address: "Rua Treze de Junho, s/n - Centro Sul - Cuiabá-MT",
    phone: "(65) 3611-0550",
    link: "sesc-arsenal",
  },
  {
    id: 13,
    title: "Criança - Creche",
    address: "Rua Treze de Junho, s/n - Centro Sul - Cuiabá-MT",
    phone: "(65) 3611-0550",
    link: "sesc-arsenal",
  },
];

export function Units() {
  return (
    <>
      <NavbarHome />

      <Container className="units">
        <Row>
          <Col>
            <h1 className="units__title mb-3 mb-md-4">Unidades</h1>
          </Col>
        </Row>

        <Row>
          <Form className="units__form mb-3 mb-md-4">
            <InputGroup className="units__form__inputgroup mb-3 mb-md-4">
              <Form.Control
                type="text"
                placeholder="Pesquise por Unidade ou Cidade"
              />

              <InputGroup.Text>
                <AiOutlineSearch className="units__form__inputgroup__icon m-0" />
              </InputGroup.Text>
            </InputGroup>

            <p className="units__form__results d-block mb-0 ms-3">
              01 resultado encontrado
            </p>
          </Form>
        </Row>

        <Row>
          {cards.map((card) => {
            return (
              <section key={card.id} className="col-12 col-md-6 col-lg-4 mb-5">
                <CardUnits
                  id={card.id}
                  title={card.title}
                  address={card.address}
                  phone={card.phone}
                  link={card.link}
                />
              </section>
            );
          })}
        </Row>

        <Row>
          <Col className="units__button text-center">
            <Button variant="light">Ver mais</Button>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}
