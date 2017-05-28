import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';


class ProjectReport extends React.Component {

    componentWillMount() {
        const { project, changeView } = this.props;

        !project && changeView('/projects');
    }


    render() {
        const { project } = this.props;

        return (
            <Card>
                <CardTitle
                    style={{
                        textAlign: 'center'
                    }}
                    title={project && project.name}
                    subtitle={(project && project.user)
                        ? `${project.user.firstName} ${project.user.lastName} `
                        : ''} />
            </Card>
        )
    }

}

export default ProjectReport;