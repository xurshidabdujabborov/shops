import React from "react";
import sg1 from "../../assets/img/image1.png";
import sg4 from "../../assets/img/image4.png";
import sg3 from "../../assets/img/image3.png";
import sg6 from "../../assets/img/image6.png";
import sg8 from "../../assets/img/image8.png";
import sg13 from "../../assets/img/image13.png";
import sg12 from "../../assets/img/image12.png";
import sg15 from "../../assets/img/image15.png";
import sg17 from "../../assets/img/image17.png";
import sg18 from "../../assets/img/исм 1.png";
import sg19 from "../../assets/img/пмр 1.png";
import sg20 from "../../assets/img/Слой 0 1.png";
import sg21 from "../../assets/img/8.png";
import "./Segway.css";
function Segway(props) {
  return (
    <div className="segwayProduct">
      <div className="segwayProductCard">
        <div className="top">
          <div className="card">
            <img src={sg3} alt="" />
            <h4>KS E22</h4>
          </div>
          <div className="card">
            <img src={sg4} alt="" />
            <h4>KS F30</h4>
          </div>
          <div className="card">
            <img src={sg6} alt="" />
            <h4>KS E45</h4>
          </div>
          <div className="card">
            <img src={sg8} alt="" />
            <h4>KS MAX</h4>
          </div>
          <div className="card">
            <img src={sg12} alt="" />
            <h4>KS MAX</h4>
          </div>
          <div className="card">
            <img src={sg13} alt="" />
            <h4>KS ES2</h4>
          </div>
          <div className="card">
            <img src={sg15} alt="" />
            <h4>KS ES 3</h4>
          </div>
        </div>
        <div className="bottom">
          <div className="card">
            <img src={sg17} alt="" />
            <h4>EKS ZING E8</h4>
          </div>
          <div className="card">
            <img src={sg18} alt="" />
            <h4>EKS ZING E10</h4>
          </div>
          <div className="card">
            <img src={sg19} alt="" />
            <h4>EKS ZING E12</h4>
          </div>
          <div className="card">
            <img src={sg20} alt="" />
            <h4>KS ES 4</h4>
          </div>
          <div className="card">
            <img style={{marginTop: "30px"}} src={sg21} alt="" />
            <h4 >Accessories</h4>
          </div>
          <div className="card">
            <img src={sg1} alt="" />
            <h4>Accessories</h4>
          </div>
          <div className="card">
            <img src={sg3} alt="" />
            <h4>Segway Pro Max</h4>
          </div>
        </div>
      </div>
       <div className="blue">
       <p>Free 1 day shipping within California.</p>
       </div>
    </div>
  );
}

export default Segway;
