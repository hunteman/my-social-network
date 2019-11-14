import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route} from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {    
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    {/* Атрибут render вместо component позволяет вызвать ф-цию и передать не компонент целиком, а jsx разметку и пропсы в ней*/}
                    <Route path='/profile' 
                        render={() => <Profile />}/>
                    <Route exact path='/dialogs' 
                        render={() => <DialogsContainer />}/>
                </div>
            </div>
    )
}

export default App;
