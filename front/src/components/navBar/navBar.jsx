import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { BiSearch, BiShoppingBag } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../Logo/logo";
import Search from "../searchBox/search";
import "./navBar.css";

export default function NavBar() {
  const [search, setSearch] = useState(false);
  const [link, setLink] = useState(false);

  return (
    <div className="n-wrapper flexStart">
      <nav className=" flexStart innerWidth  ">
        <div className="n-logo ">
          <Logo />
        </div>
        <div className={link ? "n-links flexStart  innerWidth active" : "n-links flexStart innerWidth "}>
          <ul className="flexCenter">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Cart page</a>
            </li>
          </ul>
          <div className="n-contact flexCenter">
            <BiSearch onClick={() => setSearch(true)} style={{ cursor: "pointer" }} />
            <BiShoppingBag />
            <a href="#">login</a>
          </div>
        </div>

        <div className="n-hamBurger flexCenter">
          {/* <Search /> */}
          <div className="n-ham-search flexCenter">
            <BiSearch onClick={() => setSearch(true)} style={{ cursor: "pointer" }} />
          </div>

          <BiShoppingBag />
          <a href="#">login</a>
          <div onClick={() => setLink((cur) => !cur)}>
            <GiHamburgerMenu />
          </div>
        </div>
      </nav>
      {/* <Media query="(max-width:1024px)">
        {(matches) => {
          matches && setSearch(false);
        }}
      </Media> */}
      {search && (
        <OutsideClickHandler onOutsideClick={() => setSearch(false)}>
          <div className="n-searchContainer">
            <Search />
          </div>
        </OutsideClickHandler>
      )}
    </div>
  );
}
