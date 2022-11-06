import React, { Component } from 'react';
import { Letter } from './Letter';

export class Solution extends Component{

    
    render(){
        return(<div>
            {this.props.solution.word.split("").map(l => 
                this.props.letterStatus[l] ?
                <Letter letter={l} /> :
                <Letter letter="_" />
            )}
            
            <div>
                <em>{this.props.solution.hint}</em>
            </div>
        </div>)
    }
}