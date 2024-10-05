

    // app.js (Main server file)
import express from 'express';
const app = express();
import  {router as formRoutes} from './src/route/form.js';

// Middleware to parse JSON
app.use(express.json());

// Use form routes
app.use('/api/form', formRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
