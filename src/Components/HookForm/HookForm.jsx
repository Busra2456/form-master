import useInputState from "../../Hooks/Hooks";

const HookForm = () => {
      // const [name,handleNameChange] = useInputState('bismillah')

      const emailStats = useInputState('bismmillah@com')

      const handleSubmit = e =>{
            console.log('form data', emailStats.value)
            e.preventDefault();}


      return (
            <div>
                     <form onSubmit={handleSubmit} >


{/* <input value={name} onChange={handleNameChange} 
type="text" name="name"/> */}
   <br />  
              

 
<input {...emailStats} type="email" name="email" id="" />
<br />
<input type="password" name="password" />
<br />
<input type="submit" value="Submit" /></form>   
            </div>
      );
};

export default HookForm;