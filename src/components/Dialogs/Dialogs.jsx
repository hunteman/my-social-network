import React from 'react';
import s from './Dialogs.module.css';


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={`${s.dialog} ${s.active}`}>
                    Dima
                </div>
                <div className={s.dialog}>
                    Anja
                </div>
                <div className={s.dialog}>
                    Valera
                </div>
                <div className={s.dialog}>
                    Sveta
                </div>
                <div className={s.dialog}>
                    Sasha
                </div>
                <div className={s.dialog}>
                    Kostya
                </div>
                <div className={s.dialog}>
                    Andrey
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>
                    How much fish today?</div>
                <div className={s.message}>
                    hello everyone</div>
            </div>
        </div>
    );
}

export default Dialogs;