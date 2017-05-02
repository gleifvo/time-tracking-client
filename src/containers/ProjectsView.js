//@flow
import { connect } from 'react-redux';
import ProjectsView from '../components/ProjectsView'

const mapStateToProps = (state) => {
    return state.projects;
};

export default connect(
    mapStateToProps,
    null
)(ProjectsView)