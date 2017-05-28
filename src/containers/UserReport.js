//@flow
import { connect } from 'react-redux';
import UserReport from '../views/userReport';
import { push } from 'react-router-redux';

const mapStateToProps = (state) => {
    return {
        ...state.userReport
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
)(UserReport)