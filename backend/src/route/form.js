import express from "express";
import FormData from "../models/formdata.js"; // your model
const router = express.Router();
import axios from "axios";

// POST route to handle form submission
router.post("/submit", async (req, res) => {
  const { formType, name, countryCode, phoneNumber } = req.body;

  try {
    // Create a new record in the database
    const newEntry = await FormData.create({
      formType,
      name,
      countryCode,
      phoneNumber,
    });
    res
      .status(201)
      .json({ message: "Form data saved successfully!", data: newEntry });
  } catch (error) {
    console.error("Error saving form data:", error); // Log the error for debugging
    res.status(400).json({ message: "Error saving form data", error });
  }
});

router.get("/sync", async (req, res) => {
    try {
        // Fetch unsynced data from the SQL database
        const unsyncedForms = await FormData.findAll({
          where: { synced: false }, // Only fetch records that haven't been synced
        });
    
        // Check if there is any data to sync
        if (unsyncedForms.length === 0) {
          return res.status(200).json({ message: "No new data to sync." });
        }
    
        // Prepare data for SheetDB (convert forms to array of objects)
        const formData = unsyncedForms.map((form) => ({
          name: form.name,
          countryCode: form.countryCode,
          phoneNumber: form.phoneNumber,
          formType: form.formType,
        }));
    
        // Send data to SheetDB

        const response = await axios.post(process.env.SynchroniztionUrl, { data: formData });
    
        if (response.status === 201) {
          // If the sync is successful, mark the forms as synced in the database
          await FormData.update(
            { synced: true }, // Update synced to true
            { where: { id: unsyncedForms.map((form) => form.id) } } // Update only the synced forms
          );
    
          // Respond to the client with a success message
          res.status(200).json({ message: "Data successfully synced to Google Sheet!" });
        } else {
          res.status(400).json({ message: "Failed to sync data to Google Sheet." });
        }
      } catch (error) {
        console.error("Error syncing data to SheetDB:", error);
        res.status(500).json({ message: "Server error, unable to sync data." });
      }
    
});

export { router };
