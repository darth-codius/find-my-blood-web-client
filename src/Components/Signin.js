import React from 'react'

export default function Signin() {
    return (
        <div  className="login">
            <div>
            <h1> GET BLOOD</h1>
        
            <p>One pint of blood can save up to three lives</p>
            </div>
            <h1>hello</h1>
            <div>
                <form>
                <h1>Login</h1>
                <p>Welcome Back!</p>
                <label> Firstname </label>   
                <input type="text" name="firstname" placeholder= "Firstname" size="15" required />   
                <label> Middlename: </label>   
                <input type="text" name="middlename" placeholder="Middlename" size="15" required />   
                <label> Lastname: </label>    
                <input type="text" name="lastname" placeholder="Lastname" size="15"required />   

                {/* <input type="text" placeholder="Email Address"/>
                <input type="text" placeholder="Password"/>
                <p>Forgot password?</p>
                <button>Login</button>
                <p>Need an account?</p> */}
                </form>
            </div>
        </div>
    )
}
