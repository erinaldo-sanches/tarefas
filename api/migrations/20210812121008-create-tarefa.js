'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tarefas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      professorId: {
        type: Sequelize.INTEGER,
        //chave estrangeira
        references:{
          model:'Professor',
          key: 'id'
        },
        onUpdate:'cascade',
        onDelete:'cascade'
      },
      alunoId: {
        type: Sequelize.INTEGER,
        references:{
          model:'Aluno',
          key:'id'
        },
        onUpdate:'cascade',
        onDelete:'cascade'
      },
      dataPublicacao: {
        type: Sequelize.DATEONLY
      },
      dataEntrega: {
        type: Sequelize.DATEONLY
      },
      nota: {
        type: Sequelize.FLOAT(3,1)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Tarefas');
  }
};