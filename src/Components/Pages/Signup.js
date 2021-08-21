import React from 'react'

export default function Signup() {
    return (
        <div>
            <div>
<h1></h1>
            </div>
            
                <form>
                 <div>
                 <h1>Register</h1>
                <p>Create an account</p>
                <label> Hospital Name </label>   
                <input type="text" name="hospitalname" placeholder= "Hospitalname" size="80" required />  <br></br> 
                <label> Email Address: </label>   
                <input type="text" name="email" placeholder="email" size="40" required />  <br></br>   
                < label> Password: </label>    
                <input type="text" name="password" placeholder="password" size="40"required />   <br></br>  
                < label> Confrim Password: </label>   
                <input type="text" name="retype password" placeholder="retype password" size="40"required />   <br></br>  
                 <button>Register</button>
                 <p>Already have an account?</p>
                 </div>
                </form>
                
                {/* <input type="text" placeholder="Hospital Name"/>
                <input type="text" placeholder="Email Address"/>
                <input type="text" placeholder="Password"/>
                <input type="text" placeholder="Confirm Password"/>
                <p>Forgot password?</p>
                <button>Register</button>
                <p>Already have an account?</p> */}
        
        </div>
    )
}
