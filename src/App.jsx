import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import './components/header/Header'
import Header from './components/header/Header'
import Body from './components/header/body/Body'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <Body/>
    </div>
  )
}

export default App
