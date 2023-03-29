'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('teams', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    teamName: {
      allowNull: false,
      type: Sequelize.STRING,
      field: 'team_name' // é preciso definir explicitamente o field porque se trata de um nome composto. baseado nas materias do course e no projeto Blog APIs.
    },
   });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('teams');
  }
};
