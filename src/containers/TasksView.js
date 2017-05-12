//@flow
import { connect } from 'react-redux';
import TasksView from '../views/tasksView';
import { push } from 'react-router-redux';

const mapStateToProps = (state) => {
    return {
        user: state.user,
        tasks: state.tasks
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeView: (path) => {
            dispatch(push(path));
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TasksView)