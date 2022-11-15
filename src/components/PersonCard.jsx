import React , {Component} from "react";

export default class PersonCard extends Component {
    render() {
        console.log(this.props)
        const {firstName,lastName, age, hairColor } = this.props

        return(
            <fieldset>
                <legend>PersonCard.jsx</legend>
                <h1>Full Name: {firstName}</h1>
                <h1>Last Name: {lastName}</h1>
                <h1>Age: {age}</h1>
                <h1>Hair Color: {hairColor}</h1>
            </fieldset>
        )
    }    
}