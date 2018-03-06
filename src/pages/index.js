import React from 'react'
import Link from 'gatsby-link'
import Typography from "typography";

class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <a href="https://www.github.com/">source</a>
      </div>
    );
  }
}

export default IndexPage

export const query = graphql`
  query FrontPageQuery {
    imageSharp(id: { regex: "/ng-55646/" }) {
      sizes(maxWidth: 1500, rotate: 180) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
