const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('CanteenDB', 'sa', 'SQL_2003', {
  host: '52.237.120.185', 
  dialect: 'mssql',
  port: 1433,
  dialectOptions: {
    options: {
      encrypt: true, 
      trustServerCertificate: true 
    }
  },
  logging: false 
});

module.exports = sequelize;