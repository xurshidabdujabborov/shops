import React , {useRef , useState} from 'react'
import { Container, Grid } from '@mui/material'
import  vd from "../../assets/video/vd.mp4"
import main from "../../assets/img/main.png"
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import rrr from "../../assets/img/rrr.png"
import "./Video.css"

function Video() {
    const [play, setPlay]= useState(false)
    const videoIcon = useRef();

    return (
        <div className='video'>
            <Container maxWidth="xl">
                <Grid container alignItems={"center"}>
                    <Grid items md={6} sm={12} xs={12}>
                        <h2 className="title">Packing List</h2>
                         <div className="box">
                            <video src={vd} poster={rrr} ref={videoIcon}></video>
                             {play ? <div className='vdIcon'
                             onClick={() => {
                                videoIcon.current.pause();
                                setPlay(false)
                             }}
                             >
                                <PauseIcon/>
                             </div> : (
                                <div className='vdIcon'
                                onClick={() => {
                                    videoIcon.current.play();
                                   setPlay(true)
                                }}
                                >
                                   <PlayArrowIcon/>
                                </div>
                             )}
                         </div>
                    </Grid>
                    <Grid items md={6} sm={12} xs={12}>
                        <div className="img">
                            <img src={main} alt="" />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Video
