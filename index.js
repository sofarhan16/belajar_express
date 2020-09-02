const express = require('express');
const app = express();
const { Pool } = require('pg');
const connectionString = "postgres://syh:inipass44qu@localhost:5432/tryexp";

const pool = new Pool({connectionString});

try {
  pool.connect();
  console.log('Connected')
} catch (error) {
  console.log(error)
}

app.get('/', (req, res) => {
  res.send('Selamat Datang')
});

// app.get ('/user', (req, res) => {
//   pool.query(`SELECT * FROM user where id = $1 `, [1],
//     function (err, result) {
//       if (err){
//         console.log(err);
//         res.status(400).send(err);
//       }
//       res.status(200).send(result.rows);
//     });
// });
app.get('/users', function (req, res) {
  pool.query('SELECT * FROM users ', 
    function (err, result) {
      if (err) {
          console.log(err);
          return res.status(400).send(err);
      }
      res.status(200).send(result.rows);
  });
});

app.listen(2831);
