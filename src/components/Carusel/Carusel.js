import React from 'react'
import { Container, Grid } from '@mui/material'
import fot from "../../assets/img/fot.png"
import fot1 from "../../assets/img/fot1.png"
import "./Carusel.css"

function Carusel() {
    return (
        <div className='Carusel'>
            <Container maxWidth="xl">
                <h2 className="title">OTHER MODELS</h2>
                <p>Check out the entire line of Segway scooters</p>
                <Grid container>
                    <Grid items md={3} sm={12} xs={12}>
                        <div className="box">
                            <img src={fot} alt="" />
                            <h3>KS E22</h3>
                            <p>$899.99</p>
                            <button>SEE MORE</button>
                        </div>
                    </Grid>
                    <Grid items md={3} sm={12} xs={12}>
                        <div className="box">
                            <img src={fot1} alt="" />
                            <h3>KS E22</h3>
                            <p>$899.99</p>
                            <button>SEE MORE</button>
                        </div>
                    </Grid>
                    <Grid items md={3} sm={12} xs={12}>
                        <div className="box">
                            <img src={fot} alt="" />
                            <h3>KS E22</h3>
                            <p>$899.99</p>
                            <button>SEE MORE</button>
                        </div>
                    </Grid>
                    <Grid items md={3} sm={12} xs={12}>
                        <div className="box">
                            <img src={fot1} alt="" />
                            <h3>KS E22</h3>
                            <p>$899.99</p>
                            <button>SEE MORE</button>
                        </div>
                    </Grid>
                    <Grid items md={3} sm={12} xs={12}>
                        <div className="box">
                            <img src={fot} alt="" />
                            <h3>KS E22</h3>
                            <p>$899.99</p>
                            <button>SEE MORE</button>
                        </div>
                    </Grid>
                    <Grid items md={3} sm={12} xs={12}>
                        <div className="box">
                            <img src={fot1} alt="" />
                            <h3>KS E22</h3>
                            <p>$899.99</p>
                            <button>SEE MORE</button>
                        </div>
                    </Grid>
                    <Grid items md={3} sm={12} xs={12}>
                        <div className="box">
                            <img src={fot} alt="" />
                            <h3>KS E22</h3>
                            <p>$899.99</p>
                            <button>SEE MORE</button>
                        </div>
                    </Grid>
                    <Grid items md={3} sm={12} xs={12}>
                        <div className="box">
                            <img src={fot1} alt="" />
                            <h3>KS E22</h3>
                            <p>$899.99</p>
                            <button>SEE MORE</button>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
export default Carusel