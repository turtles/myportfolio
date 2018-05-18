import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import picture from '../img/picture.png'

const Bio = props => (
  <div
    style={{
      display:'flex',
      justifyContent: 'center'
    }}>
    <div style={{
      width:'30%'
    }}>
      <Img sizes={props.sizes}
        style={{
          borderRadius: 8
        }}
      />
    </div>
    <div
      style={{
        width:'60%',
        padding:'.25em 2em'
      }}
    >
      {props.children}
    </div>
  </div>
)

export default Bio
