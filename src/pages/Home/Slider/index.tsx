import "./styles.scss";
import { useEffect, useRef, useState } from "react";
import home_02 from "../../../assets/img/educacao-sessao-ecossistema-sesc-01.jpeg";
import home_03 from "../../../assets/img/cultura-sessao-ecossistema-sesc-01.jpg";
import home_04 from "../../../assets/img/saude-sessao-ecossistema-sesc-01.jpg";
import home_05 from "../../../assets/img/lazer-sessao-ecossistema-sesc-01.jpg";
import home_06 from "../../../assets/img/assistencia-sessao-ecossistema-sesc-01.jpg";


export default function Slider() {

  const firstContainerRef = useRef<HTMLDivElement>(null);
  const secondContainerRef = useRef<HTMLDivElement>(null);
  const thirdContainerRef = useRef<HTMLDivElement>(null);
  const fourthContainerRef = useRef<HTMLDivElement>(null);
  const fiveContainerRef = useRef<HTMLDivElement>(null);

  const [sliderColors, setSliderColors] = useState<Array<string>>(['#006eaa', '#AB1B01', '#00862E', '#BF7202', '#3A1E69']);

  useEffect(() => {
    const handleScroll = () => {
      // definir os offsets dos containers
      const containers = [
        { ref: firstContainerRef, color: '#006eaa' },
        { ref: secondContainerRef, color: '#AB1B01' },
        { ref: thirdContainerRef, color: '#00862E' },
        { ref: fourthContainerRef, color: '#BF7202' },
        { ref: fiveContainerRef, color: '#3A1E69' },
      ];

      const scrollPosition = window.scrollY;

      // percorrer os containers e encontrar a cor correspondente com base na posição de rolagem
      let backgroundColor = '#006eaa';
      for (const container of containers) {
        const padding = 500; // valor de padding para subtrair de lastComponentOffsetTop
        const containerOffsetTop = (container.ref.current?.offsetTop || 0) - padding;
        if (scrollPosition > containerOffsetTop) {
          backgroundColor = container.color;
        }
      }

      // atualizar as cores do slider com base na posição de rolagem
      setSliderColors([
        backgroundColor,
        backgroundColor === '#3A1E69' ? '#3A1E69' : '#3A1E69',
      ]);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="slider-wrapper" style={{ backgroundColor: sliderColors[0] }}>
      <div className="container" ref={firstContainerRef}>
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-12 my-5">
            <img src={home_02} alt="slider" className="img-fluid" />
          </div>
          <div className="align-self-center col col-lg-5 col-md-5 col-sm-10 mx-5 mb-5">
            <h1 className="slider__title">Educação</h1>
            <p className="slider__subtitle">
              Crianças, jovens, adultos e idosos encontram no Sesc um ambiente que promove o desenvolvimento integral,
              respeita as identidades culturais e os valores éticos e de cidadania.{' '}
            </p>
            <button className="button__slider">+ detalhes</button>
          </div>
        </div>
      </div>

      <div className="container" ref={secondContainerRef}>
        <div className="row">
          <div className="order-2 order-md-1 align-self-center col col-lg-5 col-md-5 col-sm-10 mx-5 mb-5">
            <h1 className="slider__title">Cultura</h1>
            <p className="slider__subtitle">
              Crianças, jovens, adultos e idosos encontram no Sesc um ambiente que promove o desenvolvimento integral,
              respeita as identidades culturais e os valores éticos e de cidadania.{' '}
            </p>
            <button className="button__slider">+ detalhes</button>
          </div>
          <div className="order-1 order-md-2 col-lg-5 col-md-5 col-sm-12 my-5">
            <img src={home_03} alt="slider" className="img-fluid" />
          </div>
        </div>
      </div>

      <div className="container" ref={thirdContainerRef}>
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-12 my-5">
            <img src={home_04} alt="slider" className="img-fluid" />
          </div>
          <div className="align-self-center col col-lg-5 col-md-5 col-sm-10 mx-5 mb-5">
            <h1 className="slider__title">Saúde</h1>
            <p className="slider__subtitle">
              Crianças, jovens, adultos e idosos encontram no Sesc um ambiente que promove o desenvolvimento integral,
              respeita as identidades culturais e os valores éticos e de cidadania.{' '}
            </p>
            <button className="button__slider">+ detalhes</button>
          </div>
        </div>
      </div>

      <div className="container" ref={fourthContainerRef}>
        <div className="row">
          <div className="order-2 order-md-1 align-self-center col col-lg-5 col-md-5 col-sm-10 mx-5 mb-5">
            <h1 className="slider__title">Lazer</h1>
            <p className="slider__subtitle">
              Crianças, jovens, adultos e idosos encontram no Sesc um ambiente que promove o desenvolvimento integral,
              respeita as identidades culturais e os valores éticos e de cidadania.{' '}
            </p>
            <button className="button__slider">+ detalhes</button>
          </div>
          <div className="order-1 order-md-2 col-lg-5 col-md-5 col-sm-12 my-5">
            <img src={home_05} alt="slider" className="img-fluid" />
          </div>
        </div>
      </div>

      <div className="container" ref={fiveContainerRef}>
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-12 my-5">
            <img src={home_06} alt="slider" className="img-fluid" />
          </div>
          <div className="align-self-center col col-lg-5 col-md-5 col-sm-10 mx-5 mb-5">
            <h1 className="slider__title">Assistência</h1>
            <p className="slider__subtitle">
              Crianças, jovens, adultos e idosos encontram no Sesc um ambiente que promove o desenvolvimento integral,
              respeita as identidades culturais e os valores éticos e de cidadania.{' '}
            </p>
            <button className="button__slider">+ detalhes</button>
          </div>
        </div>
      </div>
    </div>
  );
}
