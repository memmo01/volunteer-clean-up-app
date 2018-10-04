module.exports = (sequelize, DataTypes) => {
  let signed_up_events = sequelize.define(
    "signed_up_events",
    {
      user_id: DataTypes.STRING,
      group_id: DataTypes.STRING
    },
    {
      timestamps: false
    }
  );
  return signed_up_events;
};
