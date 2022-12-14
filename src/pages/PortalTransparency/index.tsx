
import { Footer } from "../../components/Footer";
import "./styles.scss";
import { CardMenu } from "./CardMenu";
import mock from "./mock.json";
import maps from "../../assets/img/mapa.png";
import { NavbarHome } from "../../components/Navbar";

// import { CardMaps } from "./CardMaps";

export function PortalTransparency() {

    return (
        <>
            <NavbarHome/>
            <div className="container-advisor">
                <div className="info-title">
                    <p>TRANSPARÊNCIA SESC</p>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim</p>
                </div>
                <div className="info-data">
                    <div className="info info-menu">
                        <p>Mato Grosso</p>
                        {mock.map((item, index) => {
                            return (
                                <CardMenu params={item} key={index} />
                            );
                        })}
                    </div>
                    <div className="info">
                        <div className="card-maps">
                            <div className="header">
                                <p>Acesso à Transparência nos Departamentos Regionais</p>
                            </div>
                            <div className="content">
                                <p>Escolha o departamento Regional pelo mapa</p>
                                <div>
                                    {/* <CardMaps/> */}
                                    <img src={maps} alt="" />
                                </div>
                                <hr />
                                <div>
                                    <select className="select-content">
                                        <option value="Selecione o Departamento Regional">Selecione o Departamento Regional</option>
                                    </select>
                                </div>
                                <div>
                                    <a className="btn-content">Acessar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
