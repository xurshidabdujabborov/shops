import React from "react";
import { ShoppingCartOutlined, InstagramOutlined } from "@ant-design/icons";
import { Logo } from "../../assets/svg/svg";
import person from "../../assets/img/Ellipse 1.png";
import "./Nav.css";
function Nav(props) {
  return (
    <>
      <div className="navTop">
        <nav>
          <ul>
            <li>
              <p>REVIEWS</p>
            </li>
            <li>
              <p>SHIPPING AND PAYMENT</p>
            </li>
            <li>
              <p>WHOLESALE</p>
            </li>
            <li>
              <p>BLOG</p>
            </li>
            <li>
              <p>CONTACTS</p>
            </li>
          </ul>
          <div className="icons">
            <div className="shopBag">
              <ShoppingCartOutlined />
              <span className="count">0</span>
            </div>
            <InstagramOutlined />
            <p>+1 (888) 888-88-88</p>
          </div>
        </nav>
      </div>
      <div className="navBottom">
        <p className="logo">{Logo}</p>
        <div className="navBottomRight">
          <img src={person} alt="" />
          <div className="text">
            <h3>jOHN SMITH</h3>
            <p>Ask a question <br/> to the director</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
