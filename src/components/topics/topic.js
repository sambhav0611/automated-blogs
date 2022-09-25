import styles from "../header/AllTopicsButton.module.css";
import React from "react";
import {useParams} from "react-router-dom";

function Topic(props) {
    const params = useParams()
    return (
        <h1>Hello this is topics page for {params.productId}</h1>
    )
}

export default Topic;