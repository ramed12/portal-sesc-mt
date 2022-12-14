import "./styles.scss";

export function ButtonFunctionality(props: any) {
    const item = props.props

    return (
        <div className="button">
            <div className="iconButton">
                <img src={item.icon} alt="" />
            </div>
            <div className="texts">
                <p className="titleText">{item.title}</p>
                <p className="subtitleText">{item.subtitle}</p>
            </div>
        </div>
    );
}
