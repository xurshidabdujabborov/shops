import React from 'react'
import { Container, Grid } from '@mui/material'
import fot from "../../assets/img/footer.png"
import "./Footer.css"

function Footer() {
    return (
        <footer>
            <Container maxWidth="xl">
                <Grid container alignItems={"center"}>
                    <Grid items md={5} sm={12} xs={12}>
                        <div className="img">
                            <img src={fot} alt="" />
                        </div>
                    </Grid>
                    <Grid items md={7} sm={12} xs={12}>
                        <ul>
                            <li>
                                <a href="#">+1 (888) 777-77-77</a>
                            </li>
                            <li>
                                <a href="#">2637 Fairfax Ave
                                    Culver City, CA 90232</a>
                            </li>
                            <li>
                                <a href="#">Segway  California © 2017</a>
                            </li>
                        </ul>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    )
}

export default Footer