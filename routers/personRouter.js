import express from 'express';
import { getAllPersons , createPerson, getPerson  } from '../controllers/personcontrollers.js';
const router = express.Router();

router.get('/', getAllPersons);
router.get('/:id', getPerson);
router.post('/', createPerson );

export default router; // Exportation par défaut
