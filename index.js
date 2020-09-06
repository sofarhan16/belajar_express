const express = require('express');
const app = express();
const { Pool } = require('pg');
const connectionString = "postgres://syh:inipass44qu@localhost:5432/tryexp";

const pool = new Pool({connectionString});

app.use(express.json())

try {
  pool.connect();
  console.log('Connected')
} catch (error) {
  console.log(error)
}

app.get('/', (req, res) => {
  res.send('Selamat Datang')
});

// app.get('/user', function (req, res) {
//   pool.query('SELECT * FROM users ORDER BY id asc',
//     function (err, result) {
//       if (err) {
//           // console.log(err);
//           // return res.status(400).send(err);
//           res.send({
//             code: 400,
//             status: "Bad Request",
//             message: err
//           })
//       }
//       // res.status(200).send(result.rows);
//       res.send({
//         code: 200,
//         status: "Success",
//         message: result.rows
//       })
//   });
// });

app.get('/user', function (req, res, next) {
  var getUserQuery =  "SELECT * FROM users ORDER BY id asc"
  pool.query(getUserQuery).then((resp) => {
    res.status(200).send({
      code: 200,
      status: 'Success',
      message: 'Success',
      data: resp.rows
    })
  }).catch((err) => {
    res.status(500).send({
      code: 500,
      message: 'Error',
      longMessage: 'Internal Server Error'
    })
  })
});

app.post('/add_user' ,function (req, res) {
  var body = req.body
  var name = body.isidata.name
  var alamat = body.isidata.alamat
  var addUserQuery = "INSERT INTO users ( name, alamat) VALUES ($1, $2)"
  pool.query(addUserQuery, [ name, alamat]).then((resp) => {
    res.status(200).send({
      code: 200,
      message: 'Success',
      status: 'success'
    })
  }).catch((err) => {
    res.status(500).send({
      code: 500,
      message: 'Error',
      longMessage: 'Internal Server Error'
    })
  });
});

app.put('/user/:id', function(req, res){
  var body = req.body
  var params = req.params
  var id = params.id
  var name = body.isidata.name
  var alamat = body.isidata.alamat
  var updateUserQuery = "UPDATE users SET name=$2, alamat=$3 WHERE id=$1"
  pool.query(updateUserQuery, [id, name, alamat]).then((resp) => {
    res.status(200).send({
      code: 200,
      message: 'success',
      status: 'Success',
      response: resp
    }).catch((err) => {
      res.status(500).send({
        code: 500,
        message: 'Error',
        longMessage: 'Internal Server Error',
        error: err
      })
    })
  })
});

app.post('/del_user', function (req,res){
  var body = req.body
  var id = body.isidata.id
  var delUserQuery = "DELETE FROM users WHERE id=$1"
  pool.query(delUserQuery, [id]).then((resp) => {
    res.status(200).send({
      code : 200,
      status: 'Success',
      message: 'Success'
    }).catch((err) => {
      res.send(500).send({
        code: 500,
        status: 'Error',
        longMessage: 'Internal Server Error'
      })
    })
  })
})

app.listen(2831);
