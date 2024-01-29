const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = process.env.PORT || 3000;
const mongoURI = 'mongodb://localhost:3001';


const dbName = 'myDatabase';

// Connect to MongoDB
MongoClient.connect(mongoURI, { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db(dbName);
    console.log('Connected to MongoDB');

    // Start the server after successfully connecting to the database
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to database:', error);
  });

// Define routes and middleware below

// Example route
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// 404 Route
app.use((req, res) => {
  res.status(404).send('Page not found');
});
