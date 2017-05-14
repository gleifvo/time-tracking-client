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
import IconButton from 'material-ui/IconButton';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import ContentClear from 'material-ui/svg-icons/content/clear';
import ActionInfo from 'material-ui/svg-icons/action/info';
import ActionSchedule from 'material-ui/svg-icons/action/schedule';
import LinearProgress from 'material-ui/LinearProgress';

class TasksView extends React.Component {

    componentWillMount() {
        const { tasksView, changeView, fetchTasks } = this.props;
        !tasksView.project
            ? changeView('/projects')
            : fetchTasks(tasksView.project);
    }

    render() {
        const { tasksView, createNewTask, editTask, deleteTask } = this.props;

        return (
            <div className='tasks_view'>
                <div>
                    <Card>
                        <CardTitle
                            title={tasksView.project && tasksView.project.name}
                            subtitle={(tasksView.project && tasksView.project.user)
                                ? `${tasksView.project.user.firstName} ${tasksView.project.user.lastName} `
                                : ''} />
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
                                        <Tab label="Description"
                                            icon={<ActionInfo />}>
                                            <div className='container'>
                                                <Chip>
                                                    <Avatar color="#444" icon={<SocialPerson />} />
                                                    {task.user
                                                        ? `${task.user.firstName} ${task.user.lastName}`
                                                        : 'Deleted user'
                                                    }
                                                </Chip>
                                                <IconButton
                                                    className="task-edit"
                                                    onTouchTap={() => { editTask(task) }}>
                                                    <EditorModeEdit color="black" />
                                                </IconButton>
                                                <IconButton
                                                    className="task-delete"
                                                    onTouchTap={() => { deleteTask(task) }}>
                                                    <ContentClear color="black" />
                                                </IconButton>
                                                <h3>{task.description}</h3>
                                            </div>
                                        </Tab>
                                        <Tab
                                            label="Time Reporting"
                                            icon={<ActionSchedule />}>
                                            {task.reports
                                                ? 'Reports'
                                                : <div className='loading-block'>
                                                    <LinearProgress mode="indeterminate" />
                                                </div>
                                            }

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