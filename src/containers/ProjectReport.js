//@flow
import { connect } from 'react-redux';
import ProjectReport from '../views/projectReport';
import { push } from 'react-router-redux';

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