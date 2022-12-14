import "./styles.scss";


export function CardCompany(props: any) {

    return (
        <>
            <div className="card-company">
                <img src={props.image} alt="" />
                <div className="card-content">
                    <div className="text">
                        <p>{props.title}</p>
                        <p>{props.description}</p>
                    </div>
                    <a>Solicitar</a>
                </div>
            </div>
        </>
    );
}