import React from "react";
import classes from './Navbar.module.scss';
import {Link, Outlet} from "react-router-dom";

const Navbar = () => {

    const navbarItems = [
        {
            key: '',
            title: 'Home'
        },
        {
            key: 'users',
            title: 'Users'
        },
        {
            key: 'movies',
            title: 'Movies'
        },
    ]

    return (
        <div>
            <div className={classes["navbar"]}>
                <div className={classes['content']}>
                    <Link to={`/`} className={classes["logo"]}>Film Club</Link>
                    <div className={classes["header-items"]}>
                        {navbarItems.map(item =>
                            <Link key={item.key} to={`/${item.key}`} className={classes['navbar-item']} style={{color:"white"}}>
                                {item.title}
                            </Link>
                        )}
                    </div>
                </div>
            </div>
            <Outlet/>
        </div>
    )
}


export default Navbar;