import { Sequelize, DataTypes } from 'sequelize';
const sequelize = new Sequelize('forms_db', 'root', 'shiv', {
    host: 'localhost',
    dialect: 'mysql',
});
const FormData = sequelize.define('FormData', {
    formType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlpha: true, // Validates that the name contains only letters
        },
    },
    countryCode: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    synced: {
        type: DataTypes.BOOLEAN,
        defaultValue: false, // Default value is false (not synced)
    }
}, {
    tableName: 'formdata', // Specify the table name if different
    timestamps: true, // Adds createdAt and updatedAt fields
});


export  default  FormData;
