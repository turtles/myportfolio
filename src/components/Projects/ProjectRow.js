import React from 'react'
import Link from 'gatsby-link'
import ProjectListItem from './ProjectListItem'

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
        ({node: project},i)=>{
          const {frontmatter} = project;
          if (frontmatter.skill === props.skill) {
            return (<ProjectListItem
                key={i}
                frontmatter={frontmatter}
              />);
          }
          else {
            return null;
          }
        }
      )
    }
    </div>
  </div>
)

export default ProjectRow
