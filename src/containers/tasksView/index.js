//@flow
import { connect } from 'react-redux';
import TasksView from '../../views/tasksView';
import { push } from 'react-router-redux';
import { createNew, edit } from '../../actions/taskManagement';
import { fetchTasks, deleteTask, fetchReports } from '../../actions/tasks';
import { showConfirmation } from '../../actions/confirmation';

const mapStateToProps = (state) => {
    return {
        tasksView: state.tasksView,
        user: state.user.userInfo,
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
        deleteTask: (task) => {
            dispatch(showConfirmation(
                { message: 'Are you sure to delete this task?' },
                deleteTask(task)
            ))
        },
        changeView: (path) => {
            dispatch(push(path));
        },
        fetchTasks: (project) => {
            dispatch(fetchTasks(project));
        },
        fetchReports: (task) => {
            dispatch(fetchReports(task));
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TasksView)