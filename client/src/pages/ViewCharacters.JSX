import React, {useState, useEffect} from 'react'
import { Character } from '../components/Character'
const ViewCharacters = () => {
    const [characters, setCharacters] = useState([])
    useEffect(() => {
        const fetchCharacters = async () => {
            const response = await fetch('/api')
            const data = await response.json()
            // console.log(data)
            setCharacters(data)
        }

        fetchCharacters()
    },[])
  return (
    <div>
        <h1>View Characters</h1>
        <div>
            {characters.map((character) => {
                return <Character key={character.id} character={character}/>
            })}
        </div>
        
    </div>
  )
}

export default ViewCharacters