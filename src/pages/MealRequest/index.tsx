
import { HeroPages } from "../../components/HeroPages";
import { Footer } from "../../components/Footer";
import "./styles.scss";
import { CardCompany } from "./CardCompany";
import { cards } from "./mock";
import { NavbarHome } from "../../components/Navbar";


const heros = [
    {
        id: 1,
        title: "Solicitação de Refeição",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.",
        image: require("../../assets/img/image-9.png"),
    },
];


export function MealRequest() {

    return (
        <>
            <NavbarHome/>
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

            <div className="container-request">
                {cards.map((item) => {
                    return (
                        <CardCompany
                            className="card-company"
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                        />
                    );
                })}
            </div>
            <Footer />
        </>
    );
}
