import React, { Component } from 'react'

export default class Category extends Component {
  render() {
    let category=this.props.category
    return (
      <div className='category'>
        <span className='id'>category:{category._id}</span>
        <span className='sum'>totale amounts:{category.sum}</span>
      </div>
    )
  }
}
