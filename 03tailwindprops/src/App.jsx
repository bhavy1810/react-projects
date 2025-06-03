import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    name: 'John',
    age: 30,
    city: 'New York'
  }
  let myarr = [1, 2, 3, 4, 5]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
      <Card username = 'react with vite' obj = {myarr}/>
      <Card />
    </>
  )
}

export default App
