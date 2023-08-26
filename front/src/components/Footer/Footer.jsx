import Button from "../Buttons/Button";
import Logo from "../Logo/logo";
import { BiLogoFacebook, BiLogoInstagramAlt, BiLogoLinkedinSquare, BiLogoTwitter } from "react-icons/bi";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="f-wrapper paddings">
      <div className="f-container">
        <div className="f-logo flexColStart">
          <Logo />
          <p>
            Help is here. Whenever and however you need it.Essentials that pair perfectly with your favourite devices.
          </p>
          <div className="f-links flexCenter">
            <a href="#">
              <BiLogoFacebook />
            </a>
            <a href="#">
              <BiLogoInstagramAlt />
            </a>
            <a href="#">
              <BiLogoLinkedinSquare />
            </a>
            <a href="#">
              <BiLogoTwitter />
            </a>
          </div>
        </div>
        <div className="f-contact">
          <div>
            <h3>Quick Links</h3>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Shop</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <p>+99 (0) 101 0000 888 Patricia C. Amedee 4401 Waldeck Street Grapevine Nashville, Tx 76051</p>
          </div>
        </div>
        <div className="f-subscribe flexColCenter ">
          <h3>Subscribe to our email</h3>
          <h2>For latest news and updates</h2>
          <div className="f-mailBox">
            <input type="email" />
            <Button name="SUBSCRIBE" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
