import React from 'react';

class TasksView extends React.Component {

    render() {
        const { tasks, user } = this.props;

        return (
            <div>
                <h1>Tasks view!</h1>
            </div>
        )
    }

}

export default TasksView;