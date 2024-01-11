import React, { useState } from 'react'


function Register() {

    const [formvals,setFormvals]=useState({
        firstname:"",
        lastname:"",
        email:"",
        phonenumber:""
    })

    const [error,setError]=useState({})
    const [submitted, setSubmitted] = useState(false);


    function handleform(e){
        const[name,value]=[e.target.name,e.target.value]
        setFormvals({...formvals,[name]:value})
    }

    function validate(e){
        e.preventDefault()
        let error={};
        if (formvals.firstname.length==0){
            error.firstname="Please enter yout first name"
        }
        if (formvals.lastname.length==0){
            error.lastname="Please enter your last name"
        }
        if (formvals.email.length==0){
            error.email="Please enter your name email"
        }
        if (formvals.phonenumber.length==0){
            error.phonenumber="Please enter your phonenumber"
        }
        if (formvals.phonenumber.length!=10){
            error.phonenumber="Enter valid Number"
        }
        setError(error)
        setSubmitted(true)
    }

  return (
    <form className='box' onSubmit={validate}>
        {submitted && Object.keys(error).length==0 && <div className='success'><h3>Registration Successful!!!</h3></div>}
        <input type="text" placeholder='First Name' name='firstname' value={formvals.firstname} onChange={handleform}/>
        {error.firstname && <div className="error-message">{error.firstname}</div>}
        <input type="text" placeholder='Last Name' name='lastname' value={formvals.lastname}  onChange={handleform}/>
        {error.lastname && <span className="error-message">{error.lastname}</span>}
        <input type="text" placeholder='Email' name='email' value={formvals.email}  onChange={handleform}/>
        {error.email && <span className="error-message">{error.email}</span>}
        <input type="text" placeholder='Phone number' name='phonenumber' value={formvals.phonenumber}  onChange={handleform}/>
        {error.phonenumber && <span className="error-message">{error.phonenumber}</span>}
        <button type='submit'>Register</button>
    </form>
  )
}

export default Register