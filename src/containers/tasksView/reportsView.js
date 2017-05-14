//@flow
import { connect } from 'react-redux';
import ReportsView from '../../views/tasksView/reportsView';
import { createOrUpdateReport } from '../../actions/tasks';

const mapStateToProps = (state) => {
    return {
        user: state.user.userInfo
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createOrUpdateReport: (time, report, task) => {
            dispatch(createOrUpdateReport(time, report, task));
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReportsView)