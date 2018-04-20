import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Home.css';


class Home extends Component {
  state = { isAuthenticated: null };

  render() {
    const { isAuthenticated } = this.props; 
  
    console.log(isAuthenticated);
    /* todo birta mismunandi upplýsingar ef innskráður notandi eða ekki */

    if (isAuthenticated) {
      return (
        <div className="Home">
          <h2>Velkomin á bókasafnið</h2>
          <p>Þú ert skráður notandi og getur því <Link to="/books/new">skráð bækur</Link> og breytt <Link to="/books">þeim sem til eru.</Link></p>
          <p>Einnig getur þú skoðað <Link to="/users">aðra notendur.</Link></p>
        </div>
      );
    }

    return (
      <div className="Home">
        <h2>Velkomin á bókasafnið</h2>
        <p>Til að njóta bókasafnsins til fulls mælum við með að <Link to="/login">Skrá sig inn</Link>.
        Þangað til getur þú skoðað <Link to="/books">lista af bókum</Link></p>
      </div>
    );
  }
}

/* todo setja upp tengingu við redux til að vita stöðu notanda */
const mapStateToProps = (state) => {
  console.log("state.auth.isAuthenticated---", state.auth.isAuthenticated);
  return{
    isAuthenticated: state.auth.isAuthenticated,
  }
}

export default connect(mapStateToProps)(Home);