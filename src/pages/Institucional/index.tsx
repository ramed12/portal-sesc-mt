import { Footer } from '../../components/Footer';
import { HeroPages } from '../../components/HeroPages';
import { NavbarHome } from '../../components/Navbar';

import './styles.scss'

export function Institucional() {

  const heros = [
    {
      id: 1,
      title: "Promovendo desenvolvimento humano e cidadania no Estado de Mato Grosso",
      description:
        "",
      image: require("../../assets/img/image-1.png"),
    },
  ];

  const imageSrc0 = require("../../assets/img/Rectangle 60.png");
  const imageSrc1 = require("../../assets/img/Rectangle 57.png");
  const imageSrc2 = require("../../assets/img/Rectangle 55.png");
  const imageSrc3 = require("../../assets/img/Rectangle 58.png");

  return(

    <div>
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

      <h1 className="fw-bold text-center my-5">
      Quem somos nós?
      </h1>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="border border-end-0 border-start-0 border-bottom-0 my-3">
              <div className="row align-items-center">
                <div className="col-lg-3 col-md-4 col-sm-12 p-4 text-center">
                  <img src={imageSrc0} className="img-fluid" alt="img_programação" />
                </div>
                <div className="col-lg-9 col-md-8 col-sm-12 p-1">
                  <div className="card-body">
                    <h5 className="card-title fw-bold pb-4 fs-3">
                      Nossa história
                    </h5>
                    <p className="card-text">
                    O Sesc – Serviço Social do Comércio é uma entidade privada, financiada com as contribuições do empresariado, sem ônus para os empregados, ou a utilização de recursos públicos.
                    Assim como o Senac – Serviço Nacional de Aprendizagem Comercial, o Sesc é administrado pela Confederação Nacional do Comércio (CNC), que agrega todas as federações do comércio no país. Em Mato Grosso, tanto o Sesc quanto o Senac são ligados ao Sistema Fecomércio Mato Grosso, sendo os responsáveis pelas ações sociais da organização.
                    Desde 1947, o Sesc-MT promove ações socioeducativas destinadas ao bem-estar social e a qualidade de vida dos trabalhadores do Comércio de Bens, Serviços e Turismo, de seus familiares e da comunidade em geral.
                    As ações desenvolvidas estão distribuídas nos seguintes programas: Educação, Saúde, Cultura, Lazer a Assistência. Cada um possui diretrizes gerais de ação propostas pelo Departamento Nacional do Sesc, que são seguidas na proposição das atividades promovidas.
                    Atualmente, o Sesc-MT possui 22 unidades no estado: Cuiabá, Alta Floresta, Barão de Melgaço, Cáceres, Poxoréu, Rondonópolis e Sinop, além de quatro unidades móveis que circulam pelos municípios do interior: OdontoSesc, Sesc Sobre Rodas, Sesc Saúde Mulher e a BiblioSesc.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 border border-end-0 border-start-0 border-bottom-0 text-end">
              <div className="row align-items-center">
                <div className="order-2 order-md-1 col-lg-9 col-md-8 col-sm-12 p-1">
                  <div className="card-body">
                    <h5 className="card-title fw-bold pb-4 fs-3">Missão</h5>
                    <p className="card-text">
                      Promover ações socioeducativas que contribuam para o bem-estar social e a qualidade de vida dos trabalhadores do comércio de bens, serviços e turismo, de seus familiares e da comunidade, para uma sociedade justa e democrática.
                    </p>
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
                    Visão
                    </h5>
                    <p className="card-text">
                    Promover ações socioeducativas que contribuam para o bem-estar social e a qualidade de vida dos trabalhadores do comércio de bens, serviços e turismo, de seus familiares e da comunidade, para uma sociedade justa e democrática.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 border border-end-0 border-start-0 border-bottom-0 text-end">
              <div className="row align-items-center">
                <div className="order-2 order-md-1 col-lg-9 col-md-8 col-sm-12 p-1">
                  <div className="card-body">
                    <h5 className="card-title fw-bold pb-4 fs-3">Valores</h5>
                    <p className="card-text">
                      Promover ações socioeducativas que contribuam para o bem-estar social e a qualidade de vida dos trabalhadores do comércio de bens, serviços e turismo, de seus familiares e da comunidade, para uma sociedade justa e democrática.
                    </p>
                  </div>
                </div>
                <div className="order-1 order-md-2 col-lg-3 col-md-4 col-sm-12 p-4 text-center">
                  <img src={imageSrc3} className="img-fluid" alt="img_programação" />
                </div>
              </div>
            </div>
          </div>
  </div>

      <br />

      <h4 className="fw-bold text-center py-5">
    Conheça o Balanço das Ações do Sistema Fecomércio Mato Grosso na Gestão
    2018 – 2022
  </h4>
  <div className="d-grid gap- col-6 col-md-5 col-lg-3 mx-auto mb-5 py-1">
    <button className="button_Card_Sesc btn btn-warning text-center" type="button">
      <span className="fw-bold">Baixar balanço</span>
    </button>
  </div>
  <div className="d-flex justify-content-center align-items-center flex-column">
    <h4 className="fw-bold text-center mb-5 py-5">
      Conselheiros Sesc - Quadriênio 2022 - 2026
    </h4>
    <div className="col-sm-12 col-md-6">
      <h5 className="fw-bold text-center">SINCOVAN/Nortelândia - Jaqueline Rodrigues Santos</h5>
      <h6 className="mb-3 text-center">Suplente: Lucas Soler Pedroza</h6>
      <h5 className="fw-bold text-center">SINCOVAN/Nortelândia - Jaqueline Rodrigues Santos</h5>
      <h6 className="mb-3 text-center">Suplente: Lucas Soler Pedroza</h6>
      <h5 className="fw-bold text-center">SINCOVAN/Nortelândia - Jaqueline Rodrigues Santos</h5>
      <h6 className="mb-3 text-center">Suplente: Lucas Soler Pedroza</h6>
      <h5 className="fw-bold text-center">SINCOVAN/Nortelândia - Jaqueline Rodrigues Santos</h5>
      <h6 className="mb-3 text-center">Suplente: Lucas Soler Pedroza</h6>
      <h5 className="fw-bold text-center">SINCOVAN/Nortelândia - Jaqueline Rodrigues Santos</h5>
      <h6 className="mb-3 text-center">Suplente: Lucas Soler Pedroza</h6>
      <h5 className="fw-bold text-center">SINCOVAN/Nortelândia - Jaqueline Rodrigues Santos</h5>
      <h6 className="mb-3 text-center">Suplente: Lucas Soler Pedroza</h6>
      <h5 className="fw-bold text-center">SINCOVAN/Nortelândia - Jaqueline Rodrigues Santos</h5>
      <h6 className="mb-3 text-center">Suplente: Lucas Soler Pedroza</h6>
      <h5 className="fw-bold text-center">SINCOVAN/Nortelândia - Jaqueline Rodrigues Santos</h5>
      <h6 className="mb-3 text-center">Suplente: Lucas Soler Pedroza</h6>
      <h5 className="fw-bold text-center">SINCOVAN/Nortelândia - Jaqueline Rodrigues Santos</h5>
      <h6 className="mb-3 text-center">Suplente: Lucas Soler Pedroza</h6>
    </div>
    <h4 className="fw-bold text-center mb-5 py-5">
    Representantes Conselho Regional Sesc ao Conselho Nacional 2022-2026
    </h4>
    <h5 className="fw-bold text-center">SINCOVAN/Nortelândia - Jaqueline Rodrigues Santos</h5>
      <h6 className="mb-3 text-center">Suplente: Lucas Soler Pedroza</h6>
    <h5 className="fw-bold text-center">SINCOVAN/Nortelândia - Jaqueline Rodrigues Santos</h5>
      <h6 className="mb-3 text-center">Suplente: Lucas Soler Pedroza</h6>
    <h5 className="fw-bold text-center">SINCOVAN/Nortelândia - Jaqueline Rodrigues Santos</h5>
      <h6 className="mb-3 text-center mb-5">Suplente: Lucas Soler Pedroza</h6>
  </div>
  </div>
      <Footer />
    </div>
  )
}
