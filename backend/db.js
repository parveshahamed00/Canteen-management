const mysql = require('mysql2');
 const dbConnection=mysql.createConnection({
host:"localhost",
database:"sac_snacks_wallet",
user:"sac",
password:"sac"

})
module.exports=dbConnection
