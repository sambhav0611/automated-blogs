import React, { useContext } from "react";
import styles from "../header/AllTopicsButton.module.css";
import {Link, useNavigate} from "react-router-dom";

function TopicButton(props) {
    const name = props.name;
    const navigate = useNavigate();
    const redirectToTopic = () => {
        navigate(`/topics/${name}`)
    }
    return (
        <button onClick={redirectToTopic} className={styles.button}>
            <span>
                {name}
            </span>
        </button>
    );
}

export default TopicButton;