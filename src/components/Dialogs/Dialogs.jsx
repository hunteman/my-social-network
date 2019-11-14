import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import Button from '@material-ui/core/Button';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(
        dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />
    );

    let messagesElements = state.messages.map(
        m => <Message message={m.message} key={m.id} />
    );

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    };

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    };


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <textarea value={newMessageBody} 
                    onChange={onNewMessageChange}
                    placeholder='Enter your message'></textarea>
                    <Button variant="contained" className={s.addButton} onClick={onSendMessageClick}>Send</Button>
                </div>
            </div>
            {/* <div className={s.newPost}>
                <textarea ref={newPostElement} placeholder='Enter your message'></textarea>
                <Button variant="contained" className={s.addButton} onClick={()=>{alert('Hello')}}>Add post</Button>
            </div> */}
        </div>
    );
}

export default Dialogs;