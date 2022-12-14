
import { HeroPages } from "../../components/HeroPages";
import { Footer } from "../../components/Footer";
import "./styles.scss";
import { ContactForms } from "./forms";
import { NavbarHome } from "../../components/Navbar";


const heros = [
    {
        id: 1,
        title: "Ouvidoria",
        image: require("../../assets/img/image-1.png"),
    },
];


export function Ombuds() {

    const Description = () => {
        return (<div className="header-hero">
            <p>A ouvidoria é um canal de comunicação entre o cliente e os gestores do Sesc-MT (Presidente, Diretores, Coordenadores e Gerentes das Unidades). Nesse canal você pode registrar elogios, denúncias, reclamações, solicitações e sugestões, e ainda, pedidos de acesso à informação.</p>
            <p>Acolhemos toda manifestação com atenção e respeito, porque sabemos que é através dela que poderemos melhorar nossos serviços. Portanto, participe e ajude a construir um Sesc-MT ainda melhor. Sua opinião é muito importante para nós!</p>
        </div>)
    }
    return (
        <>
            <NavbarHome/>
            {heros.map((hero) => {
                return (
                    <HeroPages
                        key={hero.id}
                        title={hero.title}
                        content={<Description />}
                        image={hero.image}
                    />
                );
            })}
            <div className="container-ombuds">
                <div className="card-ombuds">
                    <div className="card-forms">
                        {ContactForms.map((field) => {
                            if (field.type === "input") {
                                return (
                                    <div className={`text-input ${field.class}`} key={field.value}>
                                        <div className="label-input">
                                            <label>{field.label}
                                                {field.required === true &&
                                                    <span className="field-required"> *</span>
                                                }
                                            </label>
                                            {field.checkbox === true &&
                                                <div className="checkbox">
                                                    <input type="checkbox" />
                                                    <label>{field.labelCheckbox}</label>
                                                </div>
                                            }
                                        </div>
                                        <input
                                            type="text"
                                            id={field.value}
                                            name={field.value}
                                            required={field.required}
                                        />
                                    </div>
                                );
                            } else if (field.type === "select") {
                                return (
                                    <div className={`text-input ${field.class}`} key={field.value}>
                                        <label>{field.label}
                                            {field.required === true &&
                                                <span className="field-required"> *</span>
                                            }
                                        </label>
                                        <select
                                            placeholder={field.label}
                                            id={field.value}
                                            name={field.value}
                                            required={field.required}
                                        >
                                            <option value="">Selecione uma opção</option>
                                        </select>
                                    </div>
                                );
                            }
                            return null;
                        })}
                        <div className="text-textarea">
                            <label>Mensagem
                                <span className="field-required"> *</span>
                            </label>
                            <textarea className="textarea"></textarea>
                        </div>

                        <div className="file-drag">
                            <div>
                                <p>Arraste e solte o seu arquivo aqui. Seu arquivo deverá ter até 5 mb.</p>
                                <p>(são aceitos os seguintes formatos: doc, docx, pdf, xls, xlsx, jpg, jpeg, png, gif, zip e rar)</p>
                                <button className="btn-file">Anexar</button>
                            </div>
                        </div>
                        <div>
                            <p className="required-forms"><span>*&nbsp;</span> Os campos marcados com asterisco&nbsp;(<span>*</span>)&nbsp;são obrigatórios</p>
                        </div>
                    </div>
                    <div className="form-button">
                        <button className="btn-submit">Enviar</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
