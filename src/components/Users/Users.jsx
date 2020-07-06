import React from "react";
import UserItem from "./UserItem/UserItem";
import *as axios from 'axios';
import s from './Users.module.css'
import Preloader from "../common/preloader";

class Users extends React.Component {

    componentDidMount() {
        this.props.setFetchingState(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}
                    &page=${this.props.currentPage}`, {
            withCredentials: true
        })
            .then(item => {
                this.props.setUsers(item.data.items);
                this.props.setUsersCounter(item.data.totalCount);
                this.props.setFetchingState(false);
            });
    }

    componentWillUnmount() {
        this.props.setUsers([]);
        this.props.setCurrentPage(1);
        this.props.setUsersCounter(0);
        this.props.setFetchingState(false);
    }

    onPageChanged(i) {
        this.props.setCurrentPage(i);
        this.props.setFetchingState(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${i}`, {
            withCredentials: true
        })
            .then(item => {
                this.props.setUsers(item.data.items);
                this.props.setUsersCounter(item.data.totalCount);
                this.props.setFetchingState(false);
            });
    }

    render() {
        let pageCountArray = [];
        let usersPages = Math.ceil(this.props.totalUsers / this.props.pageSize);
        for (let i = 1; i <= usersPages; i++) {
            pageCountArray.push(i);
        }
        let pagesMap = pageCountArray.map(i => <span
            className={s.spanCursor + ' ' + ((this.props.currentPage === i) ? s.selected : null)}
            key={i}
            onClick={() => this.onPageChanged(i)}>
                                                {i + ' '}
                                            </span>);
        let usersMap = this.props.users
            .map(item => <UserItem name={item.name}
                                   status={item.status}
                                   country={'Belarus'}
                                   city={'Molodechno'}
                                   followState={item.followed}
                                   userId={item.id}
                                   follow={this.props.followToggle}
                                   userAvatar={item.photos.small}
                                   key={item.id}
            />);
        return (<div>
                {this.props.isFetching ? <Preloader/> : null}
                <div style={{display: this.props.isFetching ? 'none' : 'block'}} >
                    <div>
                        {pagesMap}
                    </div>
                    {usersMap}
                </div>
            </div>
        )
    }
}

export default Users