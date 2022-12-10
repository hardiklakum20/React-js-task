import React, { Component } from 'react';
import Quantity from './Quantity'

class Quantity_compo extends Component {
    render() {
        return (
            <>
                <div className="container text-center">
                    <h1>Mobile Shopping</h1>
                </div>
                <div className="container">
                    <Quantity imgsrc="img/mi.jpg" price="125$" total="$"></Quantity>
                    <Quantity imgsrc="img/mi.jpg" price="75$" total="$"></Quantity>
                </div>
            </>
        );
    }
}

export default Quantity_compo;