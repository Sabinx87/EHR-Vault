import express from 'express';
import {getall,create} from '../controller/nodeController.js';

const router = express.Router();

router.get("/",getall)
router.post("/",create)

export default router;