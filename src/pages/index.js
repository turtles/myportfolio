import React from 'react'
import Link from 'gatsby-link'
import ProjectsList from '../components/ProjectsList'

class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <ProjectsList/>
        <a href="https://www.github.com/">source</a>
      </div>
    );
  }
}

export default IndexPage
