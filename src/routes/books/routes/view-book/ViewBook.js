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
            readdata:null, 
            reviewWindowOpen: false, 
            loadingB: true, 
            loadingR: true, 
            error: false};

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
      
    handleSubmit = (e) => {
        e.preventDefault();
// post nýja einkunn   ath bokkId í gagnagr.


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
                {(!!readdata) ? <BookReview data={readdata} id={id}/> : null }
                {(!reviewWindowOpen) 
                ? <Button  onClick={this.openReviewWindow}> Skrá lestur </Button>
                : <div className="setReviewWrapper">
                    <form onSubmit={this.createReview}>
                        <label for = "review">Umsögn:</label>
                        <textarea name = "review" value={review} onChange={this.handleInputChange} rows = "10" />
                        <label for = "rating">Einkunn:</label>
                        <select name="rating" required onChange={this.handleInputChange}>
                            {ratingRange.map((number) => <option value={number}> {number}</option> )}
                        </select>
                    <Button type="submit" > Vista </Button>
                    <Button className="cancel" onClick={this.closeReviewWindow}> Hætta við </Button>
                    </form> 
                </div>
                }
                
                <Button  onClick={this.context.router.history.goBack}> Til baka </Button>
            </div>
        );
    }
}