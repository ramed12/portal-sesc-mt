import "./styles.scss";

export function HeroPages(props: any) {
  return (
    <div className="hero" style={{ backgroundImage: `url(${props.image})` }}>
      <div className="hero__content">
        <h1 className="hero__content__title mb-2">{props.title}</h1>

        <p className="hero__content__subtitle mb-0">{props.description}</p>
        {props.content}
      </div>

      <div className="hero__overlay" />
    </div>
  );
}
