
import { HeroPages } from "../../components/HeroPages";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import { NavbarHome } from "../../components/Navbar";



export function Services() {

    // Define um estado para a página atual
    const [currentPage, setCurrentPage] = useState(1);

    // Define um array com todos os dados dos cartões
    const cards = [
      {
        id: 1,
        title: "Portal da Academia",
        description:
          "Movimentos que trabalham todo o corpo para fortalecimento e estabilização dos músculos, utilizando aparelhos próprios para a atividade próprios para a atividade.",
        Image: require("../../assets/img/portal_da_academia.png"),
        link: "/academia",
      },
      {
        id: 2,
        title: "Editais PCG",
        description:
          "Movimentos que trabalham todo o corpo para fortalecimento e estabilização dos músculos, utilizando aparelhos próprios para a atividade.",
        Image: require("../../assets/img/editais__PCG.png"),
        link: "/institucional/editais-pcg",
      },
      {
        id: 3,
        title: "Portal do Cliente",
        description:
          "Movimentos que trabalham todo o corpo para fortalecimento e estabilização dos músculos, utilizando aparelhos próprios para a atividade.",
        Image: require("../../assets/img/portal__do__cliente.png"),
        link: "/institucional/portal-conselheiro",
      },
      {
        id: 4,
        title: "Cursos e Atividades",
        description:
          "Movimentos que trabalham todo o corpo para fortalecimento e estabilização dos músculos, utilizando aparelhos próprios para a atividade.",
        Image: require("../../assets/img/portal_da_academia.png"),
        link: "/academia",
      },
      {
        id: 5,
        title: "Fale Conosco",
        description:
          "Movimentos que trabalham todo o corpo para fortalecimento e estabilização dos músculos, utilizando aparelhos próprios para a atividade.",
        Image: require("../../assets/img/fale__conosco.png"),
        link: "/fale-conosco",
      },
      {
        id: 6,
        title: "Solicitação de Refeição",
        description:
          "Movimentos que trabalham todo o corpo para fortalecimento e estabilização dos músculos, utilizando aparelhos próprios para a atividade.",
        Image: require("../../assets/img/solicitacao__refeicao.png"),
        link: "/institucional/solicitacao-refeicao",
      },
      {
        id: 7,
        title: "Contrato e Tabela de Valores",
        description:
          "Movimentos que trabalham todo o corpo para fortalecimento e estabilização dos músculos, utilizando aparelhos próprios para a atividade.",
        Image: require("../../assets/img/portal_da_academia.png"),
        link: "https://www.sescmt.com.br/wp-content/uploads/2023/03/CONTRATO-2023-TAB-VALORES.pdf",
      }
    ];

    // Define quantos cartões serão exibidos por página
    const cardsPerPage = 6;

    // Calcula o índice do primeiro cartão da página atual
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;

    // Seleciona apenas os cartões da página atual
    const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

    // Atualiza a página atual quando um botão de paginação for clicado
    const handlePageClick = (pageNumber: number) => {
      setCurrentPage(pageNumber);
    };

    const totalPages = Math.floor(cards.length / cardsPerPage) + (cards.length % cardsPerPage !== 0 ? 1 : 0);
    const pageNumbers = [];
    for (let i = 0; i < totalPages; i++) {
      pageNumbers.push(i + 1);
    }

const heros = [
  {
    id: 1,
    title: "Serviços",
    description: "Veja abaixo os serviços que oferemos hoje no SESC-MT",
    image: require("../../assets/img/image-1.png"),
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

      <section className="container my-5">
        <section className="row">
            {/* Renderiza os cartões da página atual */}
          {currentCards.map((card) => {
            return (
              <section key={card.id} className="col-12 col-md-6 col-lg-4 mb-5">
                <Card
                  key={card.id}
                  image={card.Image}
                  title={card.title}
                  description={card.description}
                  link={card.link}
                />
              </section>
            );
          })}
        </section>

          {/* Renderiza os botões de paginação */}
      <Pagination>
        <Pagination.Prev
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1}
        />

      {pageNumbers.map((pageNumber) => (
        <Pagination.Item
          key={pageNumber}
          active={pageNumber === currentPage}
          onClick={() => handlePageClick(pageNumber)}
        >
          {pageNumber}
          </Pagination.Item>
          )
        )}

        <Pagination.Next
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === Math.ceil(cards.length / cardsPerPage)}
        />
      </Pagination>
      </section>
      <Footer />
    </>
  );
}
