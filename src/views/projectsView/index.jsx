import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ActionPageview from 'material-ui/svg-icons/action/pageview';

class ProjectsView extends React.Component {

    render() {

        const { projects } = this.props;

        return (
            <div >
                <GridList
                    cellHeight={180}
                    padding={0}>
                    {projects.map((project) => (
                        <GridTile
                            key={project.id}
                            title={project.name}
                            subtitle={<span>by <b>{project.user.firstName}</b></span>}
                            actionIcon={<IconButton><ActionPageview color="white" /></IconButton>}                            >
                        </GridTile>
                    ))}
                </GridList>
            </div>
        )
    }

}

export default ProjectsView;