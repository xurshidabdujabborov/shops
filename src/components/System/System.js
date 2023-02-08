import React from 'react'
import { Container, Grid } from '@mui/material'
import car from "../../assets/img/card 11.png"
import car1 from "../../assets/img/card 12.png"
import "./System.css"

function System() {
    return (
        <div className='System'>
            <div className="box">
            <div className="left">
                <h3>Smart battery
                    Management system
                    (Smart-BMS)</h3>
                <p>The Smart-BMS closely monitors the battery status with multiple <br /> protection mechanisms to ensure the battery durability</p>
            </div>
            <div className="img">
                <img src={car} alt="" />
            </div>
            </div>
        </div>
    )
}

export default System
