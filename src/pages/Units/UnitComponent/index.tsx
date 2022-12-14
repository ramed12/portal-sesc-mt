
import { Footer } from "../../../components/Footer";
import "./styles.scss";
import { NavbarHome } from "../../../components/Navbar";
import { useParams } from "react-router-dom";
import { sescSchool } from "./pages/sescSchool";
import { useEffect, useState } from "react";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { IoMailSharp, IoMapSharp } from "react-icons/io5";
import { RiWhatsappFill } from "react-icons/ri";
import { sescEquilibrium } from "./pages/sescEquilibrium";
import { Modal } from "react-bootstrap";
import { Login } from "../../InternshipProgram/Login";

export function UnitComponent() {
  const { id } = useParams();
  const [page, setPage] = useState<any>(null);
  const [login, setLogin] = useState(false);
  useEffect(() => {
    constructPage(id)
  }, []);

  const constructPage = (params: any) => {
    if (params === 'sesc-escola') {
      const page = sescSchool
      setPage(page);
    } else if (params === 'sesc-equilibrio') {
      const page = sescEquilibrium
      setPage(page);

    }
  }

  function handleLogin() {
    setLogin(!login)
  }

  return (
    <>
      <NavbarHome />
      {page !== null &&
        <div className="container-unit">
          {page?.titlePage && <h1>{page.titlePage}</h1>}
          <div className="cards-unit">
            <div className="cards-img">
              {page?.imagePage && <img src={page.imagePage} />}
              <a className="button-maps"> <IoMapSharp /><span>Ver no mapa a localização</span></a>
            </div>
            <div className="cards-info">
              <div className="header">
                {page.card?.title && <p className="title">{page.card.title}</p>}
                {page.card.descriptions.split('\n\n').map((part: string, index: number) => (
                  <p key={index} className="descriptions">{part}</p>
                ))}
              </div>
              <div className="contact">
                {page.card?.phone && <div className="line"><FaPhoneAlt /><span>{page.card.phone}</span></div>}
                {page.card?.address && <div className="line"> <FaMapMarkerAlt /><span>{page.card.address}</span></div>}
                {page.card?.email && <div className="line"> <IoMailSharp /><span>{page.card.email}</span></div>}
                {page.card?.whatsapp && <div className="line"> <RiWhatsappFill /><span>{page.card.whatsapp}</span></div>}
              </div>
              <div className="service">
                {page.card?.service && <div className="line"><FiClock /><span>Atendimento</span></div>}
                <div className="service-wrap">
                  {(page.card?.service ?? []).map((item: any) => (
                    <div className="service-card" key={item.id}>
                      <p className="title">{item.type}</p>
                      <ul>
                        {item.openingHours.map((hours: any) => (
                          <li key={hours.id}>{hours.title}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {page?.typeContent === 'list' && (
            <div className="card-list">
              {page?.titleContent && <h1>{page.titleContent}</h1>}
              {(page?.content ?? []).map((content: any) => (
                <div className="card-item" key={content.id}>
                  <p className="title">{content.title}</p>
                  {content.items.map((item: any) => (
                    <div key={item.id}><a>{item.item}</a></div>
                  ))}
                </div>
              ))}
            </div>
          )}

          {page?.typeContent === 'cards' && (
            <div className="card-class">
              {page?.titleContent && <h1>{page.titleContent}</h1>}
              <div className="card-wrap">
                {(page?.content ?? []).map((content: any) => (
                  <div className="card-item" key={content.id}>
                    <img src={content.image} alt="" />
                    <div className="card-item-body">
                      <p className="title">{content.title}</p>
                      <p className="description">{content.description}</p>
                      <a className="more">+ detalhes</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      }
      {page?.login === true &&
        <div className="go-unit">
          <div className="image-login" style={{ background: `url(${page.imageLogin})` }} >
            &nbsp;
          </div>
          <div className="work-with">
            <div className="title">
              <p>{page.titleLogin}</p>
            </div>
            <div className="description">
              {page.descriptionLogin.split('\n\n').map((part: string, index: number) => (
                <p key={index}>{part}</p>
              ))}
            </div>
            <div className="actions">
              <a onClick={() => setLogin(true)} className="btn-access">Entrar</a>
            </div>
          </div>
        </div>
      }

      <Modal
        show={login}
        onHide={handleLogin}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body style={{ padding: 0 }}>
          <Login />
        </Modal.Body>

      </Modal>
      <Footer />
    </>
  );
}