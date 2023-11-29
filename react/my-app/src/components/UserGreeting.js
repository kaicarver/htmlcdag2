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
            isLoggedIn: true
        })
        console.log(this.isLoggedIn);
    };
    render() {
            if (this.state.isLoggedIn) {
                return <div>Hello logged in</div>
            } else {
                return <div>Hello Guest
                    <button onClick={() => this.clickHandler()}>Connect</button>
                    </div>
            }
    }
}

export default UserGreeting