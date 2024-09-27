const fs = require("fs");
const pg = require("pg");

const config = {
  user: "avnadmin",
  password: "AVNS_5eH5CaOhD-EII2F6w5Q",
  host: "pg-10aed5a0-sahilchaudhari2405-03ad.i.aivencloud.com",
  port: "10611",
  database: "hospital_management_system",
  ssl: {
    rejectUnauthorized: true,
    ca: fs.readFileSync("/Users/sahilchaudhari/Documents/arohiSoftwares/hospital-management-system/server/src/server-certificates/ca.pem").toString(),
  },
};

const client = new pg.Client(config);
client.connect(function (err) {
  if (err) throw err;
  client.query("SELECT VERSION()", [], function (err, result) {
    if (err) throw err;

    console.log(result.rows[0]);
    client.end(function (err) {
      if (err) throw err;
    });
  });
}); 