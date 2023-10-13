import express from 'express';
import characterController from '../controller/controller.js'
const router = express.Router()

router.get('/',characterController.getCharacter)
router.post('/',characterController.createCharacter)
router.delete('/:id',characterController.deleteCharacter)
router.get('/:id',characterController.getCharacterById)
router.patch('/:id',characterController.updateCharacter)
export default router;