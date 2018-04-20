import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import api from '../../../../api';
import { Link } from 'react-router-dom';
import BookInfo from '../../../../components/book-info';
import BookReview from '../../../../components/book-review';
import Button from '../../../../components/button'


export default class ViewBook extends Component {

    static contextTypes = {
        router: PropTypes.object,
      }
        
    state = {review: '', 
            rating:1, 
            bookdata: null, 
            readdata:[], 
            reviewWindowOpen: false, 
            loadingB: true, 
            loadingR: true, 
            error: false,
            update:false,
            };

    async componentDidMount() {
        const { id } = this.props.match.params;
        await this.getBook(id);
        await this.getReviews(id);
    }

    async getBook(id) {
        try {
            const bookdata = await api.get('books/'+id);
            this.setState({ bookdata,loadingB: false });
            } catch (e) {
            console.error('Error fetching book', e);
            this.setState({ error: true, loadingB: false });
            }
    }

    async getReviews(id) {
        try {
            const readdata = await api.get('users/me/read');
            this.setState({ readdata, loadingR: false });
            } catch (e) {
            console.error('Error fetching reviews', e);
            this.setState({ error: true, loadingR: false });
            }
    }

    openReviewWindow = (e) => {
        e.preventDefault();
        this.setState({ reviewWindowOpen: true});
    }
    closeReviewWindow = (e) => {
        e.preventDefault();
        this.setState({ reviewWindowOpen: false});
    }

    handleInputChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        if (name) {
          this.setState({ [name]: value });
        }
      }
      
    createReview = (e) => {
        e.preventDefault();
        const {rating, review}=this.state;
        const {id} = this.props.match.params;

        const url = 'users/me/read';
        const data = {
            'bookId': parseInt(id),
            'rating': parseInt(rating),
            'review': review
        }
        const update = api.post(url, data);
        this.setState({reviewWindowOpen: false, review:'', rating:''});
        this.getReviews(id);
    }
      


    render() {
        const { id } = this.props.match.params;
        const {bookdata, readdata, reviewWindowOpen, rating, review, loadingB, loadingR} = this.state;

        if(loadingB || loadingR) {
            return (
                <div> loading </div>
            )
        }

        const ratingRange = [1,2,3,4,5];

        return (
            <div className="viewBook" >
                <BookInfo data={bookdata}/>
                <Link to = {`/books/${id}/edit`}>Breyta bók</Link> 
                {(readdata) ? <BookReview data={readdata} id={id}/> : null }
                {(!reviewWindowOpen) 
                ? <Button  onClick={this.openReviewWindow}> Skrá lestur </Button>
                : <div className="setReviewWrapper">
                    <form onSubmit={this.createReview}>
                        <label htmlFor = "review">Umsögn:</label>
                        <textarea name = "review" value={review} onChange={this.handleInputChange} rows = "10" />
                        <label htmlFor = "rating">Einkunn:</label>
                        <select name="rating" required onChange={this.handleInputChange}>
                            {ratingRange.map((number, i) => <option key={i} value={number}> {number}</option> )}
                        </select>
                    <Button type="submit" > Vista </Button>
                    </form> 
                    <Button className="cancel" onClick={this.closeReviewWindow}> Hætta við </Button>
                </div>
                }
                
                <Button  onClick={this.context.router.history.goBack}> Til baka </Button>
            </div>
        );
    }
}