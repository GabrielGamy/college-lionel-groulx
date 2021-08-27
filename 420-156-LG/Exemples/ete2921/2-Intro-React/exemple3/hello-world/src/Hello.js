import React, { Component } from "react";

export default class Hello extends Component {
    render() {
        return <h1>Bonjour, {this.props.name}</h1>
    }
}