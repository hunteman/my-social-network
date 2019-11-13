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
            ]
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
        if(action.type === 'ADD-POST') {
            let newPost = {
                id:4,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if(action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText=action.newText;
            this._callSubscriber(this._state);
        }
    },
}

window.state = store;
export default store;


