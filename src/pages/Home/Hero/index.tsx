import "./styles.scss";

export function Hero() {
  const imageSrc = require("../../../assets/video/COLÔNIA DE FÉRIAS SESC - 2022.mp4");
  const iconSrc = require("../../../assets/icons/seta-down.png");

  return (
    <div className="heromain">
      <video autoPlay loop muted src={imageSrc} className="heromain__image" />

      <div className="heromain__content__main">
        <h1 className="heromain__title mx-5">Sua história faz a nossa!</h1>

        <p className="heromain__title_p mx-5">
          Fomos criados lá atrás, há mais de 70 anos. Não demorou muito, já
          fazíamos parte da vida das pessoas e comunidades. E depois de todo
          esse tempo, ainda podemos fazer mais. O Sesc é a casa do comerciário,
          mas também é palco da cultura, do lazer e da educação.
        </p>
      </div>

      <div className="d-flex flex-column justify-content-center align-items-center position-absolute bottom-0 start-50 w-100 translate-middle-x mb-3 mb-md-4 mb-xl-5">
        <p className="heromain__footer mb-2">Role a página para baixo</p>

        <img
          className="heromain__footer__img img-fluid"
          src={iconSrc}
          alt="SESC MT - Role para baixo"
        />
      </div>
    </div>
  );
}
