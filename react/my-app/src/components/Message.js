import React, {Component} from 'react';

class Message extends Component {
    constructor() {
        super();
        this.state = {
            message: 'Welcome visitorzz from state'
        };
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() =>
                    this.setState({
                        message: 'Welcome visitor from button'
                    })
                }>Click me</button>
            </div>
        )
    } 
};

export default Message;