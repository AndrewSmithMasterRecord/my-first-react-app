import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Aside from "./components/Aside/Aside";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";


const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Nav/>
            <div className='app-wrapper-content'>
                <Dialogs/>
                {/*<Profile/>*/}
            </div>
            {/*<Aside/>*/}
            {/*<Footer/>*/}
        </div>
    );
};


export default App;
