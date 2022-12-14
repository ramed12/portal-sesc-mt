import "./styles.scss";
import { NavbarPortal } from "../../../components/NavbarPortal";
import { ButtonFunctionality } from "./ButtonFunctionality";
import { Routes } from "./routes";
import { Badge } from "./Badge/Index";
import { Wallet } from "./Wallet";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useEffect, useState } from "react";
import { profile } from "../../../services/profile";

export function HomePage() {
  const [viewBalance, setViewBalance] = useState(true)
  const [userInfo, setUserInfo] = useState<any>(null);

  useEffect(() => {
    getProfile()
  }, []);

  const getProfile = async () => {
    profile()
      .then((response: any) => {
        setUserInfo(response)
      })
  }

  return (
    <div>
      <NavbarPortal />
      <div className="container-data">
        <div>
          <div className="card-welcome">
            <div className="name-account">
              <p>Ola, Andrew!</p>
              {/* <p>Ola, {userInfo?.name}!</p> */}
              <a onClick={() => setViewBalance(!viewBalance)}>
                {viewBalance ? <AiFillEye /> : <AiFillEyeInvisible />}
              </a>
            </div>
            <p className="subtitle">Seja bem vindo de volta!</p>
          </div>
          <div className="card-data">
            <div className="div_first">
              <Badge />
            </div>
            <div className="div_last">
              <div className="card-wallet">
                <Wallet viewBalance={viewBalance} valueAccount={userInfo?.balance} />
              </div>
              <div className="card-functionality">
                <div className="functionality">
                  {Routes.map((item, index) => (
                    <ButtonFunctionality key={index} props={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
