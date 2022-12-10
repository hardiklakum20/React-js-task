import React, { useState } from 'react';
import './smart_watch.css'

function Smart_watch(props) {
    let time = new Date().toLocaleTimeString();

    const[ctime,setctime] = useState(time);

    const updatetime=()=>{
        time = new Date().toLocaleTimeString();
        setctime(time);
    }
    setInterval(updatetime,1000)

    return (
       <>
            <div className="container">
                <div className="row clock">
                    <div className="col">
                        <h1>{ctime}</h1>
                    </div>
                </div>
            </div>
       </>
    );
}

export default Smart_watch;