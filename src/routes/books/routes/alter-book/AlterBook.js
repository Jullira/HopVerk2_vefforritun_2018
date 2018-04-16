import React, { Component } from 'react';
import { connect } from 'react-redux';


// Tekur inn object sem er bók - ef tómt þá 
// verða allar breyturnar empty string
// þannig formið verið tómt
// þarf líka að senda aftur í þjónustuna
// athuga hvort id sé tómt eða ekki 
// og senda aftur í vefþjónustuna annað hvort 
export default class AlterBook extends Component {

    render() {
        return (
            <div>
            AlterBook
            </div>
        );
    }
}