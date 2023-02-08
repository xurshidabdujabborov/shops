import React from 'react'
import { Grid, Container } from "@mui/material";
import mainof from "../../assets/img/mainof.png"
import zzz from "../../assets/img/zzzz.png";
import vek from "../../assets/img/Vector 1.png";
import kar from "../../assets/img/karabk.png";
import ttttt from "../../assets/img/40.png"
import "./Main.css";

function Main() {
    return (
        <main>
            <Container maxWidth="xl">
                <Grid container alignItems={"center"}>
                    <Grid items md={6} sm={12} xs={12}>
                        <div className="left">
                            <span>In stock</span>
                            <h1>SEGWAY
                                Ninebot
                                Kickscooter
                                MAX</h1>
                            <div className="borderLeft">
                                <p>Add an extended warranty from Extend</p>
                                <div className="flexButton">
                                    <button>1 Year - $139</button>
                                    <button>2 Year - $209</button>
                                    <button>3 Year - $359</button>
                                </div>
                                <div className="flexBottom">
                                    <button>BUY IT Now</button>
                                    <button>ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid items md={6} sm={12} xs={12}>
                        <div className="img">
                            <img src={mainof} alt="" />
                        </div>
                    </Grid>
                </Grid>
                <Grid container alignItems={"center"}>
                    <Grid items md={3} sm={12} xs={12}>
                        <div className="card">
                            <img src={kar} alt="" />
                            <p>Delivery within
                                <br /> 1 business day</p>
                        </div>
                    </Grid>
                    <Grid items md={3} sm={12} xs={12}>
                        <div className="card">
                            <img src={zzz} alt="" />
                            <p>Basic 1 year <br />
                                warranty</p>
                        </div>
                    </Grid>
                    <Grid items md={3} sm={12} xs={12}>
                        <div className="card">
                            <img src={kar} alt="" />
                            <p>After Sales <br />
                                Support</p>
                        </div>
                    </Grid>
                    <Grid items md={3} sm={12} xs={12}>
                        <div className="blue">
                            <img src={vek} alt="" />
                            <p>Up to 40 miles <br /> per charge</p>
                        </div>
                    </Grid>
                </Grid>
                <div className="box">
                    <div className="card">
                        <span>Up to 40 miles of range 
                            on a single charge</span>
                            <p>With a range of up to 40 miles, the longest range on the market, <br /> and a 20˚uphill climbing angle, the KickScooter MAX allows you to <br /> ride from San Francisco Bay Area to Palo Alto on a single charge.</p>
                    </div>
                    <div className="img">
                        <img src={ttttt} alt="" />
                    </div>
                </div>
            </Container>
        </main>
    )
}

export default Main
