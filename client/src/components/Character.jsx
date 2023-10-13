import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import tracerImg from '../assets/tracer.png'
import mercyImg from '../assets/mercy.png'
import reinhardtImg from '../assets/reinhardt.png'
import pulse_pistolsImg from '../assets/pulse_pistols.png'
import caduceus_blasterImg from '../assets/caduceus_blaster.png'
import rocket_hammerImg from '../assets/rocket_hammer.png'
import valkyrie_Img from '../assets/valkyrie.jpg'
import pulse_bombImg from '../assets/pulse_bomb.png'
import earthshatterImg from '../assets/eartshatter.jpg'
export const Character = ({character}) => {
    // useEffect(() => {
    //     console.log("Character:", character)
    // })

    const handleDelete = async() => {
        const options = {
            method: 'DELETE'  
        }
        await fetch(`/api/${character.id}`,options)
        window.location = '/'
        
    }
    return (
        <article>
            <header><h2>{character.body} {character.body == 'tracer' && <img src={tracerImg} alt="tracer" style={{maxHeight: '125px', maxWidth: '125px'}} />}
    {character.body == 'mercy' && <img src={mercyImg} alt="tracer" style={{maxHeight: '125px', maxWidth: '125px'}} />}
    {character.body == 'reinhardt' && <img src={reinhardtImg} alt="tracer" style={{maxHeight: '125px', maxWidth: '125px'}} />}</h2></header>
                <h3>{character.weapon}  {character.weapon == 'pulse_pistols' && <img src={pulse_pistolsImg} alt="tracer" style={{maxHeight: '125px', maxWidth: '125px'}} />}
    {character.weapon == 'caduceus_blaster' && <img src={caduceus_blasterImg} alt="tracer" style={{maxHeight: '125px', maxWidth: '125px'}} />}
    {character.weapon == 'rocket_hammer' && <img src={rocket_hammerImg} alt="tracer" style={{maxHeight: '125px', maxWidth: '125px'}} />}</h3>   
                <h3>{character.ultimate_ability}  {character.ultimate_ability == 'pulse_bomb' && <img src={pulse_bombImg} alt="tracer" style={{maxHeight: '125px', maxWidth: '125px'}} />}
    {character.ultimate_ability == 'valkyrie' && <img src={valkyrie_Img} alt="tracer" style={{maxHeight: '125px', maxWidth: '125px'}} />}
    {character.ultimate_ability == 'earthshatter' && <img src={earthshatterImg} alt="tracer" style={{maxHeight: '125px', maxWidth: '125px'}} />}
</h3>
            <footer> 
                <Link to={`edit/${character.id}`} style={{margin:'10px'}} role="button">Edit</Link>
                <button onClick={handleDelete} style={{margin:'10px'}} role="button">Delete</button>
            </footer>
        </article>
    )
}
