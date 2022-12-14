import { Footer } from '../../../components/Footer'
import { HeroPages } from '../../../components/HeroPages';

import { AiFillTwitterCircle, AiOutlineWhatsApp, AiFillLinkedin, AiFillFacebook, AiOutlineShareAlt } from 'react-icons/ai';
import './styles.scss'
import { NavbarHome } from '../../../components/Navbar';



export function News_Card_Poor() {


  const heros = [
    {
      id: 1,
      title: "Sesc-MT prorroga período de inscrição para vagas de estágio nas unidades de Cáceres e Poxoréu",
      description:
        "Universitários dos cursos de Pedagogia e Educação Física podem realizar cadastro até início de janeiro",
      image: require("../../../assets/img/Noticias_Hero.png"),
    },
  ];


  return(

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
      <>
      <div className="news__card container">
          <div className="row justify-content-center">
              <div className="col-lg-10">
                <h5 className='h__title'>Por Sesc MT</h5>
              </div>
          </div>
          <div className="row justify-content-center">
              <div className="col-5 col-md-9 col-lg-8 col-sm-8">
                <p>29/02/2023 14h30 . Atualizado há 15 horas</p>
              </div>
              <div className="col-7 col-md-3 col-lg-2 col-sm-4">
                <AiFillTwitterCircle className=''/>
                <AiOutlineWhatsApp className='mx-3'/>
                <AiFillLinkedin className=''/>
                <AiOutlineShareAlt className='mx-3'/>
                <AiFillFacebook className=''/>
              </div>
              <span className="col-10 border-bottom mt-0 mb-3"></span>
          </div>
          <div className="row justify-content-center">
              <div className="col-10">
                <p>O Serviço Social do Comércio (Sesc-MT) prorrogou o período de inscrições para o processo seletivo de estágio nas cidades de Cáceres e Poxoréu. Até às 17h do dia 9 de janeiro de 2023, os interessados podem realizar seu cadastro no site <a href='#'>www.sesc.mt.com.br</a>. Os candidatos aprovados irão receber bolsa-estágio, auxílio-transporte e os benefícios do Cartão Sesc.</p>
                <p>São ofertadas quatro vagas no total. O Sesc Cáceres, contabiliza duas oportunidades, sendo uma para universitários matriculados no curso de Pedagogia e uma para estudantes do curso de Educação Física (Bacharel). O Sesc Poxoréu disponibiliza duas vagas de estágio para acadêmicos de Educação Física (Bacharel).</p>
                <p>O diretor regional do Sesc-MT, Carlos Rissato, enfatiza a importância da experiência obtida por meio do estágio, como o programa da instituição visa contribuir com a formação de novos profissionais e amplia a visão do jovem sobre o mercado de trabalho.</p>
                <p>“O Sesc é uma entidade séria que abre anualmente suas portas para que universitários tenham a oportunidade de adquirir repertório profissional e possam colocar em prática as habilidades aprendidas em sala de aula. Acreditamos que os acadêmicos aprovados serão iniciados em uma cultura corporativa que será muito positiva para o seu currículo”, diz Carlos Rissato.</p>
              </div>
          </div>
          <div className="row justify-content-center my-4">
              <div className="col-lg-10">
                <h4 className='fw-bold'>Veja as áreas disponíveis para o processo seletivo de estágio</h4>
              </div>
          </div>
          <div className="row justify-content-center mb-5">
              <div className="col-lg-10">
                <h5>SESC CACÉRES</h5>
                <ul>
                  <li>Pedagogia - 1 vaga</li>
                  <li>Educação Física Bacharel - 1 vaga</li>
                </ul>
                <h5>SESC POXORÉU</h5>
                <ul>
                  <li>Educação física (Bacharel) - 2 vaga</li>
                </ul>
              </div>
          </div>
       </div>
      </>
      <Footer />
    </div>
  )
}
