import { handleActions } from 'redux-actions';

import { loadUsers } from '../actions/users';

const initialState = {
    users = []
}

const reducer = handleActions({
    [loadUsers]: (state, action) => {
        return {
            users: [
                { id: 1, name: 'Vasya' },
                { id: 2, name: 'Kolya' }
            ]
        }
    }
}, initialState);