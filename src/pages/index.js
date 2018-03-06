import React from 'react'
import Link from 'gatsby-link'
import Typography from "typography";

class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <p>tons of coffee for everyone!</p>
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
