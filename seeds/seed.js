const sequelize = require('../config/connection');
const { User } = require('../models');
const { Messages } = require('../models')

const userData = require('./userData.json');
const messagesData = require('./messagesData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Messages.bulkCreate(messagesData, {
    individualHooks: true,
    returning: true,
  })


  process.exit(0);
};

seedDatabase();
