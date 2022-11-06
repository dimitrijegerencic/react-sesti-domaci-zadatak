import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {listOfMovies, listOfUsers} from "../../constants/constants";
import MovieCard from "../../components/movieCard/MovieCard";
import classes from './MovieInfo.module.scss';
import {Card} from "antd";
import UserTableFilter from "../../components/userTableFilter/UserTableFilter";

const MovieInfo = () => {

    const [data, setData] = useState(null);

    let {id} = useParams();

    useEffect(() => {
        const movie = listOfMovies.find(item => item.id === parseInt(id, 10));
        setData(movie)
    }, [id])

    let watchers = listOfUsers.filter(function(person){
        return person.movies.includes(data?.id);
    })

    return <div>
        {data?.id && <div className={classes['container']}>
            <div className={classes['movie-details']}>
                <Card title="Movie" style={{ width: 600 }} >
                    <div className={'movie-card-info'} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                    <MovieCard
                        id={data?.id}
                        title={data?.name}
                        year={data?.year}
                        grade={data?.grade}
                        actors={data?.actors}
                        image={data?.image}
                        length={data?.length}
                        genre={data?.genre}
                        flag={false}
                    />
                    </div>
                </Card>
            </div>

            <div className={classes['movie-watchers']}>
                <Card title={`People who watched ${data?.name}`} style={{ width: 600 }}>
                    <UserTableFilter arg={watchers}/>
                </Card>
            </div>

        </div>}
    </div>
}

export default MovieInfo;