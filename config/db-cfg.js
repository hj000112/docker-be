const mysql      = require('mysql2');

const dotenv = require('dotenv');
// .env 파일 로드
dotenv.config();
const conn = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_DATABASE
});

// 연결
conn.connect((error) => {
    if (error) {
      console.error('MySQL 연결 실패:', error);
    } else {
      console.log('MySQL 연결 성공');
    }
});


module.exports = conn