import { useState } from 'react'
import './App.css'
import Card from './components/Card';

function App() {
  const [cardNo, setCardNo] = useState(1);

  return (
    <div className='App'>
      <div className='header'>
        <h1>Algebra Quiz</h1>
        <h3>How good of a plant parent are you? Test all of your planty knowledge here!</h3>
        <h3>Count: </h3>
      </div>
      <div className='container'>
        <Card />
        <div></div>
      </div>
    </div>
  )
}

export default App
