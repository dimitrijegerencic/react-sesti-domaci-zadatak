import React from "react";
import classes from './InfoButton.module.scss';

const InfoButton = ({text, onClick}) => {
    return <button className={classes['user-info-button']} onClick={onClick}>
        {text}
    </button>
}

export default InfoButton;