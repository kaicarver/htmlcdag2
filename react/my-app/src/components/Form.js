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
    handleUsernameChange = event => {
        console.log(event.target.value);
        this.setState({ username: event.target.value });
    }
    handleCommentsChange = event => {
        console.log(event.target.value);
        this.setState({ comments: event.target.value });
    }
    handleTopicChange = event => {
        console.log(event.target.value);
        this.setState({ topic: event.target.value });
    }
    render() {
        const { username, comments, topic } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Username</label>
                    <input type="text" value={username} onChange={this.handleUsernameChange} />
                    <label>Comments</label>
                    <input type="text" value={comments} onChange={this.handleCommentsChange} />
                    <label>Topic</label>
                    <input type="text" value={topic} onChange={this.handleTopicChange} />
                </form>
            </div>
        )
    }
}

export default Form