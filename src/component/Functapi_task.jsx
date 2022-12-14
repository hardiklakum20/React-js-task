import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useContext } from 'react';

const themes={
    light:{
        fg:'red',
        bg:'yellow'
    },
    dark:{
        fg:'red',
        bg:'blue'
    }
}

const Mcontex = React.createContext(themes.dark)

function Functapi(props) {
    const mytheme = useContext(Mcontex)

    const[data,setdata]=useState({});
    const[loader,setloader]=useState("Pending...");

    useLayoutEffect(()=>{
        setTimeout(() => {
            setloader("Data Found")
        }, 3000);
    })

    useEffect(()=>{
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/todos').then(res=>res.json()).then(Response=>{
                console.log(Response);
                setdata(Response)
            }).catch((Error=>{
                console.log(Error);
            }))
        }, 2000);
    })

    const returndata = Object.entries(data).map(function(item,i){
        return(
            <tr key={i}>
                <td>{item[1].userId}</td>
                <td>{item[1].id}</td>
                <td>{item[1].title}</td>
            </tr>
        )
    })

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        {loader}
                        {/* {Object.entries(data).map(function(item,i){
                            return <li key={i}>{item[1].title}</li>
                        })} */}
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Userid</th>
                                    <th>Id</th>
                                    <th>Title</th>
                                </tr>
                            </thead>
                            <tbody>{returndata}</tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default  Functapi;