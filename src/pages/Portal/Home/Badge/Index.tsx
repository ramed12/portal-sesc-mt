import "./styles.scss";
import Download from "../../../../assets/icons/download.svg"
import Avatar from "../../../../assets/img/avatarDefault.png"

export function Badge() {
    const qrCode = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Link_pra_pagina_principal_da_Wikipedia-PT_em_codigo_QR_b.svg/800px-Link_pra_pagina_principal_da_Wikipedia-PT_em_codigo_QR_b.svg.png"
    return (
        <div className="card-container background-default">
            <div>
                <img src={Download} />
            </div>
            <div className="card-user">
                <div className="card-center">
                    <div className="avatar">
                        <img src={Avatar} />
                    </div>
                </div>
                <div className="card-center">
                    <div>
                        <p>Nome</p>
                        <p className="bday">00/00/0000</p>
                    </div>
                </div>
                <div className="card-center">
                    <div className="typeCredential">
                        <p>Credencial Atividades</p>
                        <p>Público em Geral</p>
                    </div>
                </div>
                <div className="card-center">
                    <img src={qrCode} className="qrCode" />
                </div>
                <div className="card-center">
                    <div className="validityAndDepartment">
                        <p>Validade nacional: 00/0000</p>
                        <p>Departamento Regional</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
