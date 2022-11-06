import React from "react";
import classes from './UserCard.module.scss';
import InfoButton from "../button/infoButton/InfoButton";
import {useNavigate} from "react-router-dom";

const UserCard = ({
                      id,
                      firstName,
                      lastName,
                      age,
                      city,
                      image,
                      movies,
                      flag= true
                  }) => {

    const navigate = useNavigate();

    return <div className={classes['user-container']} >
        <img src={image} alt="profile-picture"/>
        <h2 className={classes['full-name']}>{firstName} {lastName}</h2>
        <hr/>
        <div className={classes['other-info']}>
            <div>
                <p className={classes['age']}><span>Age: </span>{age}</p>
            </div>
            <div>
                <p><span>City: </span>{city}</p>
            </div>
        </div>
            <div>
                {flag ? <InfoButton text={'Details'} onClick={() => navigate("/users/" + id)}/> : <div></div>}
            </div>
    </div>
}

export default UserCard;