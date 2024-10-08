# Dynamic Forms Application

## Assignment Overview
This web application has been developed using the SQL, Express, React, and Node.js stack to create dynamic forms based on user interaction. The application demonstrates proficiency in both frontend and backend development, along with database operations and data synchronization with an online Excel sheet.

## Table of Contents
- [Objective](#objective)
- [Requirements](#requirements)
- [Installation Steps](#installation-steps)
- [Functionality](#functionality)
- [Database Structure](#database-structure)
- [Data Synchronization](#data-synchronization)
- [Additional Features](#additional-features)
- [Demo](#video)
- [Conclusion](#conclusion)

## Objective
The objective of this assignment is to develop a user-friendly web application that features two dynamic forms based on user interactions. The application aims to provide an efficient way to collect user data and synchronize it with an external data source.

## Requirements

### Interface
- A simple user interface with two buttons labeled **"Form A"** and **"Form B"**.
- Clicking each button will dynamically display a corresponding form with the heading "Form A" or "Form B".

### Form Details
Both forms contain the following input fields:
- **Name**: Text input (validated for non-empty and alphabetic characters).
- **Country Code**: Dropdown selection (must be selected from a predefined list).
- **Phone Number**: Text input (numeric and validated against the selected country code format).

### Database
- SQL is used to store form data.
- Each entry captures:
  - Form type (A or B)
  - Name
  - Country Code
  - Phone Number

### Data Synchronization
- A "Refresh" button updates the Excel sheet with new data from the SQL database.

## Installation Steps
To set up the application locally, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/dynamic-forms-app.git
   cd dynamic-forms-app
2. Install Dependencies:
   ```bash
   Copy code
   npm install
3. Set Up SQL 
    ```bash
    Install a SQL database (e.g., MySQL, PostgreSQL) if not already installed.
    Create a new database for the application.
    Update the database connection settings in the config file according to your database setup.

4.Set Up Environment Variable
      ```bash
        
        Create a .env file in the root directory and add your database
     connection string and any other required environment variables.

5. Running the Application
To run the application, execute the following command:
   ```bash
    Copy code
    npm start
    application will be accessible at http://localhost:3000.
   
## Functionality

Users can click on either Form A or Form B to fill out their details.
Upon submission, the data is validated and stored in the SQL database.
The "Refresh" button syncs the SQL database data with the online Excel sheet.

## Database Structure
The database consists of a single table with the following columns:

id: Unique identifier (primary key)
form_type: String (either 'A' or 'B')
name: String (user's name)
country_code: String (selected country code)
phone_number: String (user's phone number)

## Data Synchronization
Data synchronization with the Excel sheet is implemented using the xlsx library. The "Refresh" button triggers a function to fetch data from the SQL database and update the Excel sheet accordingly.

## Additional Features
The UI is designed to be attractive and responsive, ensuring a seamless experience on both mobile and desktop devices.
Local storage is utilized to save user data (name, country code, phone number), preventing users from re-entering information each time they visit the application.

## video

https://github.com/user-attachments/assets/48e1a6e3-49dc-4dfe-a20b-160897d1b0ff

## Conclusion
This application showcases dynamic form handling, data validation, database integration, and data synchronization with external sources. Feel free to explore the code and functionalities, and don’t hesitate to reach out for any queries.
