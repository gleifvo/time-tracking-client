//@flow
import { connect } from 'react-redux';
import ProjectManagement from '../views/projectManagement';
import { push } from 'react-router-redux';
import { createProject } from '../actions/projects';

const mapStateToProps = (state) => {
    return {
        projects: state.projects,
        user: state.user,
        project: state.projectManagement
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (data) => {
            dispatch(createProject(data));
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectManagement)