//@flow
import { connect } from 'react-redux';
import ReportsView from '../../views/tasksView/reportsView';

const mapStateToProps = (state) => {
    return {
        user: state.user.userInfo,
        userHref: state.user.userInfo._links.self.href
    }
};

export default connect(
    mapStateToProps,
    null
)(ReportsView)