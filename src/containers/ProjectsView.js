//@flow
import { connect } from 'react-redux';
import ProjectsView from '../views/projectsView';

const mapStateToProps = (state) => {
    return { projects: state.projects }
};

export default connect(
    mapStateToProps,
    null
)(ProjectsView)