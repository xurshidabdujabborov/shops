import React from 'react'
import { Container, Grid } from '@mui/material'
import img from "../../assets/img/mod.png"
import car4 from "../../assets/img/car4.png"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./Model.css"


function Model() {

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }
    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];
    return (
        <div className='Model'>
            <Container maxWidth="xl">
                <h2 className="title">compare specifications</h2>
                <p>Add model to compare</p>
                <Grid container>
                    <Grid items md={3} xs={12} sm={12}>
                        <div className="box">
                            <img src={img} alt="" />
                            <span>NiNinebot <br />
                                Kickscooter E22</span>
                        </div>
                    </Grid>
                    <Grid items md={3} xs={12} sm={12}>
                        <div className="box">
                            <img src={img} alt="" />
                            <span>NiNinebot <br />
                                Kickscooter E22</span>
                        </div>
                    </Grid>
                    <Grid items md={3} xs={12} sm={12}>
                        <div className="box">
                            <img src={img} alt="" />
                            <span>NiNinebot <br />
                                Kickscooter E22</span>
                        </div>
                    </Grid>
                    <Grid items md={3} xs={12} sm={12}>
                        <div className="box">
                            <img src={img} alt="" />
                            <span>NiNinebot <br />
                                Kickscooter E22</span>
                        </div>
                    </Grid>
                </Grid>
                <div className="tabs">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Max. speed</TableCell>
                                    <TableCell align="right">Calories</TableCell>
                                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.calories}</TableCell>
                                        <TableCell align="right">{row.fat}</TableCell>
                                        <TableCell align="right">{row.carbs}</TableCell>
                                        <TableCell align="right">{row.protein}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <Grid container>
                    <Grid md={3} sm={12} xs={12}>
                        <div className="text">
                            <h3>$599.99</h3>
                            <button>BUY IT NOW</button>
                        </div>
                    </Grid>
                    <Grid md={3} sm={12} xs={12}>
                        <div className="text">
                            <h3>$599.99</h3>
                            <button>BUY IT NOW</button>
                        </div>
                    </Grid>
                    <Grid md={3} sm={12} xs={12}>
                        <div className="text">
                            <h3>$599.99</h3>
                            <button>BUY IT NOW</button>
                        </div>
                    </Grid>
                    <Grid md={3} sm={12} xs={12}>
                        <div className="text">
                            <h3>$599.99</h3>
                            <button>BUY IT NOW</button>
                        </div>
                    </Grid>
                </Grid>
                <div className="boxs">
                    <div className="img">
                        <img src={car4} alt="" />
                    </div>
                    <div className="card">
                        <h2 className="title">Segway Protective <br />
                            Gear Set as a gift</h2>
                        <p>The cost of a protection kit when buying <br />
                            a scooter is $ 0 instead of $ $29.99</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Model