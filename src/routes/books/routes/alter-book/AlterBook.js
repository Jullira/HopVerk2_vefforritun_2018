import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './AlterBook.css';
import Heading from '../../../../components/heading';
import api from '../../../../api';


// Tekur inn object sem er bók - ef tómt þá 
// verða allar breyturnar empty string
// þannig formið verið tómt
// þarf líka að senda aftur í þjónustuna
// athuga hvort id sé tómt eða ekki 
// og senda aftur í vefþjónustuna annað hvort 


export default class Alterbook extends Component {

    static contextTypes = {
        router: PropTypes.object,
    }

    state = { bookdata: null, readdata: null, loading: true, error: false };

    async componentDidMount() {
        this.getData();
    }

    async getData() {
        try {
            const { id } = this.props.match.params;
            const bookdata = await api.get('books/' + id);
            // const readdata = 
            this.setState({ bookdata, loading: false });
        } catch (e) {
            console.error('Error fetching data', e);
            this.setState({ error: true, loading: false });
        }
    }

    render() {
        if (this.state.loading) {
            return (
                <div> loading </div>
            )
        }

        const { id } = this.props.match.params;
        const { bookdata } = this.state;
        const { title, author, isbn13, categorytitle, description, pagecount, language } = this.props.data;

        return (
            <div className="bookinfo">
                <Heading>Breytabók</Heading>
                <input type="textbox">{title}</input>
                <input type="textbox">{author}</input>
                <input type="textarea">{description}</input>
                <p> {categorytitle} </p>
                <p> {description} </p>

            </div>
        );
    }
}