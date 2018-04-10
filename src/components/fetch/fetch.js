import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router-dom';

require('dotenv').config()

const { REACT_APP_SERVICE_URL } = process.env;


//Spurning hvort við viljum nota svona fetch component sem sækir gögn eða api.js sem Óla hafði með
export default class Fetch extends Component {
    static propTypes = {
        url: PropTypes.string.isRequired,
        render: PropTypes.func.isRequired,
    }

    state = { data: null, loading: true, error: false, status: null, }

    async componentDidMount() {
        try {
            const response = await this.fetchData();
            const data = await response.json();
            this.setState({
                data,
                loading: false,
                status: response.status
            });
        } catch (e) {
            console.error('Error fetching data', e);
            this.setState({ error: true, loading: false });
        }
    }

    async fetchData() {
        const { url } = this.props;
        const response = await fetch(`${REACT_APP_SERVICE_URL}${url}`);
        return response;
    }

    render() {

        if (this.state.status === 404) return <Redirect to='/error/404' />;

        return this.props.render(this.state);
    }
}