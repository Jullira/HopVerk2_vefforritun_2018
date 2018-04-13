import React, { Component } from 'react';
import { connect } from 'react-redux';

import './ListPane.css';
import ListitemBook from '../listItemBook/ListItemBook';

export default class ListPane extends Component {

    render() {
        const {items, type} = this.props;

        const list = items.map((item) => {
            let listitem;
            switch (type) {
                case 'BookList': 
                    listitem = <ListitemBook id={item.id} title={item.title} author={item.author}/>
                    break;
                // Bæta við fleirri lista típum 
            }
            return listitem;
        });

        return(
            <div className = "list">
                <ul className = {type}>
                    {list}
                </ul>
            </div>
        )
    }
}