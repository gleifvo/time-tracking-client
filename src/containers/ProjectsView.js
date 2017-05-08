//@flow
import { connect } from 'react-redux';
import ProjectsView from '../views/projectsView';
import { fetchProjects, deleteProject } from '../actions/projects';
import { showConfirmation } from '../actions/confirmation';
import { edit as editProject, createNew as createNewProject } from '../actions/projectManagement';
import { push } from 'react-router-redux';

const mapStateToProps = (state) => {
    return {
        projects: state.projects,
        user: state.user
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProjects: () => {
            dispatch(fetchProjects());
        },
        createNewProject: () => {
            dispatch(createNewProject());
            dispatch(push('/project-management'));
        },
        editProject: (project) => {
            dispatch(editProject(project));
            dispatch(push('/project-management'));
        },
        deleteProject: (project) => {
            dispatch(showConfirmation({
                message: 'Are you sure to delete this project?'
            }, () => {
                dispatch(deleteProject(project));
            }))
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectsView)