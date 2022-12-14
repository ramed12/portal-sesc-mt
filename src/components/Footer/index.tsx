import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";

import "./styles.scss";

export function Footer() {
  const logoSesc = require("../../assets/img/logo Sesc.png");

  return (
    <div id="footer-wrap">
      <footer className="footer">
        <div className="top-footer">
          <div className="row">
            <div className="col-md-4">
              <h4>Cartão Sesc</h4>
              <ul className="footer-link">
                <li>
                  <a href="#" title="Credenciamento">
                    Credenciamento
                  </a>
                </li>
                <li>
                  <a href="#" title="Beneficios">
                    Benefícios
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h4>Serviços</h4>
              <ul className="footer-link">
                <li>
                  <a href="#" title="Portal do Cliente">
                    Portal do Cliente
                  </a>
                </li>
                <li>
                  <a href="#" title="Portal da Academia">
                    Portal da Academia
                  </a>
                </li>
                <li>
                  <a href="/institucional/editais-pcg" title="Editais PCG">
                    Editais PCG
                  </a>
                </li>
                <li>
                  <a href="/fale-conosco" title="Fale Conosco">
                    Fale Conosco
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h4>Programação</h4>
              <ul className="footer-link">
                <li>
                  <a href="#" title="Programação_Hoje">
                    Hoje
                  </a>
                </li>
                <li>
                  <a href="#" title="Programação_Amanha">
                    Amanhã
                  </a>
                </li>
                <li>
                  <a href="#" title="Programação_Próxima_Semana">
                    Próxima Semana
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <div className="row">
            <div className="col-md-5">
              <div className="footer-logo">
                <a href="/" title="Sesc_Logo">
                  <img
                    src={logoSesc}
                    width="250"
                    alt="Sesc_Logo"
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
            <p className="copyright pt-3 col-md-4">
              Copyright &copy; 2022 Sesc Mato Grosso
            </p>
            <div className=" pt-3 col-md-3">
              <div className="icons">
                <FaLinkedin href="#" fontSize="25" title="Linkedin" />
                <FaTwitterSquare href="#" fontSize="25" title="Twitter" />
                <FaFacebookSquare href="#" fontSize="25" title="Facebook" />
                <FaInstagramSquare href="#" fontSize="25" title="Instagran" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
