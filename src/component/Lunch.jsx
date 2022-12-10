import React, { Component } from 'react';

class Lunch extends Component {
    constructor(props){
        super(props);
        this.state={
            lunch  : "Lunch Menu"
        }
    }
    changedata=()=>{
        this.setState({lunch :"Gujarati fix Dish,Punjabi fix Dish,South Indian,All Type of Punjabi,All Type of Gujarati"})
    }
    render() {
        return (
            <>
            <div className="container">
                <div className="row">
                    <div className="col-3 mt-5">
                       <img src="img/lunch.jpeg" alt="" className='img-fluid h-75 w-100' /> <br />
                       <ol>
                        <li>
                            <center>{this.state.lunch}</center> <br />
                            <center><button onClick={this.changedata} className="btn btn-primary fw-bold">Saw Menu</button></center>
                        </li>
                       </ol>
                    </div>
                </div>
            </div>
            
            </>

        );
    }
}

export default Lunch;