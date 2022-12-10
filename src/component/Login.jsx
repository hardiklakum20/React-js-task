import React, { useState } from 'react';



const LoginPage = () =>{
         const [email,setEmail] = useState('')
         const [password,setPassword] = useState('')
         const userName = localStorage.getItem('email')
         ? localStorage.getItem('email'):'admin@admin.com'
         const userPassword = localStorage.getItem('password')
         ? localStorage.getItem('password'):'admin'

         const handleSubmit = (e) =>{
            e.preventDeafult();
            if(email === userName && password === userPassword){
                window.location.href="/01 Resturantnav"
            }
            else{
                alert('Invalid email or password')
            }
         }
        return (
            <>
              <div className="container mt-3">
                     <h2>Login Form</h2>
                     <form action="post">
                        <div className='mb-3 mt-3'>
                            <label for="email">Email:</label>
                            <input type="email" className='form-control' value={email} onChange={e => setEmail(e.target.value)} id='email' placeholder='Enter Email' name='Email' />
                        </div>
                        <div className='mb-3'>
                            <label for="pwd">Password:</label>
                            <input type="password" className='form-control' value={password} onChange={e => setPassword(e.target.value)}  id='pwd' placeholder='Enter Password' name='pswd' />
                        </div>
                        <div className="form-check mb-3">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" name="remember"/> Remember me
                            </label>
                         </div>
                         <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>  
                     </form>
              </div>

            </>
        );
}
export default LoginPage;
<script>

</script>