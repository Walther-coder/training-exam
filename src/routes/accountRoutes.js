const accountRoutes = require('express').Router();
const bcrypt = require('bcrypt');

const { User, Product } = require('../../db/models');
const Account = require('../views/pages/Account');
const renderTemplate = require('../lib/renderTemplate');

accountRoutes.get('/', async (req, res) => {
    const { login, userId } = req.session;
    const myProduct = await Product.findAll({where:{user_id: userId}});
    const result = myProduct.map((el) => el.get({plain:true}));
    renderTemplate(Account, { login, myAuctions: result}, res);
});

accountRoutes.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const { userId } = req.session;
    try {
        const queryProduct = await Product.findByPk(id);
        if(queryProduct.user_id === userId){
            await Product.destroy({ where: { id } });
            const newQuotesAll = await Product.findAll({ where: { user_id: userId } });
            const result = newQuotesAll.map((el) => el.get({ plain: true }));
            res.json(result)
        }else{
            console.log('Ошибка в правах удаления')
        }
    } catch (error) {
        console.log(error, 'ОШИБКА v РУЧКЕ УДАЛЕНИЯ');
        res.status(400)
    }
})
module.exports = accountRoutes;
