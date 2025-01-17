
/*const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { createObjectCsvWriter } = require('csv-writer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// CSV Writer Setup
const csvWriter = createObjectCsvWriter({
    path: 'formData.csv',
    header: [
        { id: 'name', title: 'Name' },
        { id: 'email', title: 'Email' },
        { id: 'location', title: 'Location' }
    ],
    append: true // This will append to the existing file
});

// Serve the static HTML file
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to receive form data
app.post('/submit-form', (req, res) => {
    const { name, email, location } = req.body;

    // Write data to CSV
    csvWriter.writeRecords([{ name, email, location }])
        .then(() => {
            console.log('Data written to CSV file successfully.');
            res.status(200).send({ message: 'Data saved successfully!' });
        })
        .catch((error) => {
            console.error('Error writing to CSV:', error);
            res.status(500).send({ message: 'Error saving data.' });
        });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});*/



/*const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { createObjectCsvWriter } = require('csv-writer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// CSV Writer Setup
const csvWriter = createObjectCsvWriter({
    path: path.join(__dirname, 'formData.csv'), // Use absolute path
    header: [
        { id: 'name', title: 'Name' },
        { id: 'email', title: 'Email' },
        { id: 'location', title: 'Location' }
    ],
    append: true // This will append to the existing file
});

// Serve the static HTML file
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to receive form data
app.post('/submit-form', (req, res) => {
    const { name, email, location } = req.body;
    console.log('Received data:', { name, email, location }); // Log incoming data

    // Write data to CSV
    csvWriter.writeRecords([{ name, email, location }])
        .then(() => {
            console.log('Data written to CSV file successfully.');
            res.status(200).send({ message: 'Data saved successfully!' });
        })
        .catch((error) => {
            console.error('Error writing to CSV:', error);
            res.status(500).send({ message: 'Error saving data.' });
        });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
*/


/*
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { createObjectCsvWriter } = require('csv-writer');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// CSV File Path
const csvFilePath = path.join(__dirname, 'formData.csv');

// CSV Writer Setup
const csvWriter = createObjectCsvWriter({
    path: csvFilePath,
    header: [
        { id: 'name', title: 'Name' }, // Title for the header
        { id: 'email', title: 'Email' },
        { id: 'location', title: 'Location' }
    ],
    append: true // This will append to the existing file
});

// Serve the static HTML file
app.use(express.static(path.join(__dirname, 'public')));

// Check if the file exists and write headers if it does not
if (!fs.existsSync(csvFilePath)) {
    // If file doesn't exist, create it and write the header
    fs.writeFileSync(csvFilePath, "Name,Email,Location\n"); // Writing headers manually
}

// Endpoint to receive form data
app.post('/submit-form', (req, res) => {
    const { name, email, location } = req.body;
    console.log('Received data:', { name, email, location }); // Log incoming data

    // Write data to CSV
    csvWriter.writeRecords([{ name, email, location }])
        .then(() => {
            console.log('Data written to CSV file successfully.');
            res.status(200).send({ message: 'Data saved successfully!' });
        })
        .catch((error) => {
            console.error('Error writing to CSV:', error);
            res.status(500).send({ message: 'Error saving data.' });
        });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

*/

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { createObjectCsvWriter } = require('csv-writer');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// CSV File Path
const csvFilePath = path.join(__dirname, 'formData.csv');

// CSV Writer Setup
const csvWriter = createObjectCsvWriter({
    path: csvFilePath,
    header: [
        { id: 'name', title: 'Name' },
        { id: 'email', title: 'Email' },
        { id: 'location', title: 'Location' }
    ],
    append: true // This will append to the existing file
});

// Serve the static HTML file
app.use(express.static(path.join(__dirname, 'public')));

// Function to initialize CSV file with headers
const initializeCsvFile = () => {
    if (!fs.existsSync(csvFilePath)) {
        fs.writeFileSync(csvFilePath, "Name,Email,Location\n"); // Writing headers manually
        console.log('CSV file initialized with headers.');
    } else {
        console.log('CSV file already exists, headers will not be rewritten.');
    }
};

// Initialize CSV file
initializeCsvFile();

// Endpoint to receive form data
app.post('/submit-form', async (req, res) => {
    const { name, email, location } = req.body;
    console.log('Received data:', { name, email, location });

    try {
        await csvWriter.writeRecords([{ name, email, location }]);
        console.log('Data written to CSV file successfully.');
        res.status(200).send({ message: 'Data saved successfully!' });
    } catch (error) {
        console.error('Error writing to CSV:', error);
        res.status(500).send({ message: 'Error saving data.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});




