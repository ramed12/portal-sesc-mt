import "./styles.scss"

function LineTable(props: any) {
    const pageNumbers = [];
    const item = props.item;

    for (let i = 1; i <= props.totalPages; i++) {
        pageNumbers.push(i);
    }


    return (
        <div>
            <div className="list-table">
                <div>{item.exercise}</div>
                <div>{item.contract}</div>
                <div>{item.object}</div>
                <div>{item.favorite}</div>
                <div>{item.CNPJ_CPF}</div>
                <div>{item.modality}</div>
                <div>{item.contractDate}</div>
                <div>{item.expense}</div>
                <div>{item.contractValue}</div>
            </div>
        </div>
    );
}

export default LineTable;
