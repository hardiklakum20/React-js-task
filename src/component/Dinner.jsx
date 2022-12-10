import React, { Component } from 'react';

class Dinner extends Component {
    constructor(props){
        super(props);
        this.state={
            dinner : "Saw Menu"
        }
    }
    changedata=()=>{
        this.setState({dinner : "Gujarati thali,Punjabi thali,South Indain,Pav Bhaji,Manchuryan,Pizza,Burger,Colddrinks"})
    }
    render() {
        return (
           <>
               <div className="container">
                <div className="row">
                    <div className="col-3">
                        <img src="img/dinner.jpeg" alt="" className="img-fluid mt-5 w-100 h-50"/>
                        <ol>
                            <li>
                                <center>{this.state.dinner}</center> <br />
                            </li>
                        </ol>
                        <center><button onClick={this.changedata} className="btn btn-primary fw-bold data">Saw Menu</button></center>
                    </div>
                </div>
               </div>
           </>
        );
    }
}

export default Dinner;