import React, { useContext } from "react";
import styles from "./AllTopicsButton.module.css";

function AllTopicsButton(props) {

    return (
        <button onClick={props.onClick} className={styles.button}>
            <span>
                All topics
            </span>
        </button>
    );
}

export default AllTopicsButton;