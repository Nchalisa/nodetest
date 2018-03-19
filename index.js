const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// var cors = require('cors')
var firebase = require('firebase')

var config = {
    apiKey: "AIzaSyAXyrQOyVz7F_yhHqCjxyS_Tdct4K7k0Fk",
    authDomain: "testselect-599e4.firebaseapp.com",
    databaseURL: "https://testselect-599e4.firebaseio.com",
    projectId: "testselect-599e4",
    storageBucket: "testselect-599e4.appspot.com",
    messagingSenderId: "859086876408"
  };
firebase.initializeApp(config); //ประกาศใช้ firebase

var database = firebase.database() //ใช้ database ของ firebase

// app.use(cors())

app.use(bodyParser.json())
app.get('/',async (req,res) => {
    let province = [] 
    await database.ref('peopleIncome').once('value').then(snapshot => {
        province = snapshot.val()
    })
        res.send(province)
})


app.listen(3000, () => console.log('Example app listening on post 3000!'))

