import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import ProjectThumbnail from './ProjectThumbnail'

class ProjectList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
      style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}
      >
        <ProjectThumbnail
          title='third person me'
          to='/projects/'
        >
          description here please
        </ProjectThumbnail>
          <ProjectThumbnail
            title='third person me'
            to='/projects/'
          >
            description here please
        </ProjectThumbnail>
          <ProjectThumbnail
            title='third person me'
            to='/projects/'
          >
            description here please
        </ProjectThumbnail>
          <ProjectThumbnail
            title='third person me'
            to='/projects/'
          >
            description here please
          </ProjectThumbnail>
      </div>
    );
  }
}

export default ProjectList
