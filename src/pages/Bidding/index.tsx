import { Footer } from "../../components/Footer";
import { HeroPages } from "../../components/HeroPages";
import { CardBidding } from "./CardBidding";
import { FilterBidding } from "./FilterBidding";
import "./styles.scss";
import mock from "./mock.json"
import { NavbarHome } from "../../components/Navbar";

const heros = [
  {
    id: 1,
    title: "Promovendo desenvolvimento humano e cidadania no Estado de Mato Grosso.",
    image: require("../../assets/img/image-1.png"),
  },
];

export function Bidding() {

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

      <FilterBidding />
      <section className="container-bidding my-3">
        {mock.map((item, index) => {
          return (
            <CardBidding item={item} key={index} />
          );
        })}
      </section>
      <Footer />
    </>
  );
}
