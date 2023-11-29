import React, { Component } from 'react'

export class AdminTest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      admin: false
    }
  }
  render() {
    var button = <button onClick={() => this.setState({ admin: !this.state.admin })}>Toggle!</button>

    return (
      this.state.admin ?
        <div>
          Welcome Admin
          {button}
        </div> :
        <div>
          Veuillez vous connecter en tant qu'admin
          {button}
        </div>
    )
  }
}

export default AdminTest