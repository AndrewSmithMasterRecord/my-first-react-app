import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let postData = [
    {id: '1', likes: '10', message: 'Hello world'},
    {id: '2', likes: '2', message: 'Oppa!'},

];

let dialogsData = [
    {id: '1', name: 'Andrew'},
    {id: '2', name: 'Sveta'},
    {id: '3', name: 'Victor'},
    {id: '4', name: 'Valera'},
    {id: '5', name: 'Sasha'},
    {id: '6', name: 'Petya'},
];
let messagesData = [
    {id: '1', message: "Hi!"},
    {id: '2', message: "Why are you there?"},
    {id: '3', message: "I don't understand!"},
    {id: '4', message: 'Valera'},
    {id: '5', message: 'Sasha'},
    {id: '6', message: 'Petya'},
];


ReactDOM.render(
    <React.StrictMode>
        <App postData={postData} dialogsData={dialogsData}
             messagesData={messagesData}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
