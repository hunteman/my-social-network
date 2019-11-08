import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

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

    let dialogsElements = dialogs.map(
        dialog => <DialogItem name={dialog.name} id={dialog.id} />
    );

    let messagesElements = messages.map(
        m => <Message message={m.message} />
    );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;