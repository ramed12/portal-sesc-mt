import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { HeroPages } from "../../components/HeroPages";
import { CardPrograming } from "../../components/CardPrograming";
import { Footer } from "../../components/Footer";

import { CgCalendarToday } from "react-icons/cg";
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiTicket } from "react-icons/hi";
import { RiCheckboxMultipleBlankFill } from "react-icons/ri";

import "./styles.scss";
import { NavbarHome } from "../../components/Navbar";


export function Programming() {
  const heros = [
    {
      id: 1,
      title: "Programação",
      description:
        "Confira abaixo todas as atividades dentro do Sesc Mato Grosso",
      image: require("../../assets/img/image-2.png"),
    },
  ];

  const cards = [
    {
      id: 1,
      image: require("../../assets/img/image-4.jpg"),
      category: "Cultura",
      title: "A vida de Guilherme Morai - Exposição",
      day: "30/04/2023",
      time: "16h",
      local: "Sesc MT",
      desc: "Museu Do Sesc Arsenal o abriga até fevereiro de 2023 a exposição que reúne mais de 140 peças, entre fotos, vídeos, manuscritos e livros sobre a vida e carreira do artista  Guilherme Morai.",
      value:
        "Para trabalhadores do comércio e seus dependentes: Categoria A (<3 salários mínimos)= R$5 - Categoria B (>3 salários mínimos) = R$5 - Para o público geral= R$ 15",
      link: "sesc-arsenal",
    },
    {
      id: 2,
      image: require("../../assets/img/image-5.jpg"),
      category: "Esporte",
      title: "Natação - Novas turmas",
      day: "30/04/2023",
      time: "10h",
      local: "Sesc MT",
      desc: "ATENÇÃO, quem aí quer que seu filho aproveite a piscina com mais segurança? As inscrições para aula de natação infantil estão abertas..🏊",
      value: "Gratuito",
      link: "sesc-arsenal",
    },
  ];

  return (
    <>
      <NavbarHome />

      {heros.map((hero) => {
        return (
          <HeroPages
            key={hero.id}
            title={hero.title}
            description={hero.description}
            image={hero.image}
          />
        );
      })}

      <Container className="programmingpage">
        <Row>
          <Col>
            <h2 className="programmingpage__title">O que vamos fazer hoje</h2>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="programmingpage__filter d-flex justify-content-between">
              <div className="programmingpage__filter__iconsbutton flex-grow-1">
                <Button variant="link">
                  <FaMapMarkerAlt />{" "}
                  <span className="d-none d-md-block">
                    Digite a cidade ou unidade
                  </span>
                </Button>
              </div>
              <div className="programmingpage__filter__iconsbutton flex-grow-1">
                <Button variant="link">
                  <CgCalendarToday />
                  <span className="d-none d-md-block">Selecione a data</span>
                </Button>
              </div>
              <div className="programmingpage__filter__iconsbutton flex-grow-1">
                <Button variant="link">
                  <HiTicket />
                  <span className="d-none d-md-block">Selecione a entrada</span>
                </Button>
              </div>
              <div className="programmingpage__filter__iconsbutton flex-grow-1">
                <Button variant="link">
                  <RiCheckboxMultipleBlankFill />
                  <span className="d-none d-md-block"> Categoria desejada</span>
                </Button>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            {cards.map((card) => {
              return (
                <section key={card.id} className="col-12 mb-5">
                  <CardPrograming
                    id={card.id}
                    image={card.image}
                    category={card.category}
                    title={card.title}
                    day={card.day}
                    time={card.time}
                    local={card.local}
                    desc={card.desc}
                    value={card.value}
                    link={card.link}
                  />
                </section>
              );
            })}
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}
