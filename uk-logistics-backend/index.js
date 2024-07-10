const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const ContactForm = require('./model/ContactForm');


const app = express();
const port = process.env.PORT || 3001;

mongoose.connect('mongodb://127.0.0.1:27017/ukLogistics')
      .then(() => console.log('MongoDB connected successfully'))
      .catch(err => console.error('MongoDB connection error:', err));


app.use(cors());
app.use(bodyParser.json());


app.post('/submit-contact-form', async (req, res) => {
      const { name, phoneNo, address, query } = req.body;
      try {
            const newContact = new ContactForm({ name, phoneNo, address, query });
            await newContact.save();
            res.status(200).send({
                  message: 'Form submitted successfully.',
                  data: newContact
            });
      } catch (error) {
            console.error('Error saving contact form:', error);
            res.status(500).send('Error submitting form.');
      }
});

app.listen(port, () => {
      console.log(`Server running on port ${port}`);
});
