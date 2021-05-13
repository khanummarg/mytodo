import React, { Component } from 'react';

class Description extends Component {

    render(){
        const {value} = this.props;
        return (
            <p>{value}</p>
        )
    }
}

export default Description;