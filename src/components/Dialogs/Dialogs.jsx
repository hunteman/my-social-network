import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import Button from '@material-ui/core/Button';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(
        dialog => <DialogItem name={dialog.name} id={dialog.id} />
    );

    let messagesElements = props.state.messages.map(
        m => <Message message={m.message} />
    );

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.newPost}>
                <textarea ref={newPostElement}></textarea>
                <Button variant="contained" className={s.addButton} onClick={addPost}>Add post</Button>
            </div>
        </div>
    );
}

export default Dialogs;