import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false,
        }
    }
    clickHandler() {
        this.setState({
            isLoggedIn: false
        })
        console.log(this.isLoggedIn);
    };
    render() {
        return this.state.isLoggedIn? <div>Hello logged in</div> : <div>Hello Guest <button onClick={() => this.clickHandler()}>Connect</button></div>
    }
}

export default UserGreeting