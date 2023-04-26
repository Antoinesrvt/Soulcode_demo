import payload from 'payload';
const dotenv = require("dotenv");

dotenv.config();

payload.init({
  mongoURL: process.env.MONGODB_URI,
  secret: process.env.PAYLOAD_SECRET,
});
