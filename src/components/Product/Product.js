import React from 'react'
import { Container, Grid } from '@mui/material'
import car2 from "../../assets/img/card 2.png"
import car3 from "../../assets/img/card 3.png"
import car4 from "../../assets/img/card 4.png"
import car5 from "../../assets/img/card 5.png"
import car6 from "../../assets/img/card 6.png"
import car7 from "../../assets/img/card 7.png"
import car8 from "../../assets/img/card 8.png"
import car9 from "../../assets/img/card 9.png"
import "./Product.css"

function Product() {
    return (
        <div className='Product'>
            <Container maxWidth="xl">
                <h2 className="title" style={{textAlign: "center"}}>Accessories</h2>
                <Grid container alignItems={"center"}>
                    <Grid items md={4} sm={12} xs={12}>
                        <div className="box">
                            <img src={car2} alt="" />
                            <h4>Ninebot Leisure
                                Backpack</h4>
                                <p>The Ninebot leisure backpack adopts a stylish gray-yellow <br /> color contrast, adding a trendy accessory to your wardrobe.</p>
                                <span>$69.99</span>
                                <a href="#!">ADD TO CART</a>
                        </div>
                    </Grid>
                    <Grid items md={4} sm={12} xs={12}>
                        <div className="box">
                            <img src={car3} alt="" />
                            <h4>Ninebot Leisure
                                Backpack</h4>
                                <p>The Ninebot leisure backpack adopts a stylish gray-yellow <br /> color contrast, adding a trendy accessory to your wardrobe.</p>
                                <span>$69.99</span>
                                <a href="#!">ADD TO CART</a>
                        </div>
                    </Grid>
                    <Grid items md={4} sm={12} xs={12}>
                        <div className="box">
                            <img src={car4} alt="" />
                            <h4>Ninebot Leisure
                                Backpack</h4>
                                <p>The Ninebot leisure backpack adopts a stylish gray-yellow <br /> color contrast, adding a trendy accessory to your wardrobe.</p>
                                <span>$69.99</span>
                                <a href="#!">ADD TO CART</a>
                        </div>
                    </Grid>
                    <Grid items md={4} sm={12} xs={12}>
                        <div className="box">
                            <img src={car5} alt="" />
                            <h4>Ninebot Leisure
                                Backpack</h4>
                                <p>The Ninebot leisure backpack adopts a stylish gray-yellow <br /> color contrast, adding a trendy accessory to your wardrobe.</p>
                                <span>$69.99</span>
                                <a href="#!">ADD TO CART</a>
                        </div>
                    </Grid>
                    <Grid items md={4} sm={12} xs={12}>
                        <div className="box">
                            <img src={car6} alt="" />
                            <h4>Ninebot Leisure
                                Backpack</h4>
                                <p>The Ninebot leisure backpack adopts a stylish gray-yellow <br /> color contrast, adding a trendy accessory to your wardrobe.</p>
                                <span>$69.99</span>
                                <a href="#!">ADD TO CART</a>
                        </div>
                    </Grid>
                    <Grid items md={4} sm={12} xs={12}>
                        <div className="box">
                            <img src={car7} alt="" />
                            <h4>Ninebot Leisure
                                Backpack</h4>
                                <p>The Ninebot leisure backpack adopts a stylish gray-yellow <br /> color contrast, adding a trendy accessory to your wardrobe.</p>
                                <span>$69.99</span>
                                <a href="#!">ADD TO CART</a>
                        </div>
                    </Grid>
                    <Grid items md={4} sm={12} xs={12}>
                        <div className="box">
                            <img src={car8} alt="" />
                            <h4>Ninebot Leisure
                                Backpack</h4>
                                <p>The Ninebot leisure backpack adopts a stylish gray-yellow <br /> color contrast, adding a trendy accessory to your wardrobe.</p>
                                <span>$69.99</span>
                                <a href="#!">ADD TO CART</a>
                        </div>
                    </Grid>
                    <Grid items md={4} sm={12} xs={12}>
                        <div className="box">
                            <img src={car9} alt="" />
                            <h4>Ninebot Leisure
                                Backpack</h4>
                                <p>The Ninebot leisure backpack adopts a stylish gray-yellow <br /> color contrast, adding a trendy accessory to your wardrobe.</p>
                                <span>$69.99</span>
                                <a href="#!">ADD TO CART</a>
                        </div>
                    </Grid>
                    <Grid items md={4} sm={12} xs={12}>
                        <div className="box">
                            <img src={car4} alt="" />
                            <h4>Ninebot Leisure
                                Backpack</h4>
                                <p>The Ninebot leisure backpack adopts a stylish gray-yellow <br /> color contrast, adding a trendy accessory to your wardrobe.</p>
                                <span>$69.99</span>
                                <a href="#!">ADD TO CART</a>
                        </div>
                    </Grid>
                </Grid>
                <a className='pov' href="#">SEE MORE</a>
            </Container>
        </div>
    )
}

export default Product
