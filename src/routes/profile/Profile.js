import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Button from '../../components/button';
import ListPane from '../../components/list-pane';
import api from '../../api';

import './Profile.css';

export default class Profile extends Component {
  state = { data: null,
    loading: true,
    error: false, 
    offset: 0, 
    type:"MyUserRedBooks",
    name:'',
    image:'',
    password1:'',
    password2:'',
    samePW: true,
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name) {
      this.setState({ [name]: value });
    }
  }

  handleImageUpdate = (e) => {
    e.preventDefault();
    const change =  api.patch('users/me', {image:this.state.image});   
  }

  handleNameUpdate = (e) => {
    e.preventDefault();
    const change =  api.patch('users/me', {name:this.state.name});   

  }

  handlePasswordUpdate = (e) => {
    e.preventDefault();
    const {password1, password2} = this.state;
    if (password1===password2){
      this.setState({samePW:true});
      const change =  api.patch('users/me', {password:this.state.password1});   
    }else {
      this.setState({samePW:false});
    }
  }
    
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
          const userUrl = 'users/me';
          const readBooks = userUrl+'/read?offset=' + this.state.offset + '&limit=10';          
          // const user = await api.get(userUrl);
          // const {name, image, password} = user; 
          const data = await api.get(readBooks);
          this.setState({ data, loading: false });
          } catch (e) {
          console.error('Error fetching data', e);
          this.setState({ error: true, loading: false });
          }
  }

  render() {
    const {loading, data, name, image, password1, password2, samePW, type} = this.state;

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
      <div className="myuser_container">
        <h2>Upplýsingar</h2>
        <div className="myUserInfo">
          <form className="setImage" onSubmit={this.handleImageUpdate}>
            <input type="file" name="image" value={image} required onChange={this.handleInputChange}/> 
            <Button type="submit">Uppfæra mynd</Button>
          </form>
          <form className="setName" onSubmit={this.handleNameUpdate}>
            <input type="text" name="name" value={name} required onChange={this.handleInputChange}/> 
            <Button type="submit">Uppfæra nafn</Button>
          </form>
          <form className="setPassword" onSubmit={this.handlePasswordUpdate}>
            <input type="text" name="password1" value={password1} required onChange={this.handleInputChange}/> 
            <input type="text" name="password2" value={password2} required onChange={this.handleInputChange}/> 
            {(!samePW) ? <p> Lykilorðin eru ekki eins </p>: null} 
            <Button type="submit">Uppfæra lykilorð</Button>
          </form>
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

