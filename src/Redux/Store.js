import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: '16' },
                { id: 2, message: 'Bla-bla', likesCount: '2' },
                { id: 3, message: "It's my first post", likesCount: '29' }
            ],
            newPostText: 'My Social Network'
        },
    
        dialogsPage: {
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
        },
    
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state is changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; // наблюдатель - в index.js в него приходит метод callSubscriber при вызове subscribe
    },

    // Обязательно св-во type: 'addPost'
    dispatch(action){

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.profilePage, action);
        this._state.sidebar = sidebarReducer(this._state.profilePage, action);
        
        this._callSubscriber(this._state);
    }
}

window.state = store;
export default store;


