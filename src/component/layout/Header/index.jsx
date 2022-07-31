import React, { useRef, useState } from "react";
import "./styles.scss";
import { images } from "../../../assets/img";
import { Link } from "react-router-dom";
import Search from "../../search";

const Header = () => {
  const refPopup = useRef();
  const [popup, setPopup] = useState(false);
  const [isToggle, setIsToggle] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  const handlePopup = () => {
    const childEl = refPopup.current.nextSibling.childNodes;
    let childHeight = 0;
    childEl.forEach((element) => {
      childHeight += element.offsetHeight;
    });
    if (!popup) {
      refPopup.current.nextSibling.style.height = childHeight + "px";
    } else {
      refPopup.current.nextSibling.style.height = 0;
    }
    setPopup(!popup);
  };

  const handleIsSearch = () => {
    setIsSearch(!isSearch);
  };

  return (
    <header className="c-header">
      <div className="c-header__inner">
        <div className="c-header__left">
          <h1 className="logo">
            <img src={images.common.logo} alt="SHION HOUSE" />
          </h1>
          <nav className={"c-gnavi " + (isToggle ? "active" : "")}>
            <div className="c-gnavi__content">
              <ul>
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <Link to="/">SHOP</Link>
                </li>
                <li>
                  <Link to="/">ABOUT</Link>
                </li>
                <li>
                  <Link to="/">BLOG</Link>
                </li>
                <li>
                  <Link to="/">CONTACT</Link>
                </li>
              </ul>
              <ul className="icon sp">
                <li>
                  <Link to="/">
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                </li>
                <li>
                  <span onClick={handleIsSearch}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </span>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="c-header__right">
          <ul className="icon">
            <li className="pc">
              <Link to="/">
                <i className="fa-brands fa-facebook-f"></i>
              </Link>
            </li>
            <li className="pc">
              <Link to="/">
                <i className="fa-brands fa-instagram"></i>
              </Link>
            </li>
            <li className="pc">
              <span onClick={handleIsSearch}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
            </li>
            <li>
              <Link to="/">
                <i className="fa-solid fa-cart-shopping"></i>
                <span className="num">99</span>
              </Link>
            </li>
          </ul>
          <div className="c-user">
            <span ref={refPopup} onClick={handlePopup} className="avatar">
              <img src={images.common.user} alt="user" />
            </span>
            <ul className={popup ? "active" : ""}>
              <li>
                <Link to="/">
                  Login<i className="fa-solid fa-lock"></i>
                </Link>
              </li>
              <li>
                <Link to="/">
                  Register<i className="fa-solid fa-user"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <span
        className={isToggle ? "c-toggle active" : "c-toggle"}
        onClick={() => setIsToggle(!isToggle)}
      ></span>
      <Search isSearch={isSearch} handleIsSearch={handleIsSearch} />
    </header>
  );
};

export default Header;
