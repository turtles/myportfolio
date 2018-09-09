import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const LinkStyle = {
  paddingRight:'0.5em'
}

export default ({frontmatter}) => {
  return (
    <div
      style={{
        width:'50%',
        padding: '1em',
        boxSizing:'border-box',
        textAlign:'center',
      }}
    >
      <Img
        sizes={frontmatter.thumbnail.childImageSharp.sizes}
        style={{
          borderRadius: 8
        }}
      />
      <div style={{
          textAlign:'left',
          padding: '1em 0.5em',
        }}
      >
        <h4 style={{
            marginBottom: "0.5em",
          }}
        >{frontmatter.title}</h4>
        <p
          style={{
            marginBottom: "0.5em",
          }}
        >{frontmatter.subtitle}</p>
        {
          frontmatter.siteLink ? (
            <a href={frontmatter.siteLink}
              style={LinkStyle}
              target="_blank"
              rel="noopener noreferrer">
              {frontmatter.siteName}
            </a>
          ) : null
        }
        {
          frontmatter.sourceLink ? (
            <a href={frontmatter.sourceLink}
              style={LinkStyle}
              target="_blank"
              rel="noopener noreferrer">
              {frontmatter.sourceName}
            </a>
          ) : null
        }
      </div>
    </div>
  )
}
/*
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
}*/
