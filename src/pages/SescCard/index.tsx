import { Footer } from "../../components/Footer";

import { HeroPages } from "../../components/HeroPages";
import { NavbarHome } from "../../components/Navbar";

import "./styles.scss";

export function CardSesc() {
  const heros = [
    {
      id: 1,
      title: "CARTÃO SESC",
      description:
        "Seja a trabalho, viagem ou a passeio, conheça nossas unidades hoteleiras e aproveite os benefícios que só você e sua família podem obter. Faça parte do Sesc e viva essa experiência com a gente!",
      image: require("../../assets/img/image-1.png"),
    },
  ];

  const imageSrc0 = require("../../assets/img/Rectangle 56.png");
  const imageSrc1 = require("../../assets/img/Rectangle 57.png");
  const imageSrc2 = require("../../assets/img/Rectangle 55.png");
  const imageSrc3 = require("../../assets/img/Rectangle 58.png");

  return (
    <div>
      <NavbarHome/>

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

      <h1 className="fw-bold text-center my-5">
        Conheça as principais vantagens
      </h1>
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="p-5 border border-end-0 border-start-0 border-bottom-0 my-3">
                  <div className="row align-items-center">
                    <div className="col-lg-3 col-md-4 col-sm-12 p-4 text-center">
                      <img src={imageSrc0} className="img-fluid" alt="img_programação" />
                    </div>
                    <div className="sesc__card col-lg-9 col-md-8 col-sm-12 p-1">
                      <div className="card-body">
                        <h5 className="card-title fw-bold pb-4 fs-3">
                        Academia e esportes
                        </h5>
                        <p className="card-text">
                        Seja a trabalho, viagem ou a passeio, conheça nossas unidades hoteleiras e aproveite os benefícios que só você e sua família podem obter. Faça parte do Sesc e viva essa experiência com a gente!              </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-5 border border-end-0 border-start-0 border-bottom-0 text-end">
                  <div className="row align-items-center">
                    <div className="order-2 order-md-1 col-lg-9 col-md-8 col-sm-12 p-1">
                      <div className="card-body">
                        <h5 className="card-title fw-bold pb-4 fs-3">Saúde</h5>
                        <p className="card-text">
                        Seja a trabalho, viagem ou a passeio, conheça nossas unidades hoteleiras e aproveite os benefícios que só você e sua família podem obter. Faça parte do Sesc e viva essa experiência com a gente!              </p>
                      </div>
                    </div>
                    <div className="order-1 order-md-2 col-lg-3 col-md-4 col-sm-12 p-4 text-center">
                      <img src={imageSrc1} className="img-fluid" alt="img_programação" />
                    </div>
                  </div>
                </div>

                <div className="p-5 border border-end-0 border-start-0 border-bottom-0 my-3">
                  <div className="row align-items-center">
                    <div className="col-lg-3 col-md-4 col-sm-12 p-4 text-center">
                      <img src={imageSrc2} className="img-fluid" alt="img_programação" />
                    </div>
                    <div className="col-lg-9 col-md-8 col-sm-12 p-1">
                      <div className="card-body">
                        <h5 className="card-title fw-bold pb-4 fs-3">
                        Cultura
                        </h5>
                        <p className="card-text">
                        Seja a trabalho, viagem ou a passeio, conheça nossas unidades hoteleiras e aproveite os benefícios que só você e sua família podem obter. Faça parte do Sesc e viva essa experiência com a gente!              </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-5 border border-end-0 border-start-0 border-bottom-0 text-end">
                  <div className="row align-items-center">
                    <div className="order-2 order-md-1 col-lg-9 col-md-8 col-sm-12 p-1">
                      <div className="card-body">
                        <h5 className="card-title fw-bold pb-4 fs-3">Tudo em uma plataforma</h5>
                        <p className="card-text">
                        Seja a trabalho, viagem ou a passeio, conheça nossas unidades hoteleiras e aproveite os benefícios que só você e sua família podem obter. Faça parte do Sesc e viva essa experiência com a gente!              </p>
                      </div>
                    </div>
                    <div className="order-1 order-md-2 col-lg-3 col-md-4 col-sm-12 p-4 text-center">
                      <img src={imageSrc3} className="img-fluid" alt="img_programação" />
                    </div>
                  </div>
                </div>

          </div>
     </div>

      <br/>

      <div className="d-grid gap- col-10 col-md-5 col-lg-3 mx-auto mb-5 py-1">
    <button className="button_Card_Sesc btn btn-warning text-center" type="button">
      <span className="fw-bold">Fazer meu credenciamento</span>
    </button>
  </div>
      </div>
      <Footer />
    </div>
  );
}


