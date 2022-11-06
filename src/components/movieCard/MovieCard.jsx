import React from "react";
import classes from './MovieCard.module.scss';
import {Progress, Tag} from "antd";
import InfoButton from "../button/infoButton/InfoButton";
import {useNavigate} from "react-router-dom";

const MovieCard = ({
                       id,
                       title,
                       genre,
                       year,
                       grade,
                       length,
                       image,
                       actors,
                       flag=true
                   }) => {

    const navigate = useNavigate();

    return <div className={classes['movie-container']}>
        <div className={classes['poster']}>
            <img src={image} alt="Movie poster"/>
        </div>
        <div className={classes['movie-info']}>
            <h3>{title}</h3>
            <div className={classes['actors']}>
                <p><span>Starring: </span>{actors.join(', ')}</p>
            </div>
            <div className={classes['three-part-info']}>
                <div><Tag color="default">{year}</Tag></div>
                <div><Tag color="default">{length} min</Tag></div>
                <div><Tag color="default">{genre}</Tag></div>
            </div>
            <div className={classes['grade-more']}>
                <div>
                    <Progress type="circle" percent={grade*10} width={42} strokeColor={"#F90A8B"}/>
                </div>
                <div>
                    {flag ? <InfoButton text={'Show info'} onClick={() => navigate("/movies/" + id)}/> : <div></div>}
                </div>
            </div>
        </div>
    </div>

}

export default MovieCard;


