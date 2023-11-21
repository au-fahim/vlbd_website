import Image from "next/image";
import { BiLogoWhatsapp } from "react-icons/bi";
import MainWrapper from "./MainWrapper";

import logo from "../../../public/logo/vlbd_black.png";
function Nav() {

  console.log(logo);
  return (
    <>
      <header>
        <MainWrapper>
          <div className="header_inner">
            <Image src={logo} alt="Vlbd Logo" width={100} />

            <nav>
              <ul>
                <li>Home</li>
                <li>Our Services</li>
                <li>Visa Guide</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>News & Updates</li>
              </ul>
            </nav>

            <button className="wta_btn">
              <BiLogoWhatsapp />
              <span>WhatsApp</span>
            </button>
          </div>
        </MainWrapper>
      </header>
    </>
  );
}

export default Nav;
