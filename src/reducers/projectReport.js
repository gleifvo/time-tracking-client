import * as constants from '../constants';

const defaultState = {

}

const projectReport = (state = defaultState, action) => {
    switch (action.type) {
        case constants.LOAD_REPORT:
            const reports = action.payload.tasks
                .map(task => task.reports);

            const usersTime = [].concat(...reports)
                .reduce((result, value) => {
                    const { user, time } = value;

                    !result.hasOwnProperty(user.login)
                        ? result[user.login] = {
                            user,
                            time
                        }
                        : result[user.login].time += value.time;
                        
                    return result;
                }, {});

            return { ...state, ...action.payload, usersTime };
        default:
            return state;
    }
};

export default projectReport;