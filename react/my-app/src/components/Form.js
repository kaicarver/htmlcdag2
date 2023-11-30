import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            comments: '',
            topic: 'react'
        }
    }
    render() {
        const { username, comments, topic } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Username</label>
                    <input type="text" value={username} onChange={e => this.setState({ username: e.target.value })} />
                    <label>Comments</label>
                    <input type="text" value={comments} onChange={e => this.setState({ comments: e.target.value })} />
                    <label>Topic</label>
                    <input type="text" value={topic} onChange={e => this.setState({ topic: e.target.value })} />
                </form>
            </div>
        )
    }
}

export default Form