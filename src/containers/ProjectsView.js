//@flow
import { connect } from 'react-redux';
import ProjectsView from '../views/projectsView';
import { fetchProjects } from '../actions/projects';

const mapStateToProps = (state) => {
    return { projects: state.projects }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProjects: () => {
            dispatch(fetchProjects());
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectsView)