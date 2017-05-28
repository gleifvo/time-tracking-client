//@flow
import { connect } from 'react-redux';
import ProjectReport from '../views/projectReport';
import { fetchProjects, deleteProject } from '../actions/projects';
import { showConfirmation } from '../actions/confirmation';
import { createNew as createNewProject, fetchProjectForEdit } from '../actions/projectManagement';
import { push } from 'react-router-redux';
import { fetchTasks } from '../actions/tasks';

const mapStateToProps = (state) => {
    return {
        user: state.user,
        ...state.projectReport
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
)(ProjectReport)