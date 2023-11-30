import React, { Component } from 'react'

class InscriptionForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nom: 'Y',
            prenom: 'X',
            email: 'x@y.z',
        }
    }
    handleNomChange = event => {
        console.log(event.target.value);
        this.setState({ nom: event.target.value });
    }
    handlePrenomChange = event => {
        console.log(event.target.value);
        this.setState({ prenom: event.target.value });
    }
    handleEmailChange = event => {
        console.log(event.target.value);
        this.setState({ email: event.target.value });
    }
    handleSubmit = event => {
        event.preventDefault();
        alert(`Merci ${this.state.nom}, ${this.state.prenom} d'avoir pris contact. Nous avons votre email : ${this.state.email}`);
    }
    render() {
        const { nom, prenom, email } = this.state;
        let howRed = 255 * (3-this.state.nom.length) /3
        let howGreen = 255 * (this.state.nom.length-3) /3;
        let color = 'rgb('+howRed+','+howGreen+',0)'
        let style
        const styleKo = { border : '30px solid rgb(255,0,0)' };
        const styleOk = { border : '30px solid rgb(0,255,0)' };
        if (this.state.nom.length > 3) {
            style = styleOk;
        } else {
            style = styleKo;
        }
        style = { border : '30px solid '+color};
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label> nom </label>
                    <input type="text" value={nom} onChange={this.handleNomChange} id="nomfamille" style={style}/>
                    <label> prenom </label>
                    <input type="text" value={prenom} onChange={this.handlePrenomChange} />
                    <label> email </label>
                    <input type="email" value={email} onChange={this.handleEmailChange} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default InscriptionForm