var mysql = require('mysql')

var con= mysql.createConnection({

    host:'localhost',
    user:'root',
    password:'Your Password'

})
con.query('create database uday',function(err,data){

    if(err) throw err

    console.log("Database Created")
})