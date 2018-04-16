import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './home.css';


class Home extends Component {

  render() {
    
    /* todo birta mismunandi upplýsingar ef innskráður notandi eða ekki */

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
export default Home;
