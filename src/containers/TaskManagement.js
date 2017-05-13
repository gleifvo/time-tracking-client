//@flow
import { connect } from 'react-redux';
import TaskManagement from '../views/taskManagement';
import { createOrUpdateTask } from '../actions/taskManagement';
import { push } from 'react-router-redux';
import diff from 'object-diff';


const mapStateToProps = (state) => {
    return {
        initialValues: state.taskManagement
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createOrUpdateTask: (payload) => {
            const updatedData = {
                ...diff(payload.initialValues, payload.data)
            }

            const isNew = payload.initialValues.isNew;
            dispatch(createOrUpdateTask({ ...updatedData }, {
                isNew,
                project: isNew && payload.data.project._links.self.href,
                href: !isNew && payload.data._links.self.href
            }));
        },
        changeView: (path) => {
            dispatch(push(path));
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskManagement)