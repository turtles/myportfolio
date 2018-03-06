import React from 'react'
import Link from 'gatsby-link'
import Ionicon from 'react-ionicons'

class SocialLink extends React.Component {
  constructor(props) {
    super(props);

    if (props.site==='github') {
      this.state = {iconName: 'logo-github', href: 'https://github.com/turtles'}
    }

    if (props.site==='twitter') {
      this.state = {iconName: 'logo-twitter', href: 'https://twitter.com/parakeetage'}
    }
  }
  render() {
    return (
      <a
        href={this.state.href}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: 'black',
          textDecoration: 'none',
          borderColor: '#CCCCCC',
          borderRadius: 999,
          padding: 6,
          lineHeight:'.8em',
          margin: 4,
          borderWidth: 1,
          borderStyle: 'solid',
          display: 'inline-block'
        }}>
      <Ionicon icon={this.state.iconName} fontSize="1.5em"/></a>
    );
  }
}

export default SocialLink
