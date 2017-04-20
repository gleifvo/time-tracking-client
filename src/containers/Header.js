//@flow
import { connect } from 'react-redux';
import Header from '../components/header/Header.jsx';
import { sendAuthRequest, logOut } from '../actions/user';


const mapStateToProps = (state) => {
    return { user: state.user }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (login, password) => {
            dispatch(sendAuthRequest(login, password))
        },
        logOut: (login, password) => {
            dispatch(logOut())
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);