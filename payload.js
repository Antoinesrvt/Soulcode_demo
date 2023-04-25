import Payload from "@payloadcms/js-sdk";

const payload = new Payload({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
});

export default payload;
