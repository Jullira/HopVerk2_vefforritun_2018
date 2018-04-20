import React, { Component } from 'react';
import { connect } from 'react-redux';

import './User.css';
import ListPane from '../list-pane';
import Button from '../button';
import api from '../../api';

export default class User extends Component {
    state = { data: null, loading: true, error: false, offset: 0, type:"UserRedBooks"}
    
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
            const { id } = this.props.match.params;
            const userUrl = 'users/'+id;
            const readBooks = userUrl+'/read?offset=' + this.state.offset + '&limit=10';          
            const user = await api.get(userUrl);
            const data = await api.get(readBooks);
            this.setState({ user, data, loading: false });
            } catch (e) {
            console.error('Error fetching data', e);
            this.setState({ error: true, loading: false });
            }
    }

    render() {
      const {loading, data, user, type} = this.state;
      console.log(type);

      if(loading) {
          return (
              <div> loading </div>
          )
      }

      let prev, next;
        if (data.offset > 0 ) {
            prev = <Button onClick={this.onClickPrevious}> {`< Fyrri síða`} </Button>;
        }
        /// Skoða - next takki ef nkl 10 á síðustu bls - bug
        if (data.limit === data.items.length) {
            next = <Button onClick={this.onClickNext}> {`Næsta síða >`} </Button>;
        }

      return (
        <div className="user_container">
          <div className="user_photo_name">
            <h3>{user.name}</h3>
            <p> **mynd** </p>
          </div>
          <h2> Lesnar bækur</h2>
          <ListPane items={data.items} type={type} />
          <div className="listfooter">
            {prev}
            <p> Síða {1 + data.offset/data.limit} </p>
            {next}
          </div> 
        </div>
      )
  }
}