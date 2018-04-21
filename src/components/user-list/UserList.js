import React, { Component } from 'react';
import { connect } from 'react-redux';

import './UserList.css';
import Button from '../button';
import ListPane from '../list-pane';
import Heading from '../heading';
import api from '../../api';

class UserList extends Component {

    state = { data: null, loading: true, error: false, offset: 0, type:"User", isAuthenticated:false}
    
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
            const url = 'users?offset=' + this.state.offset + '&limit=10';
            const data = await api.get(url);
            this.setState({ data, loading: false });
            } catch (e) {
            console.error('Error fetching data', e);
            this.setState({ error: true, loading: false });
            }
    }

    render() {
        const { data } = this.state;

        /*if(!isAuthenticated){
            return (
                <Redirect  to={`/login`}/>
            );
        }*/
        if(this.state.loading) {
            return (
                <div> loading </div>
            )
        }

       
        let prev, next;
        if (data.offset && data.offset > 0 ) {
            prev = <Button onClick={this.onClickPrevious}> {`< Fyrri síða`} </Button>;
        }
        /// Skoða - next takki ef nkl 10 á síðustu bls - bug
        if (data.limit === data.items.length) {
            next = <Button onClick={this.onClickNext}> {`Næsta síða >`} </Button>;
        }

        return (
            <div>
                <Heading type/>
                <ListPane items={data.items} type="UserList"/>
                <div className="listfooter">
                    {prev}
                    <p> Síða {1 + data.offset/data.limit} </p>
                    {next}
                </div> 
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
      isAuthenticated: state.auth.isAuthenticated,
    }
  }
    
  export default connect(mapStateToProps)(UserList);
  