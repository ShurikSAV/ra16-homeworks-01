import React, { Component } from 'react';

import ShopItemClass from '../../components/ShopItemClass';
import './css/main.css'

class ShopClass extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {item} = this.props;

        return (
            <div className="container">
            <div className="background-element">
            </div>
            <div className="highlight-window">
                <div className='highlight-overlay'></div>
            </div>
            <div className="window">
                <ShopItemClass item={item} />
            </div>
            </div>
        )
    }
}

export default ShopClass;