import React from "react";
import classes from './IndexPage.module.scss';
import MovieTable from "../../components/moviesTable/MovieTable";
import {Card} from "antd";
import UserTableFilter from "../../components/userTableFilter/UserTableFilter";
import {listOfUsers} from "../../constants/constants";

const IndexPage = () => {
    return (
        <div>
            <div className={classes['container']}>
                <div className={classes['a1']}>
                    <Card title="Available movies" bordered={false} style={{ width: 600}}>
                        <MovieTable/>
                    </Card>
                </div>
                <div className={classes['a2']}>
                    <Card title="Film Club users" bordered={false} style={{ width: 600 }}>
                        <UserTableFilter arg={listOfUsers}/>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default IndexPage;