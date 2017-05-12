import React from 'react';
import Paper from 'material-ui/Paper';

class TasksView extends React.Component {

    componentDidMount() {
        const { tasks, changeView } = this.props;
        !tasks.project && changeView('/projects');
    }


    render() {
        const style = {
            height: 250,
            width: 250,
            margin: 5,
            textAlign: 'center',
            display: 'inline-block',
        };

        const { tasks, user } = this.props;

        return (
            <div>
                <h1>Tasks view!</h1>
                {tasks.tasks.map((task, index) => {
                    return <Paper style={style} zDepth={3} children={
                        <h2>{task.description} </h2>
                    } />
                })
                }
            </div>
        )
    }

}

export default TasksView;