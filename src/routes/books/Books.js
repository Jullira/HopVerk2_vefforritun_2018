import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Books.css'
import api from '../../api';

export default class Books extends Component {

    state = { data: null, loading: true, error: false}

    async componentDidMount() {
        try {
        const data = await api.get('books');
        this.setState({ data, loading: false });
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
                    const data = this.state.data;
            console.log(data);
            const list = data.items.map((item) => {
               return <li> {item.title} </li>;
            });
            
            return (
                <div>
                <ul>
                    {list}
                </ul>
            </div>
        );
    
    }
}