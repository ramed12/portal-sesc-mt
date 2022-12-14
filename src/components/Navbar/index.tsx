import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./styles.scss";


export function NavbarHome() {

  return (
  <>
<Navbar bg="light" expand="lg" className="my-navbar">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mx-auto h-100" style={{ transition: "max-height 0.3s ease-in-out" }}>
      <NavDropdown title="Institucional" id="institucional-dropdown">
        <div className="column">
          <NavDropdown.Item href="/institucional/nossa-historia">Nossa História</NavDropdown.Item>
          <NavDropdown.Item href="/institucional/portal-transparencia">Portal da Transparência</NavDropdown.Item>
          <NavDropdown.Item href="/institucional/trabalhe-conosco">Trabalhe Conosco</NavDropdown.Item>
        </div>
        <div className="column">
          <NavDropdown.Item href="/institucional/licitacao">Licitação</NavDropdown.Item>
          <NavDropdown.Item href="/institucional/programa-estagio">Programa de Estágio</NavDropdown.Item>
          <NavDropdown.Item href="/institucional/portal-conselheiro">Portal do Conselheiro</NavDropdown.Item>
          <NavDropdown.Item href="/institucional/politica-privacidade">Política de Privacidade</NavDropdown.Item>
        </div>
      </NavDropdown>
      <Nav.Link href="/cartao-sesc">Cartão Sesc</Nav.Link>
      <Nav.Link href="/servicos">Serviços</Nav.Link>
      <NavDropdown title="Unidades" id="unidades-dropdown">
        <NavDropdown.Item href="/unidades/sesc-arsenal">Sesc Arsenal</NavDropdown.Item>
        <NavDropdown.Item href="/unidades/sesc-dr-meireles">Sesc Dr. Meireles (Balneário)</NavDropdown.Item>
        <NavDropdown.Item href="/unidades/sesc-rondonopolis">Sesc Rondonópolis</NavDropdown.Item>
        <NavDropdown.Item href="/unidades/sesc-alta-floresta">Sesc Alta Floresta</NavDropdown.Item>
        <NavDropdown.Item href="/unidades/sesc-poxoreu">Sesc Poxoréu</NavDropdown.Item>
        <NavDropdown.Item href="/unidades/sesc-unidades-moveis">Sesc Unidades Móveis</NavDropdown.Item>
        <NavDropdown.Item href="/unidades/sesc-crianca-creche">Sesc Criança - Creche</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/programacao">Programação</Nav.Link>
      <Nav.Link href="https://www.youtube.com/@SESCMTMT" target="_blank">Sesc TV</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </>
   );
 }









// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import Offcanvas from "react-bootstrap/Offcanvas";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";

// import { IMaskInput } from "react-imask";
// import { AiOutlineSearch } from "react-icons/ai";
// import { FaUserCircle } from "react-icons/fa";
// import { RiArrowDropDownLine } from "react-icons/ri";

// import "./styles.scss";
// import { requestLogin } from "../../services/auth";

// const logoSesc = require("../../assets/img/logo Sesc.png");

// export function NavbarHome() {
//   /**
//    * navbar
//    */
//   // color
//   const [backgroundColor, setBackgroundColor] = useState(false);

//   const changeBackgroundColor = () => {
//     if (window.scrollY >= 110) {
//       setBackgroundColor(true);
//     } else {
//       setBackgroundColor(false);
//     }
//   };

//   window.addEventListener("scroll", changeBackgroundColor);

//   /**
//    * modal
//    */
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const [user, setUser] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();

//   const login = async () => {
//     console.log(user, password);
//     await requestLogin(user, password)
//       .then((response) => {
//         console.log(response);
//         navigate("/portal/home");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <>
//       <Navbar
//         className={
//           backgroundColor
//             ? "navbar__default navbar__default--bg"
//             : "navbar__default"
//         }
//         fixed="top"
//         expand="xl"
//         variant="dark"
//       >
//         {/* Aqui começa o hamburguer mobile */}
//         <Container fluid className="h-100 p-0">
//           <div className="order-1 flex-md-grow-1">
//             <Link to="/">
//               <img className="img-fluid mx-5" src={logoSesc} alt="SESC-MT - Logo" />
//             </Link>
//           </div>

//           <Navbar.Toggle
//             className="order-3"
//             aria-controls={`offcanvasNavbar-expand-lg`}
//           />

//           <Navbar.Offcanvas
//             id={`offcanvasNavbar-expand-lg`}
//             className="order-xl-2"
//             aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
//             placement="end"
//           >
//             <Offcanvas.Header closeButton>
//               <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
//                 Sesc Mato Grosso
//               </Offcanvas.Title>
//             </Offcanvas.Header>

//             <Offcanvas.Body className="d-block d-xl-none h-100">
//               <Nav className="justify-content-around pe-md-3">
//                 <div className="navbar__default__dropdown px-5 px-xxl-4 ">
//                   <Link className="navbar__default__dropdown__navlink" to="#">
//                     Institucional
//                     <RiArrowDropDownLine />
//                   </Link>

//                   <div className="navbar__default__dropdown__content navbar__default__dropdown__content--institucional">
//                     <Row>
//                       <Col className="px-0">
//                         <Link
//                           className="navbar__default__dropdown__content__sublink"
//                           to="/institucional/nossa-historia"
//                         >
//                           Nossa História
//                         </Link>
//                         <Link
//                           className="navbar__default__dropdown__content__sublink"
//                           to="/institucional/portal-transparencia"
//                         >
//                           Portal da Transparência
//                         </Link>
//                         <Link
//                           className="navbar__default__dropdown__content__sublink"
//                           to="/institucional/trabalhe-conosco"
//                         >
//                           Trabalhe Conosco
//                         </Link>
//                       </Col>

//                       <Col className="px-0">
//                         <Link
//                           className="navbar__default__dropdown__content__sublink"
//                           to="/institucional/licitacao"
//                         >
//                           Licitação
//                         </Link>
//                         <Link
//                           className="navbar__default__dropdown__content__sublink"
//                           to="/institucional/programa-estagio"
//                         >
//                           Programa de Estágio
//                         </Link>
//                         <Link
//                           className="navbar__default__dropdown__content__sublink"
//                           to="/institucional/portal-conselheiro"
//                         >
//                           Portal do Conselheiro
//                         </Link>
//                       </Col>

//                       <Col className="px-0">
//                         <Link
//                           className="navbar__default__dropdown__content__sublink"
//                           to="/institucional/politica-privacidade"
//                         >
//                           Política de Privacidade
//                         </Link>
//                       </Col>
//                     </Row>
//                   </div>
//                 </div>

//                 <div className="navbar__default__dropdown px-5 px-xxl-4 ">
//                   <Link
//                     className="navbar__default__dropdown__navlink"
//                     to="/cartao-sesc"
//                   >
//                     Cartão Sesc
//                   </Link>
//                 </div>

//                 <div className="navbar__default__dropdown px-5 px-xxl-4 ">
//                   <Link
//                     className="navbar__default__dropdown__navlink"
//                     to="/servicos"
//                   >
//                     Serviços
//                   </Link>
//                 </div>

//                 <div className="navbar__default__dropdown px-5 px-xxl-4 ">
//                   <Link
//                     className="navbar__default__dropdown__navlink"
//                     to="/unidades"
//                   >
//                     Unidades
//                   </Link>
//                 </div>

//                 <div className="navbar__default__dropdown px-5 px-xxl-4 ">
//                   <Link
//                     className="navbar__default__dropdown__navlink"
//                     to="/programacao"
//                   >
//                     Programação
//                   </Link>
//                 </div>

//                 <div className="navbar__default__dropdown px-5 px-xxl-4 ">
//                   <Link
//                     className="navbar__default__dropdown__navlink"
//                     to="https://www.youtube.com/@SESCMTMT"
//                     target="_blank"
//                   >
//                     Sesc TV
//                   </Link>
//                 </div>

//                 <div className="navbar__default__search ms-0 ms-xl-4 mb-2">
//                   <div className="navbar__default__search__container">
//                     <Form className="d-flex">
//                       <span className="navbar__default__search__container__icon">
//                         <AiOutlineSearch />
//                       </span>

//                       <input
//                         type="search"
//                         className="navbar__default__search__container__input"
//                       />
//                     </Form>
//                   </div>
//                 </div>
//               </Nav>

//               <button
//                 className="navbar__default__button d-block d-md-none"
//                 onClick={handleShow}
//               >
//                 <FaUserCircle />

//                 <span className="navbar__default__button__text">Entrar</span>
//               </button>
//             </Offcanvas.Body>

//             {/* Aqui Começa desenvolvimento WEB */}

//             <Offcanvas.Body className="d-xl-flex h-100">
//               <Nav className="justify-content-center align-items-center flex-grow-1 pe-md-3 d-none d-sm-flex">
//                 <div className="navbar__default__dropdown px-3 px-xxl-4">
//                   <Link className="navbar__default__dropdown__navlink" to="#">
//                     Institucional
//                   </Link>

//                   <div className="navbar__default__dropdown__content navbar__default__dropdown__content--institucional">
//                     <Row>
//                       <Col className="px-0">
//                         <Link
//                           className="navbar__default__dropdown__content__sublink"
//                           to="/institucional/nossa-historia"
//                         >
//                           Nossa História
//                         </Link>
//                         <Link
//                           className="navbar__default__dropdown__content__sublink"
//                           to="/institucional/portal-transparencia"
//                         >
//                           Portal da Transparência
//                         </Link>
//                         <Link
//                           className="navbar__default__dropdown__content__sublink"
//                           to="/institucional/trabalhe-conosco"
//                         >
//                           Trabalhe Conosco
//                         </Link>
//                       </Col>

//                       <Col className="px-0">
//                         <Link
//                           className="navbar__default__dropdown__content__sublink"
//                           to="/institucional/licitacao"
//                         >
//                           Licitação
//                         </Link>
//                         <Link
//                           className="navbar__default__dropdown__content__sublink"
//                           to="/institucional/programa-estagio"
//                         >
//                           Programa de Estágio
//                         </Link>
//                         <Link
//                           className="navbar__default__dropdown__content__sublink"
//                           to="/institucional/portal-conselheiro"
//                         >
//                           Portal do Conselheiro
//                         </Link>
//                       </Col>

//                       <Col className="px-0">
//                         <Link
//                           className="navbar__default__dropdown__content__sublink"
//                           to="/institucional/politica-privacidade"
//                         >
//                           Política de Privacidade
//                         </Link>
//                       </Col>
//                     </Row>
//                   </div>
//                 </div>

//                 <div className="navbar__default__dropdown px-3 px-xxl-4">
//                   <Link
//                     className="navbar__default__dropdown__navlink"
//                     to="/cartao-sesc"
//                   >
//                     Cartão Sesc
//                   </Link>
//                 </div>

//                 <div className="navbar__default__dropdown px-3 px-xxl-4">
//                   <Link
//                     className="navbar__default__dropdown__navlink"
//                     to="/servicos"
//                   >
//                     Serviços
//                   </Link>
//                 </div>

//                 <div className="navbar__default__dropdown px-3 px-xxl-4">
//                   <Link
//                     className="navbar__default__dropdown__navlink"
//                     to="/unidades"
//                   >
//                     Unidades
//                   </Link>

//                   <div className="navbar__default__dropdown__content navbar__default__dropdown__content--unidades">
//                     <Row>
//                       <Col className="px-0">
//                         <Link
//                           className="navbar__default__dropdown__content__sublink"
//                           to="/unidades/sesc-arsenal"
//                         >
//                           Sesc Arsenal
//                         </Link>
//                         <Link
//                           className="navbar__default__dropdown__content__sublink"
//                           to="/unidades/sesc-dr-meireles"
//                         >
//                           Sesc Dr. Meireles (Balneário)
//                         </Link>
//                         <Link
//                           className="navbar__default__dropdown__content__sublink"
//                           to="/unidades/sesc-rondonopolis"
//                         >
//                           Sesc Rondonópolis
//                         </Link>
//                         <Link
//                           className="navbar__default__dropdown__content__sublink"
//                           to="/unidades/sesc-alta-floresta"
//                         >
//                           Sesc Alta Floresta
//                         </Link>
//                       </Col>

//                       <Col className="px-0">
//                         <Link
//                           className="navbar__default__dropdown__content__sublink"
//                           to="/unidades/sesc-poxoreu"
//                         >
//                           Sesc Poxoréu
//                         </Link>
//                         <Link
//                           className="navbar__default__dropdown__content__sublink"
//                           to="/unidades/sesc-caceres"
//                         >
//                           Sesc Cáceres
//                         </Link>
//                         <Link
//                           className="navbar__default__dropdown__content__sublink"
//                           to="/unidades/sesc-barao-de-melgaco"
//                         >
//                           Sesc Barão de Melgaço
//                         </Link>
//                         <Link
//                           className="navbar__default__dropdown__content__sublink"
//                           to="/unidades/sesc-unidade-movel"
//                         >
//                           Unidade Móvel
//                         </Link>
//                       </Col>

//                       <Col className="px-0">
//                         <Link
//                           className="navbar__default__dropdown__content__sublink"
//                           to="/unidades/sesc-equilibrio"
//                         >
//                           Sesc Equilíbrio
//                         </Link>
//                         <Link
//                           className="navbar__default__dropdown__content__sublink"
//                           to="/unidades/sesc-restaurante-comercio"
//                         >
//                           Sesc Restaurante do Comércio
//                         </Link>
//                         <Link
//                           className="navbar__default__dropdown__content__sublink"
//                           to="/unidades/sesc-odonto"
//                         >
//                           Sesc Odonto
//                         </Link>
//                         <Link
//                           className="navbar__default__dropdown__content__sublink"
//                           to="/unidades/sesc-escola"
//                         >
//                           Sesc Escola
//                         </Link>
//                       </Col>

//                       <Col className="px-0">
//                         <Link
//                           className="navbar__default__dropdown__content__sublink"
//                           to="/unidades/sesc-unidades-moveis"
//                         >
//                           Sesc Unidades Móveis
//                         </Link>
//                         <Link
//                           className="navbar__default__dropdown__content__sublink"
//                           to="/unidades/sesc-crianca-creche"
//                         >
//                           Sesc Criança - Creche
//                         </Link>
//                       </Col>
//                     </Row>
//                   </div>
//                 </div>

//                 <div className="navbar__default__dropdown px-3 px-xxl-4">
//                   <Link
//                     className="navbar__default__dropdown__navlink"
//                     to="/programacao"
//                   >
//                     Programação
//                   </Link>
//                 </div>

//                 <div className="navbar__default__dropdown px-3 px-xxl-4">
//                   <Link
//                     className="navbar__default__dropdown__navlink"
//                     to="https://www.youtube.com/@SESCMTMT"
//                     target="_blank"
//                   >
//                     Sesc TV
//                   </Link>
//                 </div>

//                 <div className="navbar__default__search ms-4">
//                   <div className="navbar__default__search__container">
//                     <Form className="d-flex">
//                       <span className="navbar__default__search__container__icon">
//                         <AiOutlineSearch />
//                       </span>

//                       <input
//                         type="search"
//                         className="navbar__default__search__container__input"
//                       />
//                     </Form>
//                   </div>
//                 </div>
//               </Nav>

//               <button
//                 className="navbar__default__button d-block d-md-none"
//                 onClick={handleShow}
//               >
//                 <FaUserCircle />

//                 <span className="navbar__default__button__text">Entrar</span>
//               </button>
//             </Offcanvas.Body>
//           </Navbar.Offcanvas>

//           <button
//             className="navbar__default__button d-none d-md-block order-2 border-0 me-md-3"
//             onClick={handleShow}
//           >
//             <FaUserCircle />

//             <span className="navbar__default__button__text">Entrar</span>
//           </button>

//           <Modal
//             show={show}
//             onHide={handleClose}
//             centered
//             className="modal_login"
//           >
//             <Modal.Header className="border-0">
//               <Button
//                 className="align-self-start p-2 border-0"
//                 variant="btn link"
//                 onClick={handleClose}
//               >
//                 X
//               </Button>

//               <img
//                 className="logo_Sesc"
//                 src="data:image/png;base64,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"
//                 alt="Sesc-Logo"
//               />
//             </Modal.Header>

//             <Modal.Body style={{ maxWidth: "35rem" }}>
//               <Form>
//                 <Form.Group
//                   className="mb-4 form_modal"
//                   controlId="exampleForm.ControlInput1"
//                 >
//                   <Form.Label>
//                     <span className="login_Cpf fw-bold">CPF</span>
//                   </Form.Label>
//                   <Form.Control
//                     style={{ width: "50%" }}
//                     className="login_Cpf"
//                     as={IMaskInput}
//                     type="cpf"
//                     mask="000.000.000-00"
//                     placeholder="Digite o seu CPF"
//                     onChange={(event) => setUser(event.target.value)}
//                   />
//                 </Form.Group>
//                 <Form.Group
//                   className="mb-4 form_modal"
//                   controlId="exampleForm.ControlInput1"
//                 >
//                   <Form.Label>
//                     <span className="login_Senha fw-bold">Senha</span>
//                     <a
//                       href="#"
//                       className="font_Login"
//                       style={{ maxWidth: "1rem" }}
//                     >
//                       Esqueci a senha
//                     </a>
//                   </Form.Label>

//                   <Form.Control
//                     style={{ width: "50%" }}
//                     type="password"
//                     placeholder="Digite sua senha"
//                     onChange={(event) => setPassword(event.target.value)}
//                   />
//                 </Form.Group>
//                 <div className="input-group mb-4">
//                   <div className="input-group-text p-0 bg-transparent border-0">
//                     <input
//                       className="form-check-input m-0"
//                       type="checkbox"
//                       value=""
//                     />
//                   </div>
//                   <span className="span_login ms-2">Lembrar CPF e senha</span>
//                 </div>
//               </Form>
//             </Modal.Body>

//             <Modal.Footer className="d-flex flex-column mb-3 border-0 p-0">
//               <Button
//                 className="button_Login p-2"
//                 variant="primary"
//                 onClick={() => login()}
//                 style={{ width: "16rem", height: "3rem" }}
//               >
//                 <span className="button_Entrar">Entrar</span>
//               </Button>
//               <Button className="count_Login p-2 border-0" variant="btn link">
//                 Criar conta
//               </Button>
//             </Modal.Footer>
//           </Modal>
//         </Container>
//       </Navbar>
//     </>
//   );
// }


