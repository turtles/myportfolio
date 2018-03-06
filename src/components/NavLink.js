import React from 'react'
import Link from 'gatsby-link'

const NavLink = props => (
  <Link
    to={props.to}
    style={{
      color: 'black',
      textDecoration: 'none',
      fontWeight:300,
      textTransform: 'uppercase',
      borderColor: '#CCCCCC',
      borderRadius: 8,
      padding: 6,
      margin: 8,
      borderWidth: 1,
      borderStyle: 'solid',
      display: 'inline-block'
    }}
    activeStyle={{
      borderColor: 'black'
    }}
    exact={true}
  >
  {props.children}</Link>
)

export default NavLink
