
import { HeroPages } from "../../components/HeroPages";
import { Footer } from "../../components/Footer";
import "./styles.scss";
import { NavbarHome } from "../../components/Navbar";
import { CourseForms, ExperiencesForms, TrainingForms, WorkDetailsForms, WorkForms } from "./mock";
import { FormsItems } from "./FormsItems";
import { FormsArray } from "./FormsArray";


const heros = [
    {
        id: 1,
        title: "Trabalhe Conosco",
        description: "Aqui você encontra todas as informações sobre os nossos processos seletivos.",
        image: require("../../assets/img/image-1.png"),
    },
];


export function WorkWithUs() {

    return (
        <>
            <NavbarHome />
            {heros.map((hero) => {
                return (
                    <HeroPages
                        key={hero.id}
                        title={hero.title}
                        description={hero.description}
                        image={hero.image}
                    />
                );
            })}
            <div className="container-work">
                <div className="card-work">
                    <div className="card-forms">
                        <FormsItems forms={WorkForms} />
                        <div style={{ width: '100%' }}>
                            <p>Dados Complementares</p>
                        </div>
                        <FormsItems forms={WorkDetailsForms} />

                        <div className="forms-array">
                            <p className="title">Formação:</p>
                            <FormsArray forms={TrainingForms} title='Formação'/>
                        </div>

                        <div className="forms-array">
                            <p className="title">Cursos:</p>
                            <FormsArray forms={CourseForms} title='Cursos'/>
                        </div>

                        <div className="forms-array">
                            <p className="title">Experiencias Profissionais:</p>
                            <FormsArray forms={ExperiencesForms} title='Experiencias'/>
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
                        <button className="btn-submit">Salvar</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
