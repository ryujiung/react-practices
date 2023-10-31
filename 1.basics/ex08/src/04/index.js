import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App.js';


// document
//     .getElementById('root')
//     .appendChild(App());

ReactDOM.render(App(), document.getElementById('root'));

ShadowRoot.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);