import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import api from '../../../../api';
import { Link } from 'react-router-dom';
import BookInfo from '../../../../components/book-info';
import BookReview from '../../../../components/book-review';
import Button from '../../../../components/button'
import AlterBookInfo from '../../../../components/alter-book-info';


export default class AlterBook extends Component {

    static contextTypes = {
        router: PropTypes.object,
      }
        
    state = { categories: null, bookdata: null, readdata:null, loading: true, error: false};

    async componentDidMount() {
        this.getData();
    }

    async getData() {
        try {
            const { id } = this.props.match.params;
            const bookdata = await api.get('books/'+id);
            const categories = await api.get('categories?limit=100');
            this.setState({ categories, bookdata, loading: false });
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

        const { id } = this.props.match.params;
        const {categories, bookdata} = this.state;

        return (
            <div className="viewBook" >
                <AlterBookInfo data={bookdata} categories = {categories} id = {id}/>
                <Button  onClick={this.context.router.history.goBack}> Til baka </Button>
            </div>
        );
    }
}