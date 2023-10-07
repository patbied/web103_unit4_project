import React, {useState} from 'react'

const CreateCharacter = () => {
    const [character,setCharacter] = useState({ 
        body: 'tracer',
        weapon: 'pulse pistols',
        ultimate_ability: 'pulse bomb',
        cost: 600
    })
    const [error,setError] = useState('')
    // const checkIfValid = (selected) => {
    //     console.log("checking",selected)
    //     if (character.body == 'reinhardt' && selected == 'valkyrie') {
    //         console.log('return false')
    //         return false
    //     } 
    //     if (character.ultimate_ability == 'valkyrie' && selected == 'reinhardt') {
    //         console.log('return false')
    //         return false
        

    //     }
    //     return true
    // }
    const costs = {
        body: {
            'tracer': 150,
            'mercy': 100,
            'reinhardt': 300
        },
        weapon: {
            'pulse pistols': 300,
            'caduceus blaster': 50,
            'rocket hammer': 150
        },
        ultimate_ability: {
            'pulse bomb': 150,
            'valkyrie': 300,
            'earthshatter': 200
        }
    }
    const handleChange = (e) => {
        
        const {name,value} = e.target
        
        // if (checkIfValid(e.target.value)){
            setError('')
            setCharacter((prev) => {
                return {
                    ...prev,
                    [name]:value
                
                }
            })
            console.log('body price',costs.body[character.body], 'weapon price',costs.weapon[character.weapon],costs.ultimate_ability[character.ultimate_ability])
            const newCost = costs.body[character.body] + costs.weapon[character.weapon] + costs.ultimate_ability[character.ultimate_ability]
            
            setCharacter((prev) => {
                return {
                    ...prev,
                    cost: newCost
                }
            }) 
            console.log(newCost)
            // } else {
        //     setError('Invalid combo')
        // }
        
        
    }

    const createCharacter = async(e) => {
        e.preventDefault()
        console.log(character)
    }
  return (
    <div><h1>CreateCharacter</h1>
    {error && <h3>Error: {error}</h3>}
    <form onSubmit={createCharacter}> 
    <h2>Character Body</h2>

    <select name='body' onChange={handleChange}>
        <option value="tracer">Tracer - ${costs.body['tracer']}</option>
        <option value="mercy">Mercy - ${costs.body['mercy']}</option>
        <option value="reinhardt" disabled={character.ultimate_ability == 'valkyrie'}>Reinhardt - ${costs.body['reinhardt']}</option>
    </select>

    <h2>Weapon</h2>
    <select name='weapon' onChange={handleChange}>
        <option value="pulse pistols">Pulse Pistols - ${costs.weapon['pulse pistols']}</option>
        <option value="caduceus blaster">Caduceus Blaster - ${costs.weapon['caduceus blaster']}</option>
        <option value="rocket hammer">Rocket Hammer - ${costs.weapon['rocket hammer']}</option>
    </select>

    <h2>Ultimate</h2>
    <select name='ultimate_ability' onChange={handleChange}>
        <option value="pulse bomb">Pulse Bomb</option>
        <option value="valkyrie" disabled={character.body == 'reinhardt'}>Valkyrie</option>
        <option value="earthshatter">Earthshatter</option>
    </select>

    <h3>Total cost: ${character.cost}</h3>
    <button type='submit'>Create</button>
    </form>
    </div>
  )
}

export default CreateCharacter