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
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <div>
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
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects/">Projects</NavLink>
      </div>
      <div>
        <SocialLink site='github'/>
        <SocialLink site='twitter'/>
      </div>
    </div>
  </div>
)

export default Header
