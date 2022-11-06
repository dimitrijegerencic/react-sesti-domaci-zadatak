import React from "react";
import {listOfUsers} from "../../constants/constants";
import UserCard from "../../components/userCard/UserCard";
import classes from './UserPage.module.scss';

const UsersPage = () => {
    return <div>
        <div className={classes['container']}>
            <div className={classes['title']}>
                <h1>Users</h1>
            </div>
            <div className={classes['users']}>
                {listOfUsers.map((user)=>{
                    return (
                        <UserCard
                            key={user.id}
                            id={user.id}
                            firstName={user.firstName}
                            lastName={user.lastName}
                            age={user.age}
                            city={user.city}
                            image={user.image}
                        />
                    )
                })}
            </div>
        </div>

    </div>
}

export default UsersPage;