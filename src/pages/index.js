import React from 'react'
import Link from 'gatsby-link'
import Bio from '../components/Bio'
import SourceLinkBlock from '../components/SourceLinkBlock'

class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <Bio>
          <h2>Web Development ahoy!</h2>
          <p>I'm passionate about developing applications for the modern web. I'm experienced with web technologies such as React, Node.js, Express, Apollo Client, and GraphQL.</p>
          <p>Mobile game development is a side interest, with my engine of choice being Unity.</p>
        </Bio>
        <SourceLinkBlock/>
      </div>
    );
  }
}

export default IndexPage
