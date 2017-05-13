import React from 'react';
import Paper from 'material-ui/Paper';
import '../../styles/TasksView.css';
import { Tabs, Tab } from 'material-ui/Tabs';
import { Card, CardActions, CardTitle } from 'material-ui/Card';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import SocialPerson from 'material-ui/svg-icons/social/person';

class TasksView extends React.Component {

    componentWillMount() {
        const { tasksView, changeView, fetchTasks } = this.props;
        !tasksView.project
            ? changeView('/projects')
            : fetchTasks(tasksView.project);
    }

    render() {
        const { tasksView, createNewTask } = this.props;

        return (
            <div className='tasks_view'>
                <div>
                    <Card>
                        <CardTitle
                            title={tasksView.project && tasksView.project.name}
                            subtitle={tasksView.project
                                && `${tasksView.project.user.firstName} ${tasksView.project.user.lastName} `} />
                        <CardActions>
                            <RaisedButton
                                onTouchTap={() => createNewTask(tasksView.project)}
                                label="Create task"
                                labelPosition="after"
                                primary={true}
                                icon={<ContentAdd />}
                            />
                        </CardActions>
                    </Card>
                </div>
                <ul className='tasks_block'>
                    {tasksView.tasks.map((task, index) => {
                        return <li key={index} className='task'>
                            <Paper zDepth={3} children={
                                <div>
                                    <h2>{task.name} </h2>
                                    <Tabs>
                                        <Tab label="Description" >
                                            <div className='container'>
                                                <Chip>
                                                    <Avatar color="#444" icon={<SocialPerson />} />
                                                    {`${task.user.firstName} ${task.user.lastName}`}
                                                </Chip>
                                                <h3>{task.description}</h3>
                                            </div>
                                        </Tab>
                                        <Tab label="Time Reporting" >
                                            <div className='container'>
                                                <h2 >Time Reporting</h2>
                                            </div>
                                        </Tab>
                                    </Tabs>
                                </div>
                            } />
                        </li>
                    })
                    }
                </ul>
            </div>
        )
    }

}

export default TasksView;