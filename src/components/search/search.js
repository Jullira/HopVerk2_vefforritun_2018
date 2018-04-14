import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Search.css';
import api from '../../api';
import ListPane from '../list-pane';
import Heading from '../heading';
import Button from '../button';
import BookList from '../../routes/books/routes/book-list';
import { Redirect } from 'react-router-dom'


export default class Search extends Component {
    state = { inputValue: '', redirect: false}
    
    onClick = (e) => {
        this.setState({redirect:true});
    }
    
    renderRedirect = () => {
        if (this.state.redirect) {
            this.setState({redirect:false});
            return <Redirect  to={`/books?query=${this.state.inputValue}`}/>
        }
    }

    updateInputValue = (e) => {
        this.setState({inputValue: e.target.value});
    }

    render() {
        return (
            <div className = "search">
            {this.renderRedirect()}
                <input  className="searchBox" value={this.state.inputValue} onChange={this.updateInputValue}/>
                <Button onClick={this.onClick}> Leita </Button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    }
}