
import { HeroPages } from "../../components/HeroPages";
import { Footer } from "../../components/Footer";
import edicts from "./index.json";
import "./styles.scss";
import { useState } from "react";
import PaginatedTable from "./PaginationTable";
import Pagination from "./Pagination";
import { Classified } from "./Classified";
import { Modal } from "react-bootstrap";
import { NavbarHome } from "../../components/Navbar";


const heros = [
    {
        id: 1,
        title: "PCG - Programa de Comprometimento e Gratuidade",
        description: "Aqui você encontra todas as informações sobre os nossos processos seletivos.",
        image: require("../../assets/img/pcg.png"),
    },
];

export function EdictsPCG() {

    const [currentPage, setCurrentPage] = useState(1);
    const [classified, setClassified] = useState(false);
    const [item, setItem] = useState('');

    const perPage = edicts.perPage;
    const totalPages = edicts.countPage;

    function handlePageChange(pageNumber: any) {
        if (pageNumber < 1 || pageNumber > totalPages) {
            return;
        }
        setCurrentPage(pageNumber);
    }

    function handleItemChange(value: any) {
        setItem(value)
        setClassified(true)
    }


    function closeItem() {
        setItem('')
        setClassified(false)
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

            <div className="container-table">
                <div className="filter">
                    <div className="text-input">
                        <input type="text" placeholder="Pesquisar por unidade ou turma" />
                        <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.2795 16.3603L11.908 11.6567C11.4731 12.1267 10.9517 12.5255 10.3437 12.853C9.7357 13.1806 9.06912 13.3989 8.34396 13.5081C6.54756 13.7787 4.93369 13.3856 3.50238 12.329C2.0703 11.2718 1.219 9.84502 0.948457 8.04861C0.677917 6.2522 1.07124 4.63796 2.12843 3.20589C3.18506 1.77457 4.61158 0.923645 6.40799 0.653105C8.2044 0.382565 9.81859 0.775559 11.2506 1.83209C12.682 2.88938 13.533 4.31623 13.8035 6.11264C13.9127 6.83779 13.9003 7.53912 13.7664 8.21662C13.6325 8.89412 13.405 9.50987 13.0839 10.0639L19.4839 14.7885C19.6924 14.9424 19.8166 15.1513 19.8563 15.415C19.896 15.6787 19.8319 15.9243 19.6639 16.1518C19.5099 16.3604 19.2928 16.4858 19.0127 16.528C18.7325 16.5702 18.4881 16.5143 18.2795 16.3603ZM8.04612 11.5304C9.28218 11.3443 10.2679 10.7536 11.0032 9.75831C11.7377 8.76248 12.0119 7.64654 11.8258 6.41048C11.6396 5.17442 11.0489 4.18873 10.0537 3.45341C9.05784 2.71885 7.94189 2.44465 6.70583 2.6308C5.46977 2.81695 4.48408 3.40767 3.74876 4.40293C3.01421 5.39876 2.74 6.51471 2.92616 7.75077C3.11231 8.98683 3.70302 9.97252 4.69829 10.7078C5.69412 11.4424 6.81006 11.7166 8.04612 11.5304Z" fill="#3B3B3B" />
                        </svg>
                    </div>
                    <a>Aberto</a>
                    <a>Encerrado</a>
                    <a>Cancelado</a>
                </div>
                <PaginatedTable
                    data={edicts}
                    currentPage={currentPage}
                    perPage={perPage}
                    onItemChange={handleItemChange} />
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />

                <Modal
                    show={classified}
                    onHide={closeItem}
                    aria-labelledby="contained-modal-title-vcenter"
                    size="lg"
                    centered
                >
                    <Modal.Body style={{ padding: 0 }}>
                        <Classified item={item} />
                    </Modal.Body>

                </Modal>
            </div >
            <Footer />
        </>
    );
}
