import React, { Component } from 'react';

export class Letter extends Component{

    render(){
        return (
            <span>{this.props.letter}</span>
        )
    }
}