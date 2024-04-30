module.exports = rs => {
    const router = require("express").Router();
    const controller =require('../controllers/user.controller')

    // Add recipe
    router.post('/signup', controller.create) 

    // get all recipes
    router.get('/', controller.getAll) 

    // get a recipe
    router.get('/', controller.getAll) 

    // Delete all recipes
    router.delete('/', controller.deleteAll) 

    // Update one recipe
    router.put('/:id', controller.update)
    
    // Delte a recipe
    router.delete('/:id', controller.deleteOne) 


    rs.use('/v1/users', router);
}