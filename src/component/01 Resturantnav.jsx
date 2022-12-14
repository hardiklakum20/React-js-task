import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
  } from "react-router-dom";
  import Breackfast from './Breackfast';
  import Lunch from './Lunch';
  import Dinner from './Dinner';
  import Increament_and_decreament from './Increament_and_decrement';
  import Login from './Login';
  import Smart_watch from './Smart_watch';
  import Userref_formvalidation from './Useref_formvalidation';
  import Stop_watch from './Stop_watch';
  import Functapi_task from './Functapi_task'

  


export default function Resturantnav() {
    const Numbers = {'/breackfast':'Breackfast','/lunch':'Lunch','/dinner':'Dinner','/increament_and_decreament':'Increament_and_decreament',
                        '/login':'Login','/smart_watch':'Smart_watch','/userref_formvalidation':'Userref_formvalidation','/stop_watch':'Stop_watch',
                        'functapi_task':'Functapi_task'}
    const returndata = Object.entries(Numbers).map((res,i)=>{
        return <li className="nav-item ps-3" key={i}>
            <Link className="nav-link" to={res[0]}>{res[1]}</Link>
            </li>
    })
    return (
       <>
       <Router>
       <nav className="navbar navbar-expand-sm bg-dark navbar-dark nav">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            {returndata}
                        </ul>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path='/breackfast' element={<Breackfast/>}/>
                <Route path='/lunch' element={<Lunch/>}/>
                <Route path='/dinner' element={<Dinner/>}/>
                <Route path='/increament_and_decreament' element={<Increament_and_decreament/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/smart_watch' element={<Smart_watch/>}/>
                <Route path='/userref_formvalidation' element={<Userref_formvalidation/>}/>
                <Route path='/stop_watch' element={<Stop_watch/>}/>
                <Route path='/functapi_task' element={<Functapi_task/>}/>
            </Routes>
        </Router>
      </>
    )
}

