import React from 'react'
import Link from 'gatsby-link'
import ProjectThumbnail from './ProjectThumbnail'

const ProjectRow = props => (
  <div>
    <div style={{
      display:'block',
      width: '100%',
      textAlign:'center'
    }}>
    <h2 style={{
        margin: '0 0.5em 0.5em 0.5em'
      }}
    >{props.skill}</h2>
    </div>
    <div
      style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'left',
          marginBottom:'1.25em'
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
              links={project.links}
              img={project.img}
            />);
          }
        }
      )
    }
    </div>
  </div>
)

export default ProjectRow
