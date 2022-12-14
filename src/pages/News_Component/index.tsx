import { Footer } from '../../components/Footer'
import { HeroPages } from '../../components/HeroPages';
import { NavbarHome } from '../../components/Navbar';


import News from '../Home/News';
import './styles.scss'


export function News_Component() {

  const heros = [
    {
      id: 1,
      title: "Sesc-MT prorroga período de inscrição para vagas de estágio nas unidades de Cáceres e Poxoréu",
      description:
        "Universitários dos cursos de Pedagogia e Educação Física podem realizar cadastro até início de janeiro",
      image: require("../../assets/img/Noticias_Hero.png"),
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
      <br />
      <br />
      <br />
      <News />
      <Footer />
    </div>
  )
}
