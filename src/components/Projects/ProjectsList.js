import React from 'react'
import Link from 'gatsby-link'
import ProjectThumbnail from './ProjectThumbnail'
import ProjectRow from './ProjectRow'

class ProjectList extends React.Component {
  render() {
    const {projects} = this.props;
    let uniqueIds = [];
    projects.forEach(({node: project}) => {
      const {frontmatter} = project;
      if (!uniqueIds.includes(frontmatter.skill)) {
        uniqueIds.push(frontmatter.skill);
      }
    });
    return (
      <div>
        {
          uniqueIds.map((skill,i)=>(
            <ProjectRow
              key={i}
              skill={skill}
              projects={projects}/>
          ))
        }
      </div>
    );
  }
}

export default ProjectList
