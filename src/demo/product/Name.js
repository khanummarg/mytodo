import React, { Component } from 'react';

class Name extends Component {

    render(){
        const {value} = this.props;
        return (
            <p>{value}</p>
        )
    }
}

export default Name;