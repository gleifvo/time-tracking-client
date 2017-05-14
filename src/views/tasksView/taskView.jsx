import React from 'react';
import '../../styles/TasksView.css';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import SocialPerson from 'material-ui/svg-icons/social/person';
import IconButton from 'material-ui/IconButton';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import ContentClear from 'material-ui/svg-icons/content/clear';

class TaskView extends React.Component {

    render() {
        const { task, editTask, deleteTask } = this.props;

        return (
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
        )
    }

}

export default TaskView;