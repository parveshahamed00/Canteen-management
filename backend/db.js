const mysql = require('mysql2');
 const dbConnection=mysql.createConnection({
host:"localhost",
database:"sac_snacks_wallet",
user:"root",
password:"parvesh7"

})
module.exports=dbConnection
