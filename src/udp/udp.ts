import * as dgram from "dgram";

const byteMessage = Buffer.from("asasa");

const client = dgram.createSocket("udp4");
client.send(byteMessage, 9, "10.12.10.255", err => {
  console.error(err);
});
client.close();
