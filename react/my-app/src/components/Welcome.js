import React, {Component} from 'react';

class Welcome extends Component {
    render() {
        const {prenom, age} = this.props;
        return (
                <h1>Welcome {prenom} vous avez {age} ans !</h1>
        );
    }
}

export default Welcome;
