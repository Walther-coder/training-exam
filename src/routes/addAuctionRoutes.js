const addAuctionRoutes = require('express').Router();
const bcrypt = require('bcrypt');

const { Product } = require('../../db/models');
const AddAuction = require('../views/pages/AddAuction');
const renderTemplate = require('../lib/renderTemplate');

addAuctionRoutes.get('/', async (req, res) => {
    const { login, userId } = req.session; 
    renderTemplate(AddAuction, { login }, res);
})

addAuctionRoutes.post('/', async(req, res) => {
    const{name, condition, startsAt, endsAt, description} = req.body;
    const {login, userId} = req.session;
    console.log('=======>', name, condition, startsAt, endsAt, description)
   try {
    const queryProduct = await Product.findOne({where:{name}});
    if(queryProduct){
        res.json({err: 'Такой аукцион уже есть!'})
    } else{
        const newProduct = await Product.create({name, condition, startsAt,  EndsAt: endsAt, description, price:null, user_id: userId});
        res.json({msg: 'Продукт удачно добавлен на аукцион'});
    }
   } catch (error) {
    console.log('оШИБКА В РУЧКЕ СОЗДАНИЯ АУКЦИОНА')
   }
})

module.exports = addAuctionRoutes;