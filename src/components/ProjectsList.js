import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import ProjectThumbnail from './ProjectThumbnail'
import ProjectRow from './ProjectRow'

class ProjectList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [
        {
          title:'project 1',
          description:'short description here please',
          skill: 'React'
        },
        {
          title:'project 2',
          description:'short description here please',
          skill: 'React'
        },
        {
          title:'project 3',
          description:'short description here please',
          skill: 'Python'
        },
        {
          title:'project 4',
          description:'short description here please',
          skill: 'Unity'
        },
      ]
    };
  }
  render() {
    let uniqueIds = [];
    this.state.projects.forEach(project => {
      if (!uniqueIds.includes(project.skill)) {
        uniqueIds.push(project.skill);
      }
    });
    return (
      <div>
        {
          uniqueIds.map((skill,i)=>(
            <ProjectRow
              key={i}
              skill={skill}
              projects={this.state.projects}/>
          ))
        }
      </div>
    );
  }
}

export default ProjectList
