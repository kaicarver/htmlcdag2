import React, { Component } from 'react'

export class ClassClick extends Component {
    clickHandler() {
        console.log('bouton class clicked');
    }
  render() {
    return (
      <div><button onClick={this.clickHandler}>ClassClick</button></div>
    )
  }
}

export default ClassClick