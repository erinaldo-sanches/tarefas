'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tarefa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tarefa.belongsTo(models.Professor);
      Tarefa.belongsTo(models.Aluno);
    }
  };
  Tarefa.init({
    idProfessor: DataTypes.INTEGER,
    idAluno: DataTypes.INTEGER,
    dataPublicacao: DataTypes.DATEONLY,
    dataEntrega: DataTypes.DATEONLY,
    nota: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Tarefa',
  });
  return Tarefa;
};