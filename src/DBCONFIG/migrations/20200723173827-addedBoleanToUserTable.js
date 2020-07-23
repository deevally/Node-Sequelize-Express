'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
 
     await queryInterface.addColumn("Users", 
       "isAdmin",  {
         type: Sequelize.BOOLEAN,
       },
     );
     
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
