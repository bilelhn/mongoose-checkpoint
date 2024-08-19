import express from 'express';
import { getAllPersons , createPerson, getPerson, deletePerson,updatePerson } from '../controllers/personcontrollers.js';
const router = express.Router();

router.get('/', getAllPersons);
router.get('/:id', getPerson);
router.post('/', createPerson );
router.delete('/:id', deletePerson);
router.put('/:id', updatePerson);

export default router; 
