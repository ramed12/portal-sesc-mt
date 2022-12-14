
import { HeroPages } from "../../components/HeroPages";
import { Footer } from "../../components/Footer";
import "./styles.scss";
import { ContactForms } from "./forms";
import { NavbarHome } from "../../components/Navbar";


const heros = [
    {
        id: 1,
        title: "Promovendo desenvolvimento humano e cidadania no Estado de Mato Grosso.",
        image: require("../../assets/img/image-1.png"),
    },
];


export function ContactUs() {

    return (
        <>
            <NavbarHome />
            {heros.map((hero) => {
                return (
                    <HeroPages
                        key={hero.id}
                        title={hero.title}
                        image={hero.image}
                    />
                );
            })}
            <div className="container-contact">
                <div className="card-contact">
                    <div className="card-header">
                        <div className="text">
                            <p>Departamento Regional </p>
                            <p>O serviço do Fale com o Sesc funciona de segunda a sexta, das 9 às 18 horas. Questões enviadas fora desse horário serão respondidas no próximo dia útil.</p>
                        </div>
                        <a className="btn-ombuds" href="/ouvidoria">Ouvidoria</a>
                    </div>
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
                            <textarea className="textarea"></textarea>
                        </div>
                    </div>
                    <a className="btn-submit">Enviar</a>
                </div>
            </div>
            <Footer />
        </>
    );
}
