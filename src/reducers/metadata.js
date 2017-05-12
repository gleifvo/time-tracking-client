import * as constants from '../constants';

const defaultState = {
    users: []
}

const metadata = (state = defaultState, action) => {
    switch (action.type) {
        case constants.LOAD_USERS:
            return { ...state, ...action.payload };
        case constants.REMOVE_USER:
            return {
                ...state, users: state.users
                    .filter(user => user.login !== action.payload.login)
            };
        default:
            return state;
    }
};

export default metadata;