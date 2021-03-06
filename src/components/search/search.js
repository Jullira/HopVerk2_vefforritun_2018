import React, { Component } from 'react';

import './Search.css';
import Button from '../button';
import { Redirect } from 'react-router-dom'


export default class Search extends Component {
    state = { inputValue: '', redirect: false}
    
    onClick = (e) => {
        this.setState({redirect:true});
    }
    enterPressed = (e) => {
        if (e.key === 'Enter') {
            this.setState({redirect:true});
          }
    }
    
    renderRedirect = () => {
        if (this.state.redirect) {
            this.setState({redirect:false});
            if(this.state.inputValue!==''){
                return <Redirect  to={`/books?query=${this.state.inputValue}`}/>
            }else{
                return <Redirect  to={`/books`}/>
            }
        }
    }

    updateInputValue = (e) => {
        this.setState({inputValue: e.target.value});
    }

    render() {
        return (
            <div className = "search">
            {this.renderRedirect()}
                <input  className="searchBox"
                 value={this.state.inputValue}
                 onChange={this.updateInputValue}
                 onKeyPress={this.enterPressed}
                 placeholder = "Leita að bók"/>
                <Button onClick={this.onClick}> Leita </Button>
            </div>
        );
    }
}