module.exports = (sequelize, DataTypes) => {
  let events = sequelize.define(
    "events",
    {
      volunteers_needed: DataTypes.STRING,
      group_name: DataTypes.STRING,
      address: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      zip: DataTypes.INTEGER,
      start_time: DataTypes.STRING,
      end_time: DataTypes.STRING,
      creator_id: DataTypes.STRING
    },
    {
      timestamps: false
    }
  );
  return events;
};
