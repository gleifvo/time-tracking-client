//@flow
import { connect } from 'react-redux';
import TasksView from '../views/tasksView'

const mapStateToProps = (state) => {
    return {
        user: state.user,
        tasks: state.tasks
    }
};

export default connect(
    mapStateToProps,
    null
)(TasksView)