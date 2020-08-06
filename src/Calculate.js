import React, {Component } from 'react';

export default class calculate extends Component {
    buttonPressed = event => {
        this.props.buttonPressed(event.target.name);
    };
    render() {
        return (
            <div className="buttons">
                <button name='1' onClick={this.buttonPressed}>1</button>
                <button name='2' onClick={this.buttonPressed}>2</button>
                <button name='3' onClick={this.buttonPressed}>3</button>
                <button name='4' onClick={this.buttonPressed}>4</button>
                <button name='5' onClick={this.buttonPressed}>5</button>
                <button name='6' onClick={this.buttonPressed}>6</button>
                <button name='7' onClick={this.buttonPressed}>7</button>
                <button name='8' onClick={this.buttonPressed}>8</button>
                <button name='9' onClick={this.buttonPressed}>9</button>
                <button name='+' onClick={this.buttonPressed}>+</button>
                <button name='-' onClick={this.buttonPressed}>-</button>
                <button name='=' onClick={this.buttonPressed}>=</button>
                <button name='0' onClick={this.buttonPressed}>0</button>
                <button name='*' onClick={this.buttonPressed}>*</button>
                <button name='/' onClick={this.buttonPressed}>/</button>
                <button name='C' onClick={this.buttonPressed}>Clear</button>
            </div>
        );
    }
}

// export default calculate;