const { Client } = require("pg");

const client = new Client({
  connectionString: process.env.postgres://wcqbfinzjbfzoa:f07c522e07ca77c2046b568b2b1791a62bea2d38e361e189043ae642a44ae849@ec2-54-156-110-139.compute-1.amazonaws.com:5432/dfuh9ki3jm5095,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = client;
