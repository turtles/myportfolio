import React from 'react'
import Link from 'gatsby-link'
import project1 from '../../img/project1.png'
import project2 from '../../img/project2.png'
import project3 from '../../img/project3.png'

class ProjectThumbnail extends React.Component {
  constructor(props) {
    super(props);
  }
  getImageSourceFromName(name) {
    if (name === 'project1') return project1;
    if (name === 'project2') return project2;
    if (name === 'project3') return project3;
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
          src={this.getImageSourceFromName(this.props.img)}
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
          {
            this.props.links.map((link,i)=> {
              return (
                <span style={{
                  paddingRight:'0.5em'
                }}><a key={i}
                  href={link[1]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link[0]}
                </a></span>);
            })
          }
        </div>
      </div>
    )
  }
}

export default ProjectThumbnail
