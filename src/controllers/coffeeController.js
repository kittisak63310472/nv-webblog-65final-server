const { coffee } = require('../models')

module.exports = {
    async index(req, res) {
        try {
            const coffees = await coffee.findAll()
            res.send(coffees)
        }catch (err) {
            res.status(500).send({
                error: 'The coffees information was incorrect'
            })
        }
    },

    async create(req, res) {
        try {
            const coffee = await coffee.create(req.body)
            res.send(coffee.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create coffee incorrect'
            })
        }
    },

    async put(req, res) {
        try {
            await coffee.update(req.body, {
                where: {
                    id: req.params.coffeeId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update coffee incorrect'
            })
        }
    },

    async remove(req, res) {
        try {
            const coffee = await coffee.findOne({
                where: {
                    id: req.params.coffeeId
                }
            })

            if (!coffee) {
                return res.status(403).send({
                    error: 'The coffee information was incorrect'
                })
            }

            await coffee.destroy()
            res.send(coffee)
        } catch (err) {
            res.status(500).send({
                error: 'The coffee information was incorrect'
            })
        }
    },

    async show(req, res) {
        try {
            const coffee = await coffee.findByPk(req.params.coffeeId)
            res.send(coffee)
        }catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'The coffee information was incorrect'
            })
        }
    }
    
}