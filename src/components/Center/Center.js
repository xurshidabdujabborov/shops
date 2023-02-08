import React from 'react'
import { Container, Grid } from '@mui/material'
import bacc from "../../assets/img/baccc.png"
import svet from "../../assets/img/svet.png"
import svv from "../../assets/img/svv.png"
import vec from "../../assets/img/Vector 1.png"
import "./Center.css"

function Center() {
    return (
        <div className='Center'>
            <img src={bacc} alt="" />
            <Container maxWidth="xl">
                <h2 className="title">IMPRESSIVE FEATURES</h2>
                <Grid container>
                    <Grid items md={3} sm={12} xs={12}>
                        <div className="box">
                            <img src={svet} alt="" />
                            <h3>10”</h3>
                            <p>Pneumatic Tires</p>
                        </div>
                    </Grid>
                    <Grid items md={3} sm={12} xs={12}>
                        <div className="box">
                            <img src={svv} alt="" />
                            <h3>10”</h3>
                            <p>Pneumatic Tires</p>
                        </div>
                    </Grid>
                    <Grid items md={3} sm={12} xs={12}>
                        <div className="box">
                            <img src={svet} alt="" />
                            <h3>10”</h3>
                            <p>Pneumatic Tires</p>
                        </div>
                    </Grid>
                    <Grid items md={3} sm={12} xs={12}>
                        <div className="box">
                            <img src={svv} alt="" />
                            <h3>10”</h3>
                            <p>Pneumatic Tires</p>
                        </div>
                    </Grid>
                    <Grid items md={3} sm={12} xs={12}>
                        <div className="box">
                            <img src={svv} alt="" />
                            <h3>10”</h3>
                            <p>Pneumatic Tires</p>
                        </div>
                    </Grid>
                    <Grid items md={3} sm={12} xs={12}>
                        <div className="box">
                            <img src={svet} alt="" />
                            <h3>10”</h3>
                            <p>Pneumatic Tires</p>
                        </div>
                    </Grid>
                    <Grid items md={3} sm={12} xs={12}>
                        <div className="box">
                            <img src={svv} alt="" />
                            <h3>10”</h3>
                            <p>Pneumatic Tires</p>
                        </div>
                    </Grid>
                    <Grid items md={3} sm={12} xs={12}>
                        <div className="box">
                            <img src={svet} alt="" />
                            <h3>10”</h3>
                            <p>Pneumatic Tires</p>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Center
