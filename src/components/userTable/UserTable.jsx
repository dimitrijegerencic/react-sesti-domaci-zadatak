import React, {useEffect, useState} from "react";
import {Input, Table, Tag} from "antd";
import classes from './UserTable.module.scss';
import {listOfUsers} from "../../constants/constants";
import {useNavigate} from "react-router-dom";

const { Search } = Input;

const UserTable = ({title, list = listOfUsers, search}) => {

    const [query, setQuery] = useState('');

    useEffect(() => {
        if(query?.length >= 1){
            search(query)
        }else{
            search('')
        }
    }, [query])

    const header = [
        {
            title: 'Profile picture',
            dataIndex: 'image',
            key: 'image',
            render: (image) => <img src={image} alt="" style={{width : "30%", height: "auto"}}/>,
        },
        {
            title: 'Name',
            dataIndex: 'firstName',
            key: 'firstName',
            render: (firstName) => <p>{firstName}</p>,
        },
        {
            title: 'Surname',
            dataIndex: 'lastName',
            key: 'lastName',
            render: (lastName) => <p>{lastName}</p>,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            render: (age) => <p>{age}</p>,
        },

        {
            title: 'City',
            dataIndex: 'city',
            key: 'city',
            render: (text) => <Tag color="blue">{text}</Tag>,
        }
    ]

    const navigate = useNavigate();

    return (
        <div>
            <div className={classes["search-field"]}>
                <div>
                    <Input
                        placeholder={"Search " + title}
                        className = {classes['input']}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>
            </div>
            <Table
                columns={header}
                dataSource={list}
                className={classes['user-table']}
                pagination={{ defaultPageSize: 4, showSizeChanger: true, pageSizeOptions: ['5', '10']}}
                onRow={(r) => ({
                    onClick:()=>{navigate('/users/' + r.id);},
                })}
            />
        </div>
        )
}

export default UserTable;