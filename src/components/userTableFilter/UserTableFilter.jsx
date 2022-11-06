import React, {useReducer, useState} from "react";
import UserTable from "../userTable/UserTable";
import {Button, Dropdown, MenuProps} from "antd";
import  classes from './UserTableFilter.module.scss';
import {PlusOutlined} from "@ant-design/icons";

const UserTableFilter = ({arg}) => {

    const reducer = (state, action) => {

        switch(action.type){
            case 'search-name':
                return arg.filter(user => user.firstName.toString().toLowerCase().includes(action.data.toLowerCase()));
            case 'search-surname':
                return arg.filter(user => user.lastName.toString().toLowerCase().includes(action.data.toLowerCase()));
            case 'search-age':
                return arg.filter(user => user.age.toString().toLowerCase().includes(action.data.toLowerCase()));
            case 'search-city':
                return arg.filter(user => user.city.toString().toLowerCase().includes(action.data.toLowerCase()));
            default:
                return arg;
        }
    }

    const [tabInView, setTabInView] = useState("firstName");
    const [list, dispatch] = useReducer(reducer, []);

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <a type={'button'}
                   className={tabInView === "firstName" ? classes['tab-active'] : classes['']}
                   onClick={() => setTabInView("firstName")}>
                    First name
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a type={'button'}
                   className={tabInView === "lastName" ? classes['tab-active'] : classes['']}
                   onClick={() => setTabInView("lastName")}>
                    Last name
                </a>
            ),
        },
        {
            key: '3',
            label: (
                <a type={'button'}
                   className={tabInView === "age" ? classes['tab-active'] : classes['']}
                   onClick={() => setTabInView("age")}>
                    Age
                </a>
            ),
        },
        {
            key: '4',
            label: (
                <a type={'button'}
                   className={tabInView === "city" ? classes['tab-active'] : classes['']}
                   onClick={() => setTabInView("city")}>
                    City
                </a>
            ),
        },
    ];

    return (
        <div className={classes['users-section']}>
            <div className={classes['filter-div']}>
                <Dropdown menu={{ items }} placement="topLeft" arrow className={classes['dropdown']}>
                    <Button> <PlusOutlined /> Add filter</Button>
                </Dropdown>
            </div>
            <div className={classes['search-section']}>

                {tabInView === "firstName" && <UserTable
                    title="by first name"
                    list={list}
                    search={(e) => dispatch({type: e?.length === 0 ? '' : 'search-name', data: e})}/>}

                {tabInView === "lastName" && <UserTable
                    title="by last name"
                    list={list}
                    search={(e) => dispatch({type: e?.length === 0 ? '' : 'search-surname', data: e})}/>}

                {tabInView === "age" && <UserTable
                    title="by age"
                    list={list}
                    search={(e) => dispatch({type: e?.length === 0 ? '' : 'search-age', data: e})}/>}

                {tabInView === "city" && <UserTable
                    title="by city"
                    list={list}
                    search={(e) => dispatch({type: e?.length === 0 ? '' : 'search-city', data: e})}/>
                }

            </div>
        </div>
    )
}

export default UserTableFilter;