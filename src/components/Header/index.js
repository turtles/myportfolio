import React from 'react'
import Link from 'gatsby-link'
import NavLink from '../NavLink'
import SocialLink from '../SocialLink'
import Ionicon from 'react-ionicons'

const Header = props => (
  <div
    style={{
      background: 'white',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        minHeight: '6rem',
      }}
    >
      <div style={{width: '50%', float: 'left'}}>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: 'black',
              textDecoration: 'none',
            }}
          >
            Leah Sandacz
          </Link>
        </h1>
        <h5
          style={{
            color: 'black',
            textDecoration: 'none',
          }}>
          Software Developer
        </h5>
      </div>
      <div style={{marginLeft: '50%', width:'30%'}}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects/">Projects</NavLink>
      </div>
      <div style={{float:'right'}}>
        <SocialLink site='github'/>
        <SocialLink site='twitter'/>
      </div>
    </div>
  </div>
)

export default Header
