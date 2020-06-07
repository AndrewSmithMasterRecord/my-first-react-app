import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
};
rerenderEntireTree(state);
state.rerenderEntireTree = rerenderEntireTree;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
