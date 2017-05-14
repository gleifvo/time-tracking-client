import React from 'react';
import { Card, CardActions, CardTitle } from 'material-ui/Card';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';

class Header extends React.Component {

    render() {
        const { project, createNewTask } = this.props;

        return (
            <Card>
                <CardTitle
                    title={project && project.name}
                    subtitle={(project && project.user)
                        ? `${project.user.firstName} ${project.user.lastName} `
                        : ''} />
                <CardActions>
                    <RaisedButton
                        onTouchTap={() => createNewTask(project)}
                        label="Create task"
                        labelPosition="after"
                        primary={true}
                        icon={<ContentAdd />}
                    />
                </CardActions>
            </Card>
        )
    }

}

export default Header;