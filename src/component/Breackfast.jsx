import React, { Component } from 'react';

class Breackfast extends Component {
    constructor(props){
        super(props);
        this.state={
            breakfast : "Breackfast Items"
        }
    }
    changedata=()=>{
        this.setState({breakfast:"Tea,Coffee,Idali,Dosa,Pauha,Upma,Gathiya,Fafda,Bhajiya"});
        console.log("Data Received");
    }
    render() {
        return (
            <>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                         <img src="img/break fast.jpg" alt="" className="img-fuid mt-5 h-75 w-100" /> <br />
                         <center>
                            <ol>
                               <li>
                                   {this.state.breakfast}
                                </li>    
                            </ol>
                         </center>
                         <center><button onClick={this.changedata} className="btn btn-primary fw-bold">Saw Items</button></center>

                    </div>
                </div>
            </div>
           
            
            
            </>
        );
    }
}

export default Breackfast;