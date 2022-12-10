import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Increament_and_decrement extends Component {
    constructor(props) {
        super(props);
        this.state={counter:0}
    }

    // componentWillMount() {

    // }

    componentDidMount() {
        console.log("componentDidMount called");
    }

    // componentWillReceiveProps(nextProps) {

    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate Called");
        console.log("nextProps Called");
        console.log("nextState Called",nextState);
        return true;
    }

    // componentWillUpdate(nextProps, nextState) {

    // }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate Called");
        console.log("prevProps Called");
        console.log("prevState",prevState);
    }

    componentWillUnmount() {
        console.log("componentWillUnmount Called");
    }
    BtnCliclk=()=>{
        console.log("BtnCliclk called");
        this.setState({
            counter:this.state.counter+1
        })
    }
    BtnDec=()=>{
        console.log("BtnDec called");
        this.setState({
            counter:this.state.counter-1
        })
    }
    BtnRes=()=>{
        console.log("BtnRes called");
        this.setState({
            counter:this.state.counter=0
        })
    }
    render() {
        console.log("render Called");
        return (
           <>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col">
                            <h1 className='ms-5'>{this.state.counter}</h1>
                            <div className="btn btn-primary" onClick={this.BtnCliclk}>Increament</div>
                            <div className="btn btn-primary ms-5" onClick={this.BtnDec}>Decrement</div>
                            <br />
                            <div className="btn btn-primary mt-3 ms-5 me-5" onClick={this.BtnRes}>Reset</div>

                        </div>
                    </div>
                </div>
           </>
        );
    }
}


export default Increament_and_decrement;