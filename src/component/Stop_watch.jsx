import React from 'react';
import { useReducer, useEffect, useRef } from 'react';


const initialState = {
    isRunning: false,
    sec: 0,
    min:0,
    hour:0
  };

 
function reducer(state, action) {
    switch (action.type) {
      case 'start':
        return { ...state, isRunning: true };
      case 'stop':
        return { ...state, isRunning: false };
      case 'reset':
        return initialState
      case 'tick':
        return { ...state, sec: state.sec+1};
      case 'tick2':
        return{...state,min:state.min};
      case 'tick3':
        return{...state,hour:state.hour}
      default:
        throw new Error();
    }
  }
  

function Stop_watch(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
  const idRef = useRef(0);
  // const Start =()=>{
  //   run();
  //   setInterval(run,100)
  // }
  // const run =()=>{
  //   if(state.sec===60){
  //     state.min++;
  //     state.sec=0;
  //   }
  //   if(state.min===60){
  //     state.hour++;
  //     state.min = 0;
  //   }
  // }
  useEffect(() => {
    if (!state.isRunning) { 
      return; 
    }
    
    {idRef.current = setInterval(() => dispatch({type:'tick'}), 100);}
   
    return () => {
      clearInterval(idRef.current);
      idRef.current = 0;
    };
    // let internal = null;
    // if(!state.isRunning){
    //   internal = setInterval(()=>{
    //     if(state.min>59){
    //         (state.hour+1);
    //         (state.min = 0);
    //     }
    //     if(state.sec>59){
    //       state.min+1;
    //       (state.sec = 0)
    //   }
    //   },100)
    // }
  }, [state.isRunning]);
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>0{state.hour}:0{state.min}:{state.sec}s</h1>
                    <br />
                    <button className='btn btn-primary' onClick={()=>dispatch({type:'start'})}>
                        Start
                    </button>
                    <button className='btn btn-info ms-2' onClick={() => dispatch({ type: 'stop' })}>
                        Stop
                    </button>
                    <button className='btn btn-dark ms-2' onClick={() => dispatch({ type: 'reset' })}>
                        Reset
                    </button>
                </div>
            </div>
        </div>

           
        </>
    );
}

export default Stop_watch;