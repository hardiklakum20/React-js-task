import React from 'react';
import { useReducer, useEffect, useRef } from 'react';


const initialState = {
    isRunning: false,
    time:0,
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
        return { ...state, time: state.time+1};
      default:
        throw new Error();
    }
  }
  

function Stop_watch(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
  const idRef = useRef(0);
  useEffect(() => {
    if (!state.isRunning) { 
      return; 
    }
    
    {idRef.current = setInterval(() => dispatch({type:'tick'}), 100);}
   
    return () => {
      clearInterval(idRef.current);
      idRef.current = 0;
    };
  }, [state.isRunning]);
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>{("0"+ Math.floor((state.time / 60000) % 60)).slice(-2)}:{("0"+ Math.floor((state.time / 100) % 60)).slice()}:{("0" + ((state.time / 60) % 100)).slice(-2)}s</h1>
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