import React, {useState} from "react";
import {listOfMovies} from "../../constants/constants";
import {Input, Table, Tag} from "antd";
import classes from './MovieTable.module.scss';
import {useNavigate} from "react-router-dom";

const MovieTable = ({list= listOfMovies}) => {

    const data = list;

    const header = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (name) => <p>{name}</p>,
        },
        {
            title: 'Year',
            dataIndex: 'year',
            key: 'genre',
            render: (year) => <p>{year}</p>,
        },
        {
            title: 'Genre',
            dataIndex: 'genre',
            key: 'genre',
            render: (text) => <Tag color="purple">{text}</Tag>,
        }
    ]

    const [query, setQuery] = useState('');

    const navigate = useNavigate();

    return <div className={classes['container']}>

        <div className={classes['search-field']}>
            <Input placeholder="What movie are you looking for?"
                   className={classes['input']}
                   onChange={(e) => setQuery(e.target.value)}/>
        </div>

        {data.some(movie => movie['name'].toString().toLowerCase().includes(query.toLowerCase())) ?
            <div className={'results'}>
                <Table
                    columns={header}
                    dataSource={list.filter(user => user['name'].toString().toLowerCase().includes(query.toLowerCase()))}
                    pagination={{ defaultPageSize: 6, showSizeChanger: true, pageSizeOptions: ['7', '10']}}
                    onRow={(r) => ({
                        onClick:()=>{ navigate('/movies/' + r.id)},
                    })}
                />
            </div>
            :
            <div>
                <Table
                    columns={header}
                    dataSource={list}
                    className={classes['movie-table']}
                    pagination={{ defaultPageSize: 6, showSizeChanger: true, pageSizeOptions: ['7', '10']}}
                    onRow={(r) => ({
                        onClick:()=>{navigate('/movies/' + r.id)},
                    })}
                />
            </div>
        }

    </div>
}

export default MovieTable;