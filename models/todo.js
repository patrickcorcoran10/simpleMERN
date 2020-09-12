module.exports = function (sequelize, DataTypes) {
  const Todos = sequelize.define("Todos", {
    items: {
      type: DataTypes.STRING,
    },
    checked: DataTypes.BOOLEAN,
  });
  return Todos;
};
