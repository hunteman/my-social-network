import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    {/* Атрибут render вместо component позволяет вызвать ф-цию и передать не компонент целиком, а jsx разметку и пропсы в ней*/}
                    <Route path='/profile' render={() => <Profile />}/>
                    <Route exact path='/dialogs' render={() => <Dialogs />}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
