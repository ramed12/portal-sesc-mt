import "./styles.scss"

function CardTable(props: any) {
    const pageNumbers = [];
    const item = props.item;

    for (let i = 1; i <= props.totalPages; i++) {
        pageNumbers.push(i);
    }


    return (
        <div className="card-label">
            <div className="text-label">
                <div>Processo Seletivo:</div>
                <div>{item.selectiveProcess}</div>
            </div>
            <div className="text-label">
                <div>Ensino:</div>
                <div>{item.teaching}</div>
            </div>
            <div className="text-label">
                <div>Curso:</div>
                <div>{item.charge}</div>
            </div>
            <div className="text-label">
                <div>Local:</div>
                <div>{item.local}</div>
            </div>
            <div className="text-label">
                <div>Vagas:</div>
                <div>{item.vacancies}</div>
            </div>
            <div className="text-label">
                <div>Carga horária:</div>
                <div>{item.workload}</div>
            </div>
            <div className="text-label">
                <div>Salário:</div>
                <div>{item.wage}</div>
            </div>
            <div className="text-label">
                <div>Auxílio Transporte:</div>
                <div>{item.transportationAssistance}</div>
            </div>
            <div>
                <a onClick={() => props.onItemChange(item.edicts)} className="btn-action">
                    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.42969 0.5V6.08621C1.42969 6.74468 1.69126 7.37617 2.15687 7.84178C2.62248 8.30739 3.25398 8.56897 3.91245 8.56897C4.57091 8.56897 5.20241 8.30739 5.66802 7.84178C6.13363 7.37617 6.3952 6.74468 6.3952 6.08621V2.36207C6.3952 2.03283 6.26442 1.71708 6.03161 1.48428C5.79881 1.25148 5.48306 1.12069 5.15383 1.12069C4.82459 1.12069 4.50884 1.25148 4.27604 1.48428C4.04323 1.71708 3.91245 2.03283 3.91245 2.36207V6.7069M8.25727 1.12069H16.3262C16.6555 1.12069 16.9712 1.25148 17.204 1.48428C17.4368 1.71708 17.5676 2.03283 17.5676 2.36207V17.2586C17.5676 17.5879 17.4368 17.9036 17.204 18.1364C16.9712 18.3692 16.6555 18.5 16.3262 18.5H3.91245C3.58321 18.5 3.26746 18.3692 3.03466 18.1364C2.80185 17.9036 2.67107 17.5879 2.67107 17.2586V10.431M14.4642 6.08621H9.49865M14.4642 9.81034H9.49865M14.4642 13.5345H5.77451" stroke="#222222" strokeWidth="1.5" />
                    </svg>
                    <p>Ver anexos</p>
                </a>
            </div>
        </div>
    );
}

export default CardTable;
