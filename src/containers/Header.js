//@flow
import { connect } from 'react-redux';
import Header from '../components/header';
import { sendAuthRequest, logOut } from '../actions/user';
import { push } from 'react-router-redux';
import { triggerNavDrawer } from '../actions/navDrawer';


const mapStateToProps = (state) => {
    return { user: state.user }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (login, password) => {
            dispatch(sendAuthRequest(login, password))
        },
        logOut: () => {
            dispatch(logOut())
            dispatch(push('/'))
        },
        routeToUserInfo: () => {
            dispatch(push('/user-info'))
        },
        triggerDrawer: () => {
            dispatch(triggerNavDrawer())
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);