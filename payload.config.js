import { buildConfig } from "payload/config";
const dotenv = require("dotenv");

dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  admin: {
    user: "antoine.srvt@gmail.com",
    pass: "MotDePasse123",
  },
});
