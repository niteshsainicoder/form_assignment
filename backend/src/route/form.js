import express from 'express';
import FormData from '../models/formdata.js'; // your model
const router = express.Router();

// POST route to handle form submission
router.post('/submit', async (req, res) => {
    const { formType, name, countryCode, phoneNumber } = req.body;
    
    try {
        // Create a new record in the database
        const newEntry = await FormData.create({
            formType,
            name,
            countryCode,
            phoneNumber
        });
        res.status(201).json({ message: 'Form data saved successfully!', data: newEntry });
    } catch (error) {
        console.error('Error saving form data:', error); // Log the error for debugging
        res.status(400).json({ message: 'Error saving form data', error });
    }
});

export { router };
