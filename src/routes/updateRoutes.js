const updateAuctionRoutes = require('express').Router();
const bcrypt = require('bcrypt');

const { Product, User } = require('../../db/models');
const UpdateAuction = require('../views/pages/UpdateAuction');
const renderTemplate = require('../lib/renderTemplate');

updateAuctionRoutes.get('/:id', async (req, res) => {
    const { login, userId } = req.session;
    const {id} = req.params;
    
    try {
        const queryProduct = await Product.findByPk(id);
        
        renderTemplate(UpdateAuction, { login,queryProduct }, res);  
    } catch (error) {
        console.log(error, 'ОШИБКА В ОТРИСОВКЕ РУЧКИ АПДЕЙТ')
    }
})



updateAuctionRoutes.put('/:id', async (req, res) => {
    const{name, condition, startsAt, endsAt, description} = req.body;
    // console.log(req.body);
    const { userId } = req.session;
    const { id } = req.params;
    try {
        const queryProduct = await Product.findByPk(id);
        if(queryProduct.user_id === userId){
            queryProduct.name = name;
            queryProduct.condition = condition;
            queryProduct.startsAt = startsAt;
            queryProduct.EndsAt = endsAt;
            queryProduct.description = description;
            await queryProduct.save();
            res.json({msg: 'Все хорошой'});
        }else{
            console.log('Ошибка в правах изменения')
            res.json({err: 'Все плохо'});
        }
    } catch (error) {
      console.log('error', error);
      res.sendStatus(400);
    }
  });

  module.exports = updateAuctionRoutes;