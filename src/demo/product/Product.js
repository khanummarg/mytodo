import React, { Component } from 'react';
import Name from './Name';
import Price from './Price';
import Description from './Description'

class Product extends Component {

    render() {
        const {name, description, price} = this.props;
        return (
            <div>
                <Name value={name} />
                <Description value={description} />
                <Price value={price} />
            </div>
        )
    }
}


export default Product;