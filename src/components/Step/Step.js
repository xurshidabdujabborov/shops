import React from 'react'
import Button from '@mui/material/Button';
import { Container } from '@mui/system'
import car14 from "../../assets/img/card 14.png"
import car18 from "../../assets/img/card 18.png"
import zzz from "../../assets/img/zzzz.png"
import zff from "../../assets/img/zff.png"
import cek from "../../assets/img/Vector.png"
import "./Step.css"

function Step() {
    return (
        <div className='Step'>
            <Container maxWidth="xl">
                <div className="text">
                    <h2 className="title">One-step Folding Mechanism</h2>
                    <p>Ninebot KickScooter MAX can be easily folded and carried around in 3 seconds.</p>
                    <img src={car14} alt="" />
                </div>
                <div className="box">
                    <div className="card">
                        <img src={car18} alt="" />
                    </div>
                    <div className="var">
                        <h3>DOWNLOAD
                            manual</h3>
                        <div className="flex">
                            <div className="center">
                                <img src={zzz} alt="" />
                                <span>How to charge
                                    a scooter</span>
                            </div>
                            <div className="center">
                                <img src={zff} alt="" />
                                <span>How to charge
                                    a scooter</span>
                            </div>
                            <div className="center">
                                <img src={cek} alt="" />
                                <span>How to ride
                                    properly</span>
                            </div>
                        </div>
                        <button>Download manual</button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Step