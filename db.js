import mysql from 'mysql2/promise';

const conn = await mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root', 
    database: 'number_plates',
    password: 'root'
})


export default conn 