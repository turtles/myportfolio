import React from 'react'
import Link from 'gatsby-link'
import project1 from '../img/project1.png'

class ProjectThumbnail extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div
        style={{
          width:"50%",
          padding: 10,
          boxSizing:'border-box',
          textAlign:'center',
        }}
      >
        <img
          src={project1}
          style={{
            borderRadius: 8
          }}
        />
        <div
          style={{
            textAlign:'left',
            padding: '0 1em',
          }}
        >
          <h4
            style={{
              marginBottom: "0.5em",
            }}
          >{this.props.title}</h4>
          <p
            style={{
              marginBottom: "0.5em",
            }}
          >{this.props.description}</p>
          <Link to='/projects/'>More</Link>
        </div>
      </div>
    )
  }
}

export default ProjectThumbnail
