import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import api from '../../../../api';
import { Link } from 'react-router-dom';
import BookInfo from '../../../../components/book-info';
import Button from '../../../../components/button'
import NewBookInfo from '../../../../components/newbookinfo';


export default class NewBook extends Component {

    static contextTypes = {
        router: PropTypes.object,
      }
        
    state = { categories: null, loading: true, error: false};


    async componentDidMount() {
        this.getData();
    }

    async getData() {
        try {
            const categories = await api.get('categories?limit=100');
            this.setState({ categories, loading: false });
            } catch (e) {
            console.error('Error fetching data', e);
            this.setState({ error: true, loading: false });
            }
    }

    render() {
        if(this.state.loading) {
            return (
                <div> loading </div>
            )
        }

        const { id } = this.props + 1000;
        const {categories} = this.state;

        return (
            <div className="viewBook" >
                <NewBookInfo categories = {categories} id = {id}/>
                <Button  onClick={this.context.router.history.goBack}> Til baka </Button>
            </div>
        );
    }
}