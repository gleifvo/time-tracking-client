import * as constants from '../constants';

const defaultState = {
    isOpen: false
}

const navDrawer = (state = defaultState, action) => {
    switch (action.type) {
        case constants.TRIGGER_NAV_DRAWER:
            return { state, isOpen: !state.isOpen };
        default:
            return state;
    }
}

export default navDrawer;