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
      creator: DataTypes.STRING,
      user_id: DataTypes.STRING,
      contact: DataTypes.STRING,
      start_date: DataTypes.INTEGER
    },
    {
      timestamps: false
    }
  );
  return events;
};
