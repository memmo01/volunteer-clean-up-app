module.exports = (sequelize, DataTypes) => {
  console.log("WORKING");
  let logincreds = sequelize.define(
    "logincreds",
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      user_id: DataTypes.STRING
    },
    {
      timestamps: false
    }
  );
  return logincreds;
};
