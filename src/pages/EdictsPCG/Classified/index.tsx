import { AiOutlineSearch } from "react-icons/ai";
import "./styles.scss";

export function Classified(props: any) {
    const item = props.item
    return (
        <>
            <div className="card-classified">
                <div className="classified-header">
                    <p>Classificados</p>
                </div>
                <div className="classified-body">
                    <div className="classified-form">
                        <div className="text-field field-3">
                            <label>Ano</label>
                            <input disabled type="text" value='2021' />
                        </div>
                        <div className="text-field field-3">
                            <label>Unidade Orçamentária</label>
                            <input disabled type="text" value={item.unit}/>
                        </div>
                        <div className="text-field field-6">
                            <label>Projeto</label>
                            <input disabled type="text" value={item.project}/>
                        </div>
                        <div className="text-field field-6">
                            <label>Turma</label>
                            <input disabled type="text" value={item.class}/>
                        </div>
                        <div className="text-field field-6">
                            <label>Complemento</label>
                            <input disabled type="text" value={item.complement}/>
                        </div>
                        <div className="text-field field-12">
                            <div className="search">
                                <div>
                                    <AiOutlineSearch />
                                </div>
                                <input type="text" placeholder="O que voce está procurando?" />
                            </div>
                        </div>
                    </div>
                    <div className="classified-table">
                        <table className="styled-table">
                            <thead>
                                <tr>
                                    <th>Inscrição</th>
                                    <th>Nome</th>
                                    <th>Situação</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1068</td>
                                    <td>EDUARDO MIGUEL ANDRADE DA CRUZ</td>
                                    <td className="actions">
                                        <a className="status-action">
                                            <p>Evasão</p>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
