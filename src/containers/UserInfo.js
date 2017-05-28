//@flow
import { connect } from 'react-redux';
import UserInfo from '../views/userInfo'
import { fetchReport } from '../actions/user';

const mapStateToProps = (state) => {
    return { userData: state.user }
};

const mapDispatchToProps = (dispatch) => {
    return {
        showReport: (user) => {
            dispatch(fetchReport(user));
        },
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserInfo)