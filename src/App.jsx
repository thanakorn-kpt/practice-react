import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './components/MyButton'
import MyProfile from './components/MyProfile'

function App() {
  const [count, setCount] = useState(0)
  const [name ,setName] = useState('thanakorn Kampangta')
  const [ifTrue ,setIfTrue] = useState(true)

  const user = {
    firstname: "Jake",
    lastname: "Joong",
    imgpic: "https://images.unsplash.com/photo-1611200945005-403b70229452?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29ufGVufDB8fDB8fHww"
  }

  const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];

  function handlePlus(){
    setCount(count+1)
  }
  function handleMinus(){
    setCount(count-1)
  }

  return (
    //react fragment
    <>
      <h1>Welcome To My App</h1>
      <MyProfile data={user}/>
      <p>{count}</p>
      <button onClick={handlePlus}>Count+</button>
      <button onClick={handleMinus}>Count-</button>
      <MyButton />

      {/* Ternary Operator */}
      {ifTrue ? "Yes, it's True" : "No it's False"}

      <ul>
        {products.map(item =>(
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  )
}

export default App
