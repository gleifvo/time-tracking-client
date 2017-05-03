import React from 'react';
import Snackbar from 'material-ui/Snackbar';

class Notification extends React.Component {

    render() {

        let { open, message, time, hideNotification } = this.props;
        return (
            <Snackbar
                contentStyle={{
                    textAlign: 'center'
                }}
                open={open}
                message={message}
                autoHideDuration={time}
                onRequestClose={hideNotification}
            />
        );
    }

}

export default Notification;