import React from 'react'
import Link from 'gatsby-link'
import ProjectsList from '../components/Projects/ProjectsList'
import SourceLinkBlock from '../components/SourceLinkBlock'

const ProjectsPage = ({data}) => (
  <div>
    <ProjectsList projects={data.allMarkdownRemark.edges} />
    <SourceLinkBlock />
  </div>
)

export default ProjectsPage

export const projectsQuery = graphql`
query ProjectsQuery {
  allMarkdownRemark {
    totalCount
    edges {
      node {
        frontmatter {
          thumbnail {
            childImageSharp {
              sizes(maxWidth: 380, maxHeight: 290, cropFocus: CENTER) {
                ...GatsbyImageSharpSizes
              }
            }
          }
          title
          subtitle
          skill
          siteLink
          siteName
          sourceLink
          sourceName
        }
        fields {
          slug
        }
      }
    }
  }
}
`
