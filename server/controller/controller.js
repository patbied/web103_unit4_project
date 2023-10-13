import {pool} from '../config/database.js'


const errResponse = (res,err) => {
    console.log(err.message)
    res.status(400).json({error: err.message})
}

const getCharacter = async(req, res) => {
    try {
        const results = await pool.query("SELECT * FROM characters ORDER BY id ASC")
        res.status(200).json(results.rows)
    } catch(err) {errResponse(res,err)}
}

const createCharacter = async(req, res) => {
    try {
        const {body,weapon,ultimate_ability} = req.body
        const results = await pool.query('INSERT INTO characters (body, weapon, ultimate_ability) values ($1, $2, $3) RETURNING *',[body, weapon,ultimate_ability])
        res.status(201).json(results.rows[0]) 
    }catch(err){errResponse(res,err)}
}

const deleteCharacter = async(req, res) => {
    
    try {
        const {id} = req.params
        console.log('deleting',id)
        const results = await pool.query("DELETE FROM characters WHERE id = $1",[id])
        res.status(201).json(results.rows[0])
    } catch(err) {
        errResponse(res,err)
    }
}

const getCharacterById = async(req,res) => {
    try {
        const {id} = req.params
        // console.log(id)
        // console.log("ID")
        const results = await pool.query("SELECT * FROM characters WHERE id = $1",[id])
        // console.log(results.rows[0])
        res.status(200).json(results.rows[0])
    } catch(err) {errResponse(res,err)}
}

const updateCharacter = async(req,res) => {
    try {
        const {id} = req.params
        const {body,weapon,ultimate_ability} = req.body
        const results = await pool.query(`
    UPDATE characters SET body = $1, weapon = $2, ultimate_ability = $3 WHERE id = $4`,
    [body,weapon,ultimate_ability, id]
)   
        res.status(200).json(results.rows[0])
    } catch(err){errResponse(res,err)}
}
export default {getCharacter,createCharacter,deleteCharacter, getCharacterById,updateCharacter}
