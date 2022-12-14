import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { CardSesc } from "../pages/SescCard";
import { Services } from "../pages/Services";
import { Units } from "../pages/Units";
import { UnitDetails } from "../pages/Units/UnitDetails";
import { Programming } from "../pages/Programing";
import { News_Component } from "../pages/News_Component";
import { Institucional } from "../pages/Institucional";
import { HomePage } from "../pages/Portal/Home";
import PrivateRoutes from "./RouteRestriction/PrivateRoutes";
import PublicRoutes from "./RouteRestriction/PublicRoutes";
import { Bidding } from "../pages/Bidding";
import { News_Card } from "../pages/News_Component/News_Card";
import { News_Card_Poor } from "../pages/News_Component/News_Card_Poor";
import { PortalTransparency } from "../pages/PortalTransparency";
import { PortalAdvisor } from "../pages/PortalAdvisor";
import { ContactUs } from "../pages/ContactUs";
import { MealRequest } from "../pages/MealRequest";
import { Ombuds } from "../pages/Ombuds";
import { EdictsPCG } from "../pages/EdictsPCG";
import { InternshipProgram } from "../pages/InternshipProgram";
import { Privacy_LGPD } from "../pages/LGPD";
import { UnitComponent } from "../pages/Units/UnitComponent";
import { PagesComponent } from "../pages/PortalTransparency/PagesComponent";
import { WorkWithUs } from "../pages/WorkWithUs";


export function Router() {
  // const handleLogout = () => {
  //   localStorage.removeItem('accessToken');
  // };

  return (
    <Routes>
      <Route path="" element={<PublicRoutes />}>
        <Route path="/" element={<Home />} />
        <Route path="/cartao-sesc" element={<CardSesc />} />
        <Route path="/servicos" element={<Services />} />
        <Route path="/unidades" element={<Units />} />
        <Route path="/unidades/:id" element={<UnitDetails />} />
        <Route path="/unidade/:id" element={<UnitComponent />} />
        <Route path="/programacao" element={<Programming />} />
        <Route path="/noticias" element={<News_Component />} />
        <Route path="/noticias1" element={<News_Card />} />
        <Route path="/noticias2" element={<News_Card_Poor />} />
        <Route path="/fale-conosco" element={<ContactUs />} />
        <Route path="/ouvidoria" element={<Ombuds/>} />
        <Route path="/trabalhe-conosco" element={<WorkWithUs/>} />
        <Route path="/institucional/nossa-historia" element={<Institucional />} />
        <Route path="/institucional/licitacao" element={<Bidding />} />
        <Route path="/institucional/portal-transparencia" element={<PortalTransparency />} />
        <Route path="/institucional/portal-transparencia/:id" element={<PagesComponent />} />
        <Route path="/institucional/solicitacao-refeicao" element={<MealRequest />} />
        <Route path="/institucional/portal-conselheiro" element={<PortalAdvisor />} />
        <Route path="/institucional/editais-pcg" element={<EdictsPCG />} />
        <Route path="/institucional/programa-estagio" element={<InternshipProgram />} />
        <Route path="/institucional/politica-privacidade" element={<Privacy_LGPD />} />
      </Route>

      <Route path="/" element={<PrivateRoutes />}>
        <Route path="/" element={<Navigate replace to="portal/home" />} />
        <Route path="/portal/home" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
