const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const schedule  = require("node-schedule");

const connection = mysql.createConnection({
  host: 'localhost',
  user : 'root',
  password : '',
  database : 'db_schedulee'
})

connection.connect((err) => {
  if (err) {
    console.error('Error connection to MySql database', err);
    return
  }
  console.log('Connected to MySQL database');
})

const Mjob = schedule.scheduleJob('*/5 * * * *', () => {
  console.log('Data pada database Bertambah');

  const query = "INSERT INTO table_schedule (name, createdAt) values ('siddiq', NOW())";
  connection.query(query,(error, result, field) => {
    if(error){
      console.error('Error running query', error);
      return
    }
    console.log('Query result: ', result);
  })
})


Mjob.invoke()

app.listen(8088, () =>{
  console.log("server running on port 8088");
})
