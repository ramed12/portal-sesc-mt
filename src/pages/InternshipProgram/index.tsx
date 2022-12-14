
import { HeroPages } from "../../components/HeroPages";
import { Footer } from "../../components/Footer";
import edicts from "./index.json";
import "./styles.scss";
import { useState } from "react";
import PaginatedTable from "./PaginationTable";
import Pagination from "./Pagination";
import { DetailsLine } from "./DetailsLine";
import { Modal } from "react-bootstrap";
import { Login } from "./Login";
import { ResetPassword } from "./ResetPassword";
import { NavbarHome } from "../../components/Navbar";

const heros = [
    {
        id: 1,
        title: "Programa de Estágio",
        description: "Aqui você encontra todas as informações sobre os nossos processos seletivos.",
        image: require("../../assets/img/internship-program.png"),
    },
];

export function InternshipProgram() {

    const [currentPage, setCurrentPage] = useState(1);
    const [edictsItem, setEdictsItem] = useState([]);
    const [details, setDetails] = useState(false);
    const [login, setLogin] = useState(false);
    const [resetPassword, setResetPassword] = useState(false);
    const perPage = edicts.perPage;
    const totalPages = edicts.countPage;

    function handlePageChange(pageNumber: any) {
        if (pageNumber < 1 || pageNumber > totalPages) {
            return;
        }
        setCurrentPage(pageNumber);
    }

    function handleItemChange(item: any) {
        if (item !== null || item !== undefined) {
            setEdictsItem(item)
            setDetails(true)
        }
    }

    function closeItem() {
        setEdictsItem([])
        setDetails(false)
    }

    function handleLogin() {
       setLogin(!login)
    }

    function handleResetPassworD() {
       setResetPassword(!resetPassword)
    }


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

            <div className='container-table'>
                <div className="filter">
                    <div className="text-input">
                        <input type="text" placeholder="Ano" />
                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 20C1.45 20 0.979 19.8043 0.587 19.413C0.195667 19.021 0 18.55 0 18V4C0 3.45 0.195667 2.97933 0.587 2.588C0.979 2.196 1.45 2 2 2H3V0.975C3 0.691667 3.09567 0.458333 3.287 0.275C3.479 0.0916668 3.71667 0 4 0C4.28333 0 4.521 0.0956666 4.713 0.287C4.90433 0.479 5 0.716667 5 1V2H13V0.975C13 0.691667 13.096 0.458333 13.288 0.275C13.4793 0.0916668 13.7167 0 14 0C14.2833 0 14.5207 0.0956666 14.712 0.287C14.904 0.479 15 0.716667 15 1V2H16C16.55 2 17.021 2.196 17.413 2.588C17.8043 2.97933 18 3.45 18 4V18C18 18.55 17.8043 19.021 17.413 19.413C17.021 19.8043 16.55 20 16 20H2ZM2 18H16V8H2V18Z" fill="#3B3B3B" />
                        </svg>

                    </div>
                    <div className="text-input">
                        <input type="text" placeholder="Pesquisar por termos" />
                        <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.2795 16.3603L11.908 11.6567C11.4731 12.1267 10.9517 12.5255 10.3437 12.853C9.7357 13.1806 9.06912 13.3989 8.34396 13.5081C6.54756 13.7787 4.93369 13.3856 3.50238 12.329C2.0703 11.2718 1.219 9.84502 0.948457 8.04861C0.677917 6.2522 1.07124 4.63796 2.12843 3.20589C3.18506 1.77457 4.61158 0.923645 6.40799 0.653105C8.2044 0.382565 9.81859 0.775559 11.2506 1.83209C12.682 2.88938 13.533 4.31623 13.8035 6.11264C13.9127 6.83779 13.9003 7.53912 13.7664 8.21662C13.6325 8.89412 13.405 9.50987 13.0839 10.0639L19.4839 14.7885C19.6924 14.9424 19.8166 15.1513 19.8563 15.415C19.896 15.6787 19.8319 15.9243 19.6639 16.1518C19.5099 16.3604 19.2928 16.4858 19.0127 16.528C18.7325 16.5702 18.4881 16.5143 18.2795 16.3603ZM8.04612 11.5304C9.28218 11.3443 10.2679 10.7536 11.0032 9.75831C11.7377 8.76248 12.0119 7.64654 11.8258 6.41048C11.6396 5.17442 11.0489 4.18873 10.0537 3.45341C9.05784 2.71885 7.94189 2.44465 6.70583 2.6308C5.46977 2.81695 4.48408 3.40767 3.74876 4.40293C3.01421 5.39876 2.74 6.51471 2.92616 7.75077C3.11231 8.98683 3.70302 9.97252 4.69829 10.7078C5.69412 11.4424 6.81006 11.7166 8.04612 11.5304Z" fill="#3B3B3B" />
                        </svg>
                    </div>
                    <div className="text-input">
                        <input type="text" placeholder="Meu currículo" />
                        <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 0L0 6L11 12L20 7.09V14H22V6M4 10.18V14.18L11 18L18 14.18V10.18L11 14L4 10.18Z" fill="#3B3B3B" />
                        </svg>
                    </div>
                    <a>Aberto</a>
                    <a>Encerrado</a>
                    <a>Cancelado</a>
                </div>

                <Modal
                    show={details}
                    onHide={closeItem}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Body style={{ padding: 0 }}>
                        <DetailsLine edicts={edictsItem} closeItem={closeItem} />
                    </Modal.Body>

                </Modal>

                <Modal
                    show={login}
                    onHide={handleLogin}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Body style={{ padding: 0 }}>
                       <Login/>
                    </Modal.Body>

                </Modal>

                <Modal
                    show={resetPassword}
                    onHide={handleResetPassworD}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Body style={{ padding: 0 }}>
                       <ResetPassword/>
                    </Modal.Body>

                </Modal>

                <PaginatedTable data={edicts} onItemChange={handleItemChange} currentPage={currentPage} perPage={perPage} />
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />

                <div className="go-internship">
                    <div className="image-login">
                        &nbsp;
                    </div>
                    <div className="work-with">
                        <div className="title">
                            <p>Venha participar do programa de estágio!</p>
                        </div>
                        <div className="description">
                            <p>Para concorrer às vagas disponíveis no Sesc Mato Grosso clique no menu &quot;Meu Currículo&quot; e preencha os dados solicitados. Após o cadastro, acesse o menu &quot;Inscrições Abertas&quot; selecione a oportunidade desejada.</p>
                            <p>Fique por dentro das novas vagas e acompanhe os editais em andamento nos menus acima.</p>
                        </div>
                        <div className="actions">
                            <a onClick={() => setLogin(true)} className="btn-access">Acessar</a>
                            <a onClick={() => setResetPassword(true)}  className="btn-new-access">Novo acesso</a>
                        </div>
                    </div>
                </div>
            </div >
            <Footer />
        </>
    );
}

