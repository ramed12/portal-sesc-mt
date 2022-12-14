import "./styles.scss";

export function ResetPassword() {

    return (
        <>  
            <div className="card-header-modal">
                <p>Alterar Senha</p>
            </div>
            <div className="card-login">
                <div className="card-form">
                    <div className="text-input">
                        <div className="reset-password">
                            <label>Senha atual</label>
                        </div>
                        <div>
                            <input type="password" placeholder="Digite sua senha" />
                        </div>
                    </div>
                    <div className="text-input">
                        <div className="reset-password">
                            <label>Nova Senha</label>
                        </div>
                        <div>
                            <input type="password" placeholder="Digite sua senha" />
                        </div>
                    </div>
                    <div className="text-input">
                        <div className="reset-password">
                            <label>Confirme a Nova Senha</label>
                        </div>
                        <div>
                            <input type="password" placeholder="Digite sua senha" />
                        </div>
                    </div>
                </div>
                <a className="submit">Salvar</a>
                <a className="register">Sair</a>
            </div>
        </>
    );
}
