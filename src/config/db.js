const { Pool } = require("pg");
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});


pool.connect()
    .then(()=>{console.log('Conected to the database');
    })
    .catch((err)=>{console.error('Error connecting to the database: ', err);

    });

module.exports = pool;
