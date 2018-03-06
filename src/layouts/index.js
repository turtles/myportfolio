import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import './index.css'

class TemplateWrapper extends React.Component {
  render() {
    return (
      <div
        style={{
          maxWidth: '960',
          margin: 'auto',
          marginTop: '4rem',
          marginBottom: '4rem',
          background:'white',
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.09)',
        }}>
        <Helmet
          title="Gatsby Default Starter"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Header />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {this.props.children()}
        </div>
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
