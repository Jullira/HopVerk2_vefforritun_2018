import React, { Component } from 'react';

import './ListPane.css';
import ListItemBook from '../listItemBook';
import ListItemUser from '../listItemUser';
import ListItemUserReadBooks from '../listItemUserReadBooks';
import ListItemMyUserRedBooks from '../listItemMyUserReadBooks';

export default class ListPane extends Component {

    render() {
        const {items, type} = this.props;

        let list = <p> Ekkert fannst </p>;
        if (items.length > 0) {
            list = items.map((item) => {
                let listitem;
                switch (type) {
                    case 'BookList': 
                        listitem = <ListItemBook id={item.id} title={item.title} author={item.author}/>
                        break;
                    case 'UserList':
                        listitem = <ListItemUser id={item.id} username={item.username}/>
                        break;
                    case 'UserRedBooks':
                        listitem = <ListItemUserReadBooks id={item.id} book_id={item.book_id} title={item.title} rating={item.rating} review={item.review}/>
                        break; 
                    case 'MyUserRedBooks':
                        listitem = <ListItemMyUserRedBooks id={item.id} book_id={item.book_id} title={item.title} rating={item.rating} review={item.review}/>
                        break;
                        // Bæta við fleirri lista típum  ???
                    default: 
                        listitem = "" 
                }
                return listitem;
            });
        }

        return(
            <div className = "list">
                <ul className = {type}>
                    {list}
                </ul>
            </div>
        )
    }
}