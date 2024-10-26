import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  let myObj={
    age:24,
    name:'Vikas'

  }
  return (
    <>
    <div className='bg-green-400 text-black  p-4 rounded-xl'>Tailwind test</div>

     <Card myname={"Vikas"}/>
     <Card />
    </>
  )
}

export default App
