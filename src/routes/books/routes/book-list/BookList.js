import React, { Component } from 'react';
import { connect } from 'react-redux';

import './BookList.css';
import Button from '../../../../components/button';
import ListPane from '../../../../components/list-pane';
import Heading from '../../../../components/heading';
import api from '../../../../api';

export default class BookList extends Component {

    state = { data: null, loading: true, error: false, offset: 0, search:null, type:"Books"}
    
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

    async newSearch(){
        await this.setState({offset:0, search:this.props.location.search});
        this.getData();
    }

    async componentDidMount() {
        this.getData();
    }

    async getData() {
        try {
            const query = this.props.location.search;
            let url;
            if (query && query !== '') {
                this.setState({search:query, type:"Search"});
                url = 'books?search=' + query.split("=")[1] + '&offset='+this.state.offset + '&limit=10';
            } else {
                this.setState({type:"Books"});
                url = 'books?offset=' + this.state.offset + '&limit=10';
            }
 
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

        if(this.state.search !== this.props.location.search){
            this.newSearch();
        }

        const data = this.state.data;

        let prev, next;
        if (data.offset > 0 ) {
            prev = <Button onClick={this.onClickPrevious}> {`< Fyrri síða`} </Button>;
        }
        /// Skoða - next takki ef nkl 10 á síðustu bls - bug
        if (data.limit === data.items.length) {
            next = <Button onClick={this.onClickNext}> {`Næsta síða >`} </Button>;
        }

        return (
            <div>
                <Heading type={this.state.type} search={this.state.search} />
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