module.exports = (sequelize, DataTypes) => {
  console.log("WORKING");
  let logincreds = sequelize.define(
    "logincreds",
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      uuid: DataTypes.TEXT
    },
    {
      timestamps: false
    }
  );
  return logincreds;
};
