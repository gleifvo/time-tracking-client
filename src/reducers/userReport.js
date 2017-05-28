import * as constants from '../constants';

const defaultState = {

}

const userReport = (state = defaultState, action) => {
    switch (action.type) {
        case constants.LOAD_USER_REPORT:
            const reports = action.payload.reports
                .reduce((result, report) => {
                    const { task, date, time } = report;

                    !result.hasOwnProperty(task.project.name)
                        ? result[task.project.name] = [{
                            task,
                            time,
                            date
                        }]
                        : result[task.project.name].push({
                            task,
                            time,
                            date
                        })

                    return result;
                }, {});

            return { ...state, user: action.payload.user, reports };
        default:
            return state;
    }
};

export default userReport;