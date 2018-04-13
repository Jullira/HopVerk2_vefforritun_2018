import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Books.css';
import api from '../../api';
import ListPane from '../../components/list-pane';
import Heading from '../../components/heading';
import Button from '../../components/button';

export default class Books extends Component {
    state = { data: null, loading: true, error: false, offset: 0}
    
    onClickPrevious = async (e) => {
        const newOffset = this.state.offset-10;
        await this.setState({ offset: newOffset});
        await this.getData();        
    }
    onClickNext = async (e) => {
        const newOffset = this.state.offset+10;
        await this.setState({ offset: newOffset});
        await this.getData();
    }

    async componentDidMount() {
        this.getData();
    }

    async getData() {
        try {
            const url = 'books?offset=' + this.state.offset + '&limit=10'
            const data = await api.get(url);
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
        
        let prev, next;
        if (data.offset > 0 ) {
            prev = <Button onClick={this.onClickPrevious}> {`< Fyrri síða`} </Button>;
        }
        if (data.limit === data.items.length) {
            next = <Button onClick={this.onClickNext}> {`Næsta síða >`} </Button>;
        }

        return (
            <div>
                <Heading type="BookList" />
                <ListPane items={data.items} type="BookList"/>
                <div className="listfooter">
                    {prev}
                    <p> Síða {1 + data.offset/data.limit} </p>
                    {next}
                </div> 
            </div>
        );
    }
}