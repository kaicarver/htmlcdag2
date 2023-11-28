import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    increment() {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
        console.log(this.state.count);
    }
    incrementBad() {
        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count);
    }
    incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={()=>this.increment()}>
                    Increment + 1
                </button>
                <button onClick={()=>this.incrementFive()}>
                    Increment + 5
                </button>
            </div>
        )
    }
}

export default Counter