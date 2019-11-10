import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    { id: 1, message: 'Hi, how are you?', likesCount: '16' },
    { id: 2, message: 'Bla-bla', likesCount: '2' },
    { id: 3, message: "It's my first post", likesCount: '29' }
]

let dialogs = [
    { id: 1, name: 'Dima' },
    { id: 2, name: 'Anja' },
    { id: 3, name: 'Valera' },
    { id: 4, name: 'Sveta' },
    { id: 5, name: 'Sasha' },
    { id: 6, name: 'Kostya' },
    { id: 7, name: 'Andrey' }
]

let messages = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How much fish today?' },
    { id: 3, message: 'hello everyone' },
    { id: 4, message: 'Who is it?' },
    { id: 5, message: 'il be back' },
    { id: 6, message: 'How are you?' }
]

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

