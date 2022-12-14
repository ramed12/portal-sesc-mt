import "./styles.scss";
import logo from "../../../assets/icons/logo-login.svg";
import { IMaskInput } from "react-imask";

export function Login() {

    return (
        <>
            <div className="card-login">
                <div className="card-logo">
                    <img src={logo} alt="" />
                </div>
                <div className="card-form">
                    <div className="text-input">
                        <label>CPF</label>
                        <div>
                            <IMaskInput
                                mask="000.000.000-00"
                            />
                        </div>
                    </div>
                    <div className="text-input">
                        <div className="reset-password">
                            <label>Senha</label>
                            <a>Esqueci</a>
                        </div>
                        <div>
                            <input type="password" placeholder="Digite sua senha" />
                        </div>
                    </div>

                    <div className="remember">
                        <input type="checkbox" />
                        <p>Lembrar CPF e senha</p>
                    </div>
                </div>
                <a className="submit">Entrar</a>
                <a className="register">Criar Conta</a>
            </div>
        </>
    );
}
