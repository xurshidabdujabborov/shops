import React from 'react'
import car12 from "../../assets/img/card 12.png"
import car13 from "../../assets/img/card 13.png"
import "./Braking.css"

function Braking() {
    return (
        <div className='Braking'>
            <div className="box">
                <div className="card">
                    <img src={car12} alt="" />
                </div>
                <div className="text">
                    <h2 className="title">Dual Braking
                        System</h2>
                    <p>Simultaneous mechanical front drum brake <br /> and regenerative electric back brake provide <br /> both stability and steerability.
                        <br />
                        <br />
                        <br />
                        *IPX5 water resistance</p>
                </div>
            </div>
            <div className="box2">
                <div className="front">
                    <h2 className="title">Built-In Front
                        LED Light</h2>
                        <p>Front-facing lights are designed with 2.5w high-brightness LED light to <br /> illuminate the path ahead of you and increase your visibility to others <br /> around you.
                            <br />
                            <br />
                            <br />
                            <span>*Disclaimer: for your safety, please try not to ride at night</span>
                        </p>
                </div>
                <div className="img">
                    <img src={car13} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Braking