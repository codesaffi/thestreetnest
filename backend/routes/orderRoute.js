import express from 'express'
import {placeOrder,allOrders,userOrders,UpdateStatus} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router()

//admin features
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,UpdateStatus)

//payemnt feature
orderRouter.post('/place',authUser,placeOrder)

//user feature
orderRouter.post('/userorders',authUser,userOrders)

export default orderRouter