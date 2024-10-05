import { Sequelize } from 'sequelize';

// Create a connection to the database
const sequelize = new Sequelize('forms_db', 'root', 'shiv', {
    host: 'localhost',
    dialect: 'mysql',
    logging: console.log, // Enable logging
});

export default sequelize;
