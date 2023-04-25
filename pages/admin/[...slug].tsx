import { createProxyMiddleware } from "http-proxy-middleware";
const dotenv = require("dotenv");
dotenv.config();

const apiProxy = createProxyMiddleware({
  target: `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/admin`,
  changeOrigin: true,
  pathRewrite: { "^/admin": "" },
});

export default apiProxy;

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
