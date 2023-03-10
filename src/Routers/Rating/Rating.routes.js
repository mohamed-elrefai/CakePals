import { Router } from "express";
import { AddRatingOfBakerController, UpdateRatingController } from '../../Controller/Rating/Rating.js'
import { verifyToken } from '../../Middleware/Auth.middleware.js'
const router = Router();

router.post('/addstar/:id', verifyToken, AddRatingOfBakerController)
router.put('/updatestar/:id', verifyToken, UpdateRatingController)


export default router