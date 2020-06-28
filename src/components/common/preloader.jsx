import React from "react";
import preloaderGif from "../../assets/photos/preloader.gif";
import s from "../Users/Users.module.css";

const Preloader = () => {
    return (
        <div style={{margin: '20% 30%'}}>
            <img src={preloaderGif} className={s.position} alt=''/>
        </div>
    )

};

export default  Preloader;