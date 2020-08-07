import React from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import {Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {initialise} from "./redux/app_reducer";
import {connect} from "react-redux";
import {compose} from "redux";
import Preloader from "./components/common/preloader";


class App extends React.Component {
    componentDidMount() {
        this.props.initialise();
        if(!this.props.isAuth)
            this.props.history.push("/login");
    }

    render() {
        if(!this.props.initialized)
            return <Preloader/>;
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Nav/>
                <div className='app-wrapper-content'>
                    {/*<Route path='/dialogs' component={DialogItem}/>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>*/}
                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

let mapStateToProps = state => ({
    initialized: state.app.initialized,
    isAuth: state.auth.isAuth
});


export default compose(
    withRouter,
    connect(mapStateToProps, {initialise}))(App);
