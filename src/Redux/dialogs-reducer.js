const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How much fish today?' },
        { id: 3, message: 'hello everyone' },
        { id: 4, message: 'Who is it?' },
        { id: 5, message: 'il be back' },
        { id: 6, message: 'How are you?' }
    ],

    dialogs: [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Anja' },
        { id: 3, name: 'Valera' },
        { id: 4, name: 'Sveta' },
        { id: 5, name: 'Sasha' },
        { id: 6, name: 'Kostya' },
        { id: 7, name: 'Andrey' }
    ],

    newMessageBody: ""
};


const dialogsReducer = (state=initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {
                    id: 7,
                    message: body
                }]
            };
        default:
            return state;

    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => 
({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;