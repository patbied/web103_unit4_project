import React from 'react'
import { useRoutes } from 'react-router-dom'
import ViewCharacters from './pages/ViewCharacters.jsx'
import CreateCharacter from './pages/CreateCharacter.jsx'
import Navigation from './components/Navigation.jsx'
import CharacterDetails from './pages/CharacterDetails.jsx'
import './App.css'

const App = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <ViewCharacters/>
    },
    {
      path: '/create-character',
      element: <CreateCharacter/>
    },
    {
      path: '/edit/:id',
      element: <CharacterDetails/>
    }
    
  ])

  return (
    <div className='app'>

      <Navigation />
    <main className='container'> 
      { element }
      </main>
    </div>
  )
}

export default App