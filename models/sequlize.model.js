const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Shedule = sequelize.define(
    "Table_schedule",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "table_schedule",
    }
  );
  return Shedule;
};
