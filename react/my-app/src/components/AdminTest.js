import React, { Component } from 'react'

export class AdminTest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      admin: false
    }
  }
  render() {
    return (
      this.state.admin ?
        <div>
          <button onClick={() => this.setState({ admin: !this.state.admin })}>Toggle</button>
          Welcome Admin
        </div> :
        <div>
          <button onClick={() => this.setState({ admin: !this.state.admin })}>Toggle</button>
          Veuillez vous connecter en tant qu'admin
        </div>
    )
  }
}

export default AdminTest