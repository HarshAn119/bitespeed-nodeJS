const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected: ', connection.connection.host);
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
