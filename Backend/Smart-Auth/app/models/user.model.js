module.exports = (sequelize, Sequelize, DataTypes) => {
    const User = sequelize.define(
      "user", // Model name
      {
        // Attributes
        username: {
          type: DataTypes.STRING,
          unique: true
        },
        email: {
          type: DataTypes.STRING
        },
        password: {
          type: DataTypes.STRING
        },
        role: {
            type: DataTypes.STRING
        },
        created_at: {
            type: DataTypes.DATE
        },
        updated_at: {
            type: DataTypes.DATE
          }
      },
      {
        tableName: 'user',
        timestamps: false
      }
    );
  
    return User;
  };