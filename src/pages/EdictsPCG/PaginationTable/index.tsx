import CardTable from "../CardTable";
import LineTable from "../LineTable";
import "./styles.scss"

function PaginatedTable(props: any) {
    const itemsToRender = props.data.items[props.currentPage - 1]

    return (
        <div className="table">
            <div className="child-page">
                <p>{props.data.total} itens encontrados</p>
            </div>
            <div className="thead">
                <div></div>
                <div>Unidade</div>
                <div>Projeto</div>
                <div>Curso</div>
                <div>Inscrições</div>
                <div>Ação</div>
            </div>
            <div className="tbody">
                {itemsToRender.map((item: any) => (
                    <LineTable key={item.id} item={item} onItemChange={props.onItemChange} />
                ))}
            </div >

            <div  className="tcard">
                {itemsToRender.map((item: any) => (
                    <CardTable key={item.id} item={item} onItemChange={props.onItemChange} />
                ))}
            </div>
        </div>

    );
}

export default PaginatedTable;
