const mongoose = require('mongoose');
const Admin = require('./models/Admin');
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    const newAdmin = new Admin({
      name: 'admin',
      email: 'admin@example.com',
      password: 'admin123'
    });
    await newAdmin.save();
    console.log('Admin user added');
    process.exit();
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
