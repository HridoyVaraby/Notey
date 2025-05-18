const { Sequelize, DataTypes } = require('sequelize');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Create Sequelize instance
const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT || 3306,
    dialect: 'mysql',
    logging: process.env.NODE_ENV === 'development' ? console.log : false,
  }
);

// Initialize models
const db = {};

// Import models
db.User = require('./user.model')(sequelize, DataTypes);
db.Task = require('./task.model')(sequelize, DataTypes);
db.Note = require('./note.model')(sequelize, DataTypes);

// Define associations
db.User.hasMany(db.Task, { foreignKey: 'userId' });
db.Task.belongsTo(db.User, { foreignKey: 'userId' });

db.User.hasMany(db.Note, { foreignKey: 'userId' });
db.Note.belongsTo(db.User, { foreignKey: 'userId' });

// Add sequelize instance and Sequelize class to db object
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;