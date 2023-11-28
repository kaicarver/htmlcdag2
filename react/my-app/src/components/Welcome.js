import React, {Component} from 'react';

class Welcome extends Component {
    render() {
        return (
                <h1>Welcome {this.props.prenom} vous avez {this.props.age} ans !</h1>
        );
    }
}

export default Welcome;
