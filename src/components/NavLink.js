import React from 'react'
import Link from 'gatsby-link'

const NavLink = props => (
  <Link
    to={props.to}
    style={{
      color: 'black',
      textDecoration: 'none',
      borderColor: '#CCCCCC',
      borderRadius: 8,
      padding: 4,
      margin: 4,
      borderWidth: 1,
      borderStyle: 'solid',
      display: 'inline-block'
    }}>
  {props.children}</Link>
)

export default NavLink
