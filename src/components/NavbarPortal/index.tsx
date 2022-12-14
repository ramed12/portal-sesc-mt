import "./styles.scss";
import logo from "../../assets/img/logo Sesc.png"
import { AiOutlineBell, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsTicketPerforated } from "react-icons/bs";

export function NavbarPortal() {

    const toggleMenu = (type: string) => {
        "bell" === type ? console.log("Toggle bell") : "ticket" === type ? console.log("Toggle ticket") : "menu" === type && console.log("Toggle menu");
    }

    return (
        <div className="navbar navbarPortal">
            <div>
                <img src={logo} />
            </div>
            <div>
                <div className="search">
                    <div>
                        <AiOutlineSearch />
                    </div>
                    <input type="text" placeholder="O que voce está procurando?" />
                </div>
            </div>
            <div className="menu">
                <a onClick={() => toggleMenu('bell')}>
                    <AiOutlineBell />
                </a>
                <a onClick={() => toggleMenu('ticket')}>
                    <BsTicketPerforated />
                </a>
                <a onClick={() => toggleMenu('menu')}>
                    <AiOutlineMenu />
                </a>
            </div>
        </div>
    );
}
