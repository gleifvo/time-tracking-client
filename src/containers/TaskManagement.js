//@flow
import { connect } from 'react-redux';
import TaskManagement from '../views/taskManagement';
import { createOrUpdateTask } from '../actions/taskManagement';
import { push } from 'react-router-redux';


const mapStateToProps = (state) => {
    return {
        initialValues: state.taskManagement
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createOrUpdateTask: (task) => {
            dispatch(createOrUpdateTask({ ...task, project: task.project._links.self.href }));
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