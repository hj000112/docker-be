const express = require('express');
const app = express()


const routes = require('../routes'); // 경로를 프로젝트에 맞게 수정

app.use('/', routes);



app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

