const router = require('express').Router();
const { Messages } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const messagesData = await Messages.findAll({

        })
        res.status(200).json(messagesData);
    } catch (err) {
        res.status(500).json(err);
    }
})
  module.exports = router;