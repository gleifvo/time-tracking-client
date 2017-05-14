import React from 'react';
import Paper from 'material-ui/Paper';
import { Tabs, Tab } from 'material-ui/Tabs';
import ActionInfo from 'material-ui/svg-icons/action/info';
import ActionSchedule from 'material-ui/svg-icons/action/schedule';
import ReportsView from '../../containers/tasksView/reportsView';
import TaskView from './taskView';
import Header from './header';

import '../../styles/TasksView.css';

class TasksView extends React.Component {

    componentWillMount() {
        const { tasksView, changeView, fetchTasks } = this.props;
        !tasksView.project
            ? changeView('/projects')
            : fetchTasks(tasksView.project);
    }

    render() {
        const { user, tasksView, createNewTask, editTask, deleteTask, fetchReports } = this.props;

        return (
            <div className='tasks_view'>
                <Header
                    project={tasksView.project}
                    createNewTask={createNewTask}
                />
                <ul className='tasks_block'>
                    {tasksView.tasks.map((task, index) => {
                        const userReport = task.reports &&
                            task.reports.find(report => user.login === report.user.login);

                        return <li key={index} className='task'>
                            <Paper zDepth={3} children={
                                <div>
                                    <h2>{task.name} </h2>
                                    <Tabs>
                                        <Tab label="Description"
                                            icon={<ActionInfo />}>
                                            <TaskView
                                                task={task}
                                                editTask={editTask}
                                                deleteTask={deleteTask} />
                                        </Tab>
                                        <Tab
                                            label="Time Reporting"
                                            onActive={() => fetchReports(task)}
                                            icon={<ActionSchedule />}>
                                            {task.reports && <ReportsView
                                                initialValues={{
                                                    time: userReport
                                                        ? userReport.time
                                                        : 0
                                                }}
                                                userReport={userReport}
                                                form={task.name}
                                                task={task} />
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