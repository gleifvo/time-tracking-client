//@flow
import { connect } from 'react-redux';
import TasksView from '../views/tasksView';
import { push } from 'react-router-redux';

const mapStateToProps = (state) => {
    return {
        tasksView: state.tasksView
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