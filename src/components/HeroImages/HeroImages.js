import React, { Component } from 'react'
import './HeroImages.css'

class HeroImages extends Component {
  render () {
    return (
      <div className='hero-img'>
        <div className='heading'>
          <h1>{this.props.heading}</h1>
          <p className='heading_subtitle'>{this.props.text}</p>
        </div>
      </div>
    )
  }
}

export default HeroImages
