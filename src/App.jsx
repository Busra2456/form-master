
import { Children } from 'react'
import './App.css'
import HookForm from './Components/HookForm/HookForm'
import RefForm from './Components/RefForm/RefForm'
import ReusableForm from './Components/ReusableForm/ReusableForm'
import SimpleForm from './Components/SimpleForm/SimpleForm'
import StatefulForm from './StatefulForm/StatefulForm'
import Grandpa from './Components/Grandpa/Grandpa'

function App() {
  // const handleSignupSubmit = data =>{
  //   console.log('sign up data',data)};

  //   const handleUpdateSubmit = data =>{
  //   console.log('update profile',data) }


  return (
    <>
     
     <h1>Form Master</h1>
     <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm formTitle={'Sign Up'} handleSubmit={handleSignupSubmit}> */}
{/* 
        <div>
          <h2>Sign Up</h2>
          <p>please sign up right now</p>
        </div> */}


      {/* </ReusableForm>
    ;
     <ReusableForm formTitle={'Profile Update'} submitBtnText='Update' handleSubmit={handleUpdateSubmit} >

      <div>
       <h2>Update Profile</h2>
        <p>Always keep your profile updated</p>
      </div>


     </ReusableForm> */}
     
     </>


  )
}

export default App
