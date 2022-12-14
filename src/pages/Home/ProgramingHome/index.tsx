import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import { BsCalendar3 } from "react-icons/bs";
import "./styles.scss";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Button, ButtonGroup } from "react-bootstrap";

function ReactSimplyCarouselExample() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const imgSlider1 = require("../../../assets/img/Programacao-cultura-01.png");
  const imgSlider2 = require("../../../assets/img/programacao-lazer-02.jpg");
  const imgSlider3 = require("../../../assets/img/programacao-educacao-03.png");
  const imgSlider4 = require("../../../assets/img/programacao-esporte-04.jpg")
  const imgSlider5 = require("../../../assets/img/programacao-assistencia-05.png")

    const [isDragging, setIsDragging] = useState(false);

    function handleSliderMouseDown() {
      setIsDragging(true);
    }

    function handleSliderMouseUp() {
      setIsDragging(false);
    }

    function handleLinkClick(event: any) {
      if (isDragging) {
        event.preventDefault();
      }
    }

    const handlePrevClick = () => {
      setActiveSlideIndex(activeSlideIndex - 1);
    };

    const handleNextClick = () => {
      setActiveSlideIndex(activeSlideIndex + 1);
    };



  return (
    <>
      <Container className="programminghome">
        <Row>
          <Col>
            <h1 className="programminghome__title text-md-start text-center mb-3">
              <BsCalendar3 /> Programação
            </h1>
            <p className="programminghome__subtitle text-md-start text-center">
              Confira as programações de destaque da semana!{" "}
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="px-0 px-md-3">
            <ReactSimplyCarousel
              updateOnItemClick={true}
              activeSlideIndex={activeSlideIndex}
              onRequestChange={setActiveSlideIndex}
              itemsToShow={2}
              itemsToScroll={1}
              infinite={false}
              containerProps={{
                style: {
                  justifyContent: "space-between",
                },
              }}
              forwardBtnProps={{
                //here you can also pass className, or any other button element attributes
                show: false,
                style: {
                  alignSelf: "center",
                  background: "transparent",
                  border: "1px solid",
                  borderRadius: "50%",
                  color: "black",
                  cursor: "pointer",
                  fontSize: "40px",
                  height: 65,
                  lineHeight: 1,
                  textAlign: "center",
                  width: 80,
                },
                children: <span>{`>`}</span>,
              }}
              backwardBtnProps={{
                //here you can also pass className, or any other button element attributes
                show: false,
                style: {
                  alignSelf: "center",
                  background: "transparent",
                  border: "1px solid",
                  borderRadius: "50%",
                  color: "black",
                  cursor: "pointer",
                  fontSize: "40px",
                  height: 65,
                  lineHeight: 1,
                  textAlign: "center",
                  width: 80,
                },
                children: <span>{`<`}</span>,
              }}
              // responsiveProps={[
              //   {
              //     itemsToShow: 1,
              //     itemsToScroll: 1,
              //     minWidth: 768,
              //   },
              // ]}
              speed={400}
              easing="linear"
            >
              {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
              <div className="card_cultura d-flex justify-content-between me-md-4">
                <div className="name_Slider">Cultura</div>
                <img
                  className="img_Slider d-none d-md-block"
                  src={imgSlider1}
                  alt="cultura"
                  onMouseDown={handleSliderMouseDown}
                  onMouseUp={handleSliderMouseUp}
                />
                <div className="card-body">
                  <div className="data_Slider">06 Mar</div>
                  <div className="title_Slider mb-md-3">
                    CINE SESC - WiFi Ralph
                  </div>
                  <div className="content_Slider mb-4">
                    Em WiFi Ralph, o mais famoso vilão dos videogames, Ralph, e
                    Vanellope, sua companheira atrapalhada, iniciam mais uma
                    arriscada aventura.
                  </div>
                  <Link to="/programacao"  onClick={handleLinkClick} className="button_slider">+ detalhes</Link>
                </div>
              </div>

              <div className="card_lazer d-flex justify-content-between me-md-4">
                <div className="name_Slider">Lazer</div>
                <img
                  className="img_Slider d-none d-md-block"
                  src={imgSlider2}
                  alt="Lazer"
                  onMouseDown={handleSliderMouseDown}
                  onMouseUp={handleSliderMouseUp}
                />
                <div className="card-body">
                  <div className="data_Slider">07 Mar</div>
                  <div className="title_Slider mb-md-3">
                    CINE SESC - WiFi Ralph
                  </div>
                  <div className="content_Slider mb-4">
                    Em WiFi Ralph, o mais famoso vilão dos videogames, Ralph, e
                    Vanellope, sua companheira atrapalhada, iniciam mais uma
                    arriscada aventura.
                  </div>
                  <Link to="/programacao"  onClick={handleLinkClick} className="button_slider">+ detalhes</Link>
                </div>
              </div>

              <div className="card_educacao d-flex justify-content-between me-md-4">
                <div className="name_Slider">Educação</div>
                <img
                  className="img_Slider d-none d-md-block"
                  src={imgSlider3}
                  alt="Educacao"
                  onMouseDown={handleSliderMouseDown}
                  onMouseUp={handleSliderMouseUp}
                />
                <div className="card-body">
                  <div className="data_Slider">10 Mar</div>
                  <div className="title_Slider mb-md-3">
                    CINE SESC - WiFi Ralph
                  </div>
                  <div className="content_Slider mb-4">
                    Em WiFi Ralph, o mais famoso vilão dos videogames, Ralph, e
                    Vanellope, sua companheira atrapalhada, iniciam mais uma
                    arriscada aventura.
                  </div>
                  <Link to="/programacao"  onClick={handleLinkClick} className="button_slider">+ detalhes</Link>
                </div>
              </div>

              <div className="card_esporte d-flex justify-content-between me-md-4">
                <div className="name_Slider">Esporte</div>
                <img
                  className="img_Slider d-none d-md-block"
                  src={imgSlider4}
                  alt="esporte"
                  onMouseDown={handleSliderMouseDown}
                  onMouseUp={handleSliderMouseUp}
                />
                <div className="card-body">
                  <div className="data_Slider">08 Mar</div>
                  <div className="title_Slider mb-3">
                    ESPORTE SESC - FUTEBOL
                  </div>
                  <div className="content_Slider mb-4">
                    A expressão Lorem ipsum em design gráfico e editoração é um
                    texto padrão em latim utilizado na produção gráfica para
                    preencher os espaços de texto em publicações
                  </div>
                  <Link to="/programacao"  onClick={handleLinkClick} className="button_slider">+ detalhes</Link>
                </div>
              </div>

              <div className="card_assistencia d-flex justify-content-between me-md-4">
                <div className="name_Slider">Assistência</div>
                <img
                  className="img_Slider d-none d-md-block"
                  src={imgSlider5}
                  alt="assistencia"
                  onMouseDown={handleSliderMouseDown}
                  onMouseUp={handleSliderMouseUp}
                />
                <div className="card-body">
                  <div className="data_Slider">13 Mar</div>
                  <div className="title_Slider mb-3">
                    NOTÍCIA SESC - SESC HOJE
                  </div>
                  <div className="content_Slider mb-4">
                    A expressão Lorem ipsum em design gráfico e editoração é um
                    texto padrão em latim utilizado na produção gráfica para
                    preencher os espaços de texto em publicações
                  </div>
                  <Link to="/programacao"  onClick={handleLinkClick} className="button_slider">+ detalhes</Link>
                </div>
              </div>
            </ReactSimplyCarousel>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <div className="col-lg-2 col-md-5 col-sm-5 col-9 mt-3">
              <ButtonGroup aria-label="Botões em círculo">
            <Button
            variant="outline-primary"
            className="rounded-circle fz-3 mx-5 w-auto"
            onClick={handlePrevClick}
            disabled={activeSlideIndex === 0}
            >
              <BsChevronLeft />
            </Button>{" "}
            <Button
            variant="outline-primary"
            className="rounded-circle w-auto"
            onClick={handleNextClick}
            disabled={activeSlideIndex === 4}
            >
              <BsChevronRight />
            </Button>{" "}
          </ButtonGroup>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default ReactSimplyCarouselExample;
