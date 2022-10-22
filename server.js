const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser')

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
 
const alasql = require("alasql");


// start of test
var db = new alasql.Database(); 
db.exec("CREATE TABLE foods (ID int, NAME string, SIZE int)");
/*, ENERGY int, /*PROTEIN int, TFAT int, SFAT int, CARB int, SUGAR int, DIFIBER int, SOD int)')*/

db.exec("INSERT INTO foods VALUES (1,'Potato',100),(2,'Hamburger',532)");

let cID = 0;
let autoID = function(){return cID+=1};
var BURGERKING_KOR = [
  {ID: `${autoID()}`, NAME: 'sweetpotato', SIZE: 500, },
  {ID: `${autoID()}`, NAME: 'Kamza', SIZE: 230},
  {ID: `${autoID()}`, NAME: '',},
         ]
let res = alasql("SELECT * FROM ?",[BURGERKING_KOR]);

console.log(res);
// end of test


const mainFunc = require("./app/routes/mainFunc.routes");

app.use("/", mainFunc);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});