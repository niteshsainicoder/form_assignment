import Sequelize from 'sequelize';
import sequelize from './config/database.js'; // your sequelize instance

// Sync with the database
sequelize.sync({ force: false }) // Set to true to drop and recreate the table
    .then(() => {
        console.log('Database & tables created!');
    })
    .catch(err => {
        console.error('Unable to create table:', err);
    });

sequelizes.authenticate()
    .then(() => console.log('Database connected successfully.'))
    .catch((err) => console.log('Error: ' + err));
