import { useState } from "react";


const StatefulForm = () => {
      const [email,setEmail] = useState(null);
      const [name,setName] = useState('busra begum');
      const [password, setPassword] = useState(null);
      const [error,setError] = useState('')



      const handleSubmit = e =>{
            e.preventDefault();
            if(password.length < 6){
               setError('Password must be 6 characters or longer')   
            }
            else{
                  setError('');
                  console.log(email,name,password);
            }
           

      }


      const handleEmailChange = e =>{
            console.log(e.target.value)
            setEmail(e.target.value)

      }

      const handleNameChange = e =>{
            console.log(e.target.value)
            setName(e.target.value)
      }

      const handlePasswordChange = e =>{
            console.log(e.target.value)
            setPassword(e.target.value)

      }



      return (
            <div>
                  <h2>Stateful Form toiri korbo</h2>
                    <form onSubmit={handleSubmit} >
<input value={name}
onChange={handleNameChange}

type="text" name="name"/>
   <br />  
<input onChange={handleEmailChange}

type="email" name="email" id="" />
<br />
<input 

onChange={handlePasswordChange}


type="password" name="password" required id="" />
<br />
<input type="submit" value="Submit" />

{
      error && <p>{error}</p>
}


</form> 
            </div>
      );
};

export default StatefulForm;