//@flow
import { connect } from 'react-redux';
import TasksView from '../views/tasksView';
import { push } from 'react-router-redux';
import { createNew, edit } from '../actions/taskManagement';
import { fetchTasks } from '../actions/tasks';

const mapStateToProps = (state) => {
    return {
        tasksView: state.tasksView
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createNewTask: (project) => {
            dispatch(createNew(project));
            dispatch(push('/task-management'));
        },
        editTask: (task) => {
            dispatch(edit(task));
            dispatch(push('/task-management'));
        },
        changeView: (path) => {
            dispatch(push(path));
        },
        fetchTasks: (project) => {
            dispatch(fetchTasks(project));
        },
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TasksView)