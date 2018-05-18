import React from 'react'
import Link from 'gatsby-link'
import Bio from '../components/Bio'
import SourceLinkBlock from '../components/SourceLinkBlock'

const IndexPage = ({data}) => {
  const {imageSharp} = data;
  return (
    <div>
      <Bio sizes={imageSharp.sizes}>
        <h2>Web Development ahoy!</h2>
        <p>I'm passionate about developing applications for the modern web. I'm experienced with web technologies such as React, Node.js, Express, MongoDB, GraphQL and Apollo Client.</p>
        <p>Mobile game development is a side interest, with my engine of choice being Unity.</p>
      </Bio>
      <SourceLinkBlock/>
    </div>
  );
}

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    imageSharp(id: { regex: "/picture.png/" }) {
      sizes(maxWidth: 480) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
