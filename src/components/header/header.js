import React from "react";
import mealsImage from '../../assets/headerImage.jpeg';
import styles from "./header.module.css";
import AllTopicsButton from "./AllTopicsButton";

function Header (props) {
    return (
        <React.Fragment>
            <header className={styles.header}>
                <h1>Welcome to automated blogs</h1>
                <AllTopicsButton onClick={props.onClick} ></AllTopicsButton>
            </header>
            <div>
                <img src={mealsImage} className={styles['main-image']}></img>
            </div>
        </React.Fragment>
    );
}

export default Header;