import React from 'react'
import Link from 'gatsby-link'
import ProjectsList from '../components/ProjectsList'
import Bio from '../components/Bio'

class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <Bio>
          <h2>Web and Mobile Development ahoy!</h2>
          <p>I'm passionate about modern web and mobile techonologies such as React, React Native, Node, Express, and GraphQL.</p>
          <p>Mobile game development is a side interest, with my engine of choice being Unity.</p>
        </Bio>
        <div style={{width:'100%', display:'block', textAlign:'center'}}>
          <a style={{
            color:'black'
          }}
          href="https://www.github.com/">source</a>
        </div>
      </div>
    );
  }
}

export default IndexPage
