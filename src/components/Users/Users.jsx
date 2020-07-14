import React from "react";
import UserItem from "./UserItem/UserItem";
import s from './Users.module.css'
import Preloader from "../common/preloader";

class Users extends React.Component {

    componentDidMount() {
        this.props.getUsers(1, this.props.pageSize);
    }

    componentWillUnmount() {
        this.props.setCurrentPage(1);
        this.props.setUsersCounter(0);
    }

    onPageChanged(i) {
        this.props.setCurrentPage(i);
        this.props.getUsers(i, this.props.pageSize);
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
                                   follow={this.props.setFollow}
                                   unfollow={this.props.clearFollow}
                                   userAvatar={item.photos.small}
                                   key={item.id}
                                   followingInProgress={this.props.followingInProgress}
            />);
        return (<div>
                {this.props.isFetching ? <Preloader/> : null}
                <div style={{display: this.props.isFetching ? 'none' : 'block'}}>
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