import React, { Component } from 'react';
import { Letter } from './Letter';
import './Letter.css';

export class Letters extends Component{

    render(){
        return(<div>
            <div>Available Letters</div>
            
            {Object.keys(this.props.letterStatus).map((k, v) => this.props.letterStatus[k] ? 
            <Letter letter={k} key={v} className="not-chosen" /> :
            <Letter letter={k} key={v} className="chosen" />
        )}

        </div>)
    }
}
