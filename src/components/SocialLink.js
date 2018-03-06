import React from 'react'
import Link from 'gatsby-link'
import Ionicon from 'react-ionicons'

class SocialLink extends React.Component {
  constructor(props) {
    super(props);

    if (props.site==='github') {
      this.state = {iconName: 'logo-github'}
    }

    if (props.site==='twitter') {
      this.state = {iconName: 'logo-twitter'}
    }
  }
  render() {
    return (
      <Link
        to={this.props.to}
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
      <Ionicon icon={this.state.iconName} fontSize="1.5em"/></Link>
    );
  }
}

export default SocialLink
