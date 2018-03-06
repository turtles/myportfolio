import React from 'react'
import Link from 'gatsby-link'
import ProjectThumbnail from './ProjectThumbnail'

const ProjectRow = props => (
  <div>
    <h3>{props.skill}</h3>
    <div
      style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'left'
        }}>
    {
      props.projects.map(
        (project,i)=>{
          if (project.skill === props.skill)
          {
            return (<ProjectThumbnail
              key={i}
              title={project.title}
              description={project.description}
            />);
          }
        }
      )
    }
    </div>
  </div>
)

export default ProjectRow
