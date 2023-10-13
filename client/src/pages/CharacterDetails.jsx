import React, {useEffect, useState} from 'react'
import tracerImg from '../assets/tracer.png'
import mercyImg from '../assets/mercy.png'
import reinhardtImg from '../assets/reinhardt.png'
import pulse_pistolsImg from '../assets/pulse_pistols.png'
import caduceus_blasterImg from '../assets/caduceus_blaster.png'
import rocket_hammerImg from '../assets/rocket_hammer.png'
import valkyrie_Img from '../assets/valkyrie.jpg'
import pulse_bombImg from '../assets/pulse_bomb.png'
import earthshatterImg from '../assets/eartshatter.jpg'
import { useParams } from 'react-router-dom'
const CharacterDetails = () => {
    const {id} = useParams()
    const [character,setCharacter] = useState({ 
        body: 'tracer',
        weapon: 'pulse_pistols',
        ultimate_ability: 'pulse_bomb',
        cost: 600
    })
    useEffect(() => {
        // console.log("id",id)
        const fetchCharacter = async () => {
            const response = await fetch(`/api/${id}`)
            const data = await response.json()
            console.log(data)
            setCharacter(data)
        }

        fetchCharacter()
    },[id])
    const costs = {
        body: {
            'tracer': 150,
            'mercy': 100,
            'reinhardt': 300
        },
        weapon: {
            'pulse_pistols': 300,
            'caduceus_blaster': 50,
            'rocket_hammer': 150
        },
        ultimate_ability: {
            'pulse_bomb': 150,
            'valkyrie': 300,
            'earthshatter': 200
        }
    }
    const handleChange = (e) => {
        
        const {name,value} = e.target
        
        // if (checkIfValid(e.target.value)){
          
            setCharacter((prev) => {
                return {
                    ...prev,
                    [name]:value
                
                }
            })
            
            // } else {
        //     setError('Invalid combo')
        // }
        
        
    }
    const updateCharacter = async(e) => {
        e.preventDefault()
        console.log(character)
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(character)
        }
        await fetch(`/api/${character.id}`,options)
        
    }
    const handleDelete = async() => {
        const options = {
            method: 'DELETE'  
        }
        await fetch(`/api/${character.id}`,options)
        window.location = '/'
        
    }
  return (
    <div> 
    <form onSubmit={updateCharacter}> 
    <h2>Character Body</h2>

    <select name='body' value={character.body} defaultValue={character.body} onChange={handleChange}>
        <option value="tracer">Tracer - ${costs.body['tracer']}</option>
        <option value="mercy">Mercy - ${costs.body['mercy']}</option>
        <option value="reinhardt" disabled={character.ultimate_ability == 'valkyrie'}>Reinhardt - ${costs.body['reinhardt']}</option>
    </select>
    {character.body == 'tracer' && <img src={tracerImg} alt="tracer" style={{maxHeight: '125px', maxWidth: '125px'}} />}
    {character.body == 'mercy' && <img src={mercyImg} alt="tracer" style={{maxHeight: '125px', maxWidth: '125px'}} />}
    {character.body == 'reinhardt' && <img src={reinhardtImg} alt="tracer" style={{maxHeight: '125px', maxWidth: '125px'}} />}


    <h2>Weapon</h2>
    <select name='weapon' value={character.weapon} onChange={handleChange}>
        <option value="pulse_pistols">Pulse Pistols - ${costs.weapon['pulse_pistols']}</option>
        <option value="caduceus_blaster">Caduceus Blaster - ${costs.weapon['caduceus_blaster']}</option>
        <option value="rocket_hammer">Rocket Hammer - ${costs.weapon['rocket_hammer']}</option>
    </select>
    {character.weapon == 'pulse_pistols' && <img src={pulse_pistolsImg} alt="tracer" style={{maxHeight: '125px', maxWidth: '125px'}} />}
    {character.weapon == 'caduceus_blaster' && <img src={caduceus_blasterImg} alt="tracer" style={{maxHeight: '125px', maxWidth: '125px'}} />}
    {character.weapon == 'rocket_hammer' && <img src={rocket_hammerImg} alt="tracer" style={{maxHeight: '125px', maxWidth: '125px'}} />}


    <h2>Ultimate</h2>
    <select name='ultimate_ability' value={character.ultimate_ability} onChange={handleChange}>
        <option value="pulse_bomb">Pulse Bomb - ${costs.ultimate_ability['pulse_bomb']}</option>
        <option value="valkyrie" disabled={character.body == 'reinhardt'}>Valkyrie - ${costs.ultimate_ability['valkyrie']}</option>
        <option value="earthshatter">Earthshatter - ${costs.ultimate_ability['earthshatter']}</option>
    </select>
    {character.ultimate_ability == 'pulse_bomb' && <img src={pulse_bombImg} alt="tracer" style={{maxHeight: '125px', maxWidth: '125px'}} />}
    {character.ultimate_ability == 'valkyrie' && <img src={valkyrie_Img} alt="tracer" style={{maxHeight: '125px', maxWidth: '125px'}} />}
    {character.ultimate_ability == 'earthshatter' && <img src={earthshatterImg} alt="tracer" style={{maxHeight: '125px', maxWidth: '125px'}} />}


    <h3>Total cost: ${costs.body[character.body] + costs.weapon[character.weapon] + costs.ultimate_ability[character.ultimate_ability]}</h3>
    <button type='submit'>Update</button>
    </form>
    <button onClick={handleDelete} style={{margin:'10px'}} role="button">Delete</button>
    </div>
  )
}

export default CharacterDetails