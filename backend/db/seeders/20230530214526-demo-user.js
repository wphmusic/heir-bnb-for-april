'use strict';
const bcrypt = require('bcryptjs');

const userData = [
  {
    firstName: 'Bro',
    lastName: 'Dude',
    email: 'demo@user.io',
    username: 'Demo-lition',
    hashedPassword: bcrypt.hashSync('password'),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    firstName: 'Girl',
    lastName: 'Lady',
    email: 'user1@user.io',
    username: 'FakeUser1',
    hashedPassword: bcrypt.hashSync('password2'),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    firstName: 'Chicken',
    lastName: 'Nugget',
    email: 'user2@user.io',
    username: 'FakeUser2',
    hashedPassword: bcrypt.hashSync('password3'),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert('Users', userData);
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    const usernamesToDelete = userData.map((user) => user.username);

    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: usernamesToDelete },
    });
  },
};

