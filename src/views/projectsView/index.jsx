import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ActionPageview from 'material-ui/svg-icons/action/pageview';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';

class ProjectsView extends React.Component {

    componentDidMount() {
        this.props.fetchProjects();
    }

    render() {
        const { projects, user, createNewProject, editProject, deleteProject, showTasks, showReport } = this.props;

        return (
            <div>
                {user.userInfo.userType === 'ADMIN' &&
                    <RaisedButton
                        style={{
                            marginTop: '3px'
                        }}
                        primary={true}
                        icon={<ContentAdd />}
                        onTouchTap={createNewProject}
                    />
                }
                <GridList
                    cellHeight={180}
                    padding={0}>
                    {projects.map((project, index) => (
                        <GridTile
                            key={index}
                            title={project.name}
                            subtitle={<span>by <b>
                                {project.user
                                    ? `${project.user.firstName} ${project.user.lastName}`
                                    : 'Deleted user'
                                }
                            </b></span>}
                            actionIcon={<div>
                                {user.userInfo.userType === 'ADMIN' &&
                                    <span>
                                        <IconButton onTouchTap={() => deleteProject(project)}>
                                            <ActionDelete color="white" />
                                        </IconButton>
                                        <IconButton onTouchTap={() => editProject(project)}>
                                            <EditorModeEdit color="white" />
                                        </IconButton>
                                    </span>
                                }
                                <IconButton onTouchTap={() => showReport(project)}>
                                    <ActionAssignment color="white" />
                                </IconButton>
                                <IconButton onTouchTap={() => showTasks(project)}>
                                    <ActionPageview color="white" />
                                </IconButton>
                            </div>}>
                        </GridTile>
                    ))}
                </GridList>
            </div>
        )
    }

}

export default ProjectsView;