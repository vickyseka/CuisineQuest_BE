const express = require("express")
const router = express.Router()

const loc = require("./Controller/location")
const mealType = require("./Controller/mealType")
const restaruant = require("./Controller/rest")
const register = require("./Controller/register")
const login = require("./Controller/login")
const menuItem = require("./Controller/menu")


router.get('/getallloc',loc.getAllLoc)
router.get('/getallloc/:location_id',loc.getAllLocById)
router.get('/getallrest/:city',restaruant.getCity)
router.get('/getallrestById/:id',restaruant.getrestid)
router.get('/getallmeal',mealType.getAllMealtype)
router.get('/getallrest',restaruant.getAllrestaruant)
router.get('/getallrestLocationId/:location_id',restaruant.getAllrestLocById)
router.post('/signup', register.getAllSignUp)


router.get('/api/query',restaruant.getQuery)

router.post('/filter',restaruant.filter)
router.post('/signin',login.getSignIn)

router.get('/menuItemByName/:name',menuItem.getAddItems)
router.get('/menuItem',menuItem.getAllmenuItem)



const payment = require('./Controller/payment');

router.post('/payment/process',payment.processPayment);
router.get('/stripe',payment.sendStripe);

module.exports =router




