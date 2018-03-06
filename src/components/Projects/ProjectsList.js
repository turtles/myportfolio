import React from 'react'
import Link from 'gatsby-link'
import ProjectThumbnail from './ProjectThumbnail'
import ProjectRow from './ProjectRow'

class ProjectList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [
        {
          title:'Notecards',
          description:'Notecard studying app created with Redux. Lets you define notecards, with export/import options, and study from them.',
          skill: 'React',
          links: [
            ['Demo', 'https://turtles.github.io/notecards/'],
            ['Source', 'https://github.com/turtles/notecards']
          ],
          img: 'project1'
        },
        {
          title:'Interval Timer',
          description:'A timer that plays a sound on an interval to remind you that it is running.',
          skill: 'React',
          links: [
            ['Demo', 'https://turtles.github.io/react-app-interval-timer/'],
            ['Source', 'https://github.com/turtles/react-app-interval-timer']
          ],
          img: 'project2'
        },
        {
          title:'Bricks in Pieces',
          description:'3D brick breaker for Android. Optimized for the platform and full of content!',
          skill: 'Unity',
          links: [
            ['Google Play', 'https://play.google.com/store/apps/details?id=com.LeahsGames.BricksInPieces'],
          ],
          img: 'project3'
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
