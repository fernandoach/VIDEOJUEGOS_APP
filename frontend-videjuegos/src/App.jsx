import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './componets/home'
import Navigation from './componets/navigation'
import { List } from './componets/list'

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route exact path='/' Component={ Home } />
        <Route exact path='/list' Component={ List } />
      </Routes>
    </>
  )
}

export default App
