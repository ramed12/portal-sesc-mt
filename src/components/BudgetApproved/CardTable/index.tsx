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
                <div>Exercício:</div>
                <div>{item.exercise}</div>
            </div>
            <div className="text-label">
                <div>Nº do Contrato:</div>
                <div>{item.contract}</div>
            </div>
            <div className="text-label">
                <div>Objeto:</div>
                <div>{item.object}</div>
            </div>
            <div className="text-label">
                <div>Favorecido:</div>
                <div>{item.favorite}</div>
            </div>
            <div className="text-label">
                <div>CNPJ / CPF:</div>
                <div>{item.CNPJ_CPF}</div>
            </div>
            <div className="text-label">
                <div>Modalidade:</div>
                <div>{item.modality}</div>
            </div>
            <div className="text-label">
                <div>Data da Contratação:</div>
                <div>{item.contractDate}</div>
            </div>
            <div className="text-label">
                <div>Elemento da Despesa:</div>

                <div>{item.expense}</div>
            </div>
            <div className="text-label">
                <div>Valor do contrato:</div>
                <div>{item.contractValue}</div>
            </div>
        </div>
    );
}

export default CardTable;
