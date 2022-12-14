import "./styles.scss";

export function Wallet(props: any) {

    return (
        <div className="container-wallet">
            <div className="card-title">
                <p>Saldo</p>
            </div>
            <div className="card-balance">
                {/* <p className={props.viewBalance ? '' : 'blur'}>R$ {props.valueAccount}</p> */}
                <p className={props.viewBalance ? '' : 'blur'}>R$ 100,50</p>
            </div>
        </div>
    );
}
