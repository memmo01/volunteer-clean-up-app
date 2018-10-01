module.exports = (sequelize, DataTypes) => {
  let users = sequelize.define(
    "users",
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      address: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      zipcode: DataTypes.INTEGER,
      email: DataTypes.STRING,
      uuid: DataTypes.TEXT
    },
    {
      timestamps: false
    }
  );
  return users;
};
