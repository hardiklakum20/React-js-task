import React, { useState } from 'react';

function Function_task() {
    const[count,setcount] = useState(0)

    function Click(){
        setcount(count +1)
    }
    return (
       <>
       <div className="container">
        <div className="row">
            <div className="col">
                <h1>This Function Click {count} Times</h1>
                <button onClick={Click}>Click me</button>
            </div>
        </div>
       </div>
       
       </>
    );
}

export default Function_task;