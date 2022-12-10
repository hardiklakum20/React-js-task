import React from 'react';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';

function Useref_formvalidation(props) {
    const inp = useRef(null);
    console.log(inp);

    const btnClick=()=>{
        inp.current.focus();
        console.log(inp.current.value);
    }
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
     const onSubmit = data => console.log(data);

  console.log(watch("example"));
    return (
        <>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-3">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="table table border-1">
                                <label htmlFor="Name" name="First Name">Firstname:</label>
                                <br />
                                <input defaultValue="" placeholder='Firstname' {...register("example")} {...register("exampleRequired", { required: true })}/>
                                <br />
                                {errors.exampleRequired && <span className='text-danger'>Enter Firstname</span>}
                                <br />
                                <label htmlFor="">Lastname:</label>
                                <br />
                                <input defaultValue="" placeholder='Lastname' type={'text'} {...register("example")} {...register("exampleRequired", { required: true })}/>
                                <br />
                                {errors.exampleRequired && <span className='text-danger'>Enter Lastname</span>}
                                <br />
                                <label htmlFor="">Email:</label>
                                <br />
                                <input defaultValue="" placeholder='Email' type={'email'} {...register("example")} {...register("exampleRequired", { required: true })}/>
                                <br />
                                {errors.exampleRequired && <span className='text-danger'>Enter Email</span>}
                                <br />
                                <label htmlFor="">Password:</label>
                                <br />
                                <input defaultValue="" placeholder='Password' type={'password'} {...register("example")} {...register("exampleRequired", { required: true })}/>
                                <br />
                                {errors.exampleRequired && <span className='text-danger'>Enter Password</span>}
                                <br />
                                <input type="submit" onClick={btnClick}/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        </>
    );
}

export default Useref_formvalidation;