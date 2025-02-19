import { useState } from 'react'

import Header from './Components/Header.jsx'
import UserInput from './Components/UserInput.jsx'
import Result from './Components/Result.jsx'

function App() {
  const[userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
})

const validInput = userInput.duration >= 1;

function handleChange(inputIdentifier, newValue){
  setUserInput(prevUserInput =>{
      return{
          ...prevUserInput,
          [inputIdentifier]: +newValue,
      };
  });
}

  return (
    <>
      <Header />
      <UserInput userInput = {userInput} onChange={handleChange}/>
      {!validInput && <p className="center">Please Enter duration greater than zero</p>}
      {validInput && <Result input={userInput} />}
    </>
  )
}

export default App
