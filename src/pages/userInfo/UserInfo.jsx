import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {listOfMovies, listOfUsers} from "../../constants/constants";
import Navbar from "../../components/navbar/Navbar";
import classes from './UserInfo.module.scss';
import {Card} from "antd";
import UserCard from "../../components/userCard/UserCard";
import MovieTable from "../../components/moviesTable/MovieTable";

const UserInfo = () => {

    const [data, setData] = useState(null);

    let {id} = useParams();

    useEffect(() => {
        const user = listOfUsers.find(item => item.id === parseInt(id, 10));
        setData(user)
    }, [id])

    let movies = listOfMovies.filter(function(movie){
        return movie.users.includes(data?.id);
    })

    return <div className={classes['main']}>
        {data?.id && <div className={classes['container']}>
            <div className={classes['user-details']}>
                <div>
                    <Card title="User details" style={{ width: 600 }}>
                        <div className={'user-card-info'} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                            <UserCard
                                id={data?.id}
                                firstName={data?.firstName}
                                lastName={data?.lastName}
                                age={data?.age}
                                city={data?.city}
                                image={data?.image}
                                flag={false}
                            />
                        </div>
                    </Card>
                </div>
            </div>
            <div className={classes['movie-watchers']}>
                <Card title={`Movies watched by ${data?.firstName} ${data?.lastName}`}>
                    <MovieTable list={movies}/>
                </Card>
            </div>
        </div>}

    </div>
}

export default UserInfo;