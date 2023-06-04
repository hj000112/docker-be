const conn = require('../../config/db-cfg')



// 전체 사용자 조회
exports.getAllUsers = (req, res) => {
  // MySQL 연결을 사용한 전체 사용자 조회 로직
  const query = 'SELECT * FROM users';
  conn.query(query, (error, results) => {
    if (error) {
      console.error('전체 사용자 조회 실패:', error);
      res.status(500).json({ error: '전체 사용자 조회에 실패했습니다.' });
    } else {
      console.log('전체 사용자 조회 성공');
      res.status(200).json({ users: results });
    }
  });
};


// 사용자 생성
exports.createUser = (req, res) => {
  const { name, email } = req.body;

  const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
  const values = [name, email];

  conn.query(query, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to create user' });
    } else {
      res.status(201).json({ message: 'User created successfully' });
    }
  });
};

// 사용자 조회
exports.getUser = (req, res) => {
  const userId = req.params.id;

  const query = 'SELECT * FROM users WHERE id = ?';
  const values = [userId];

  conn.query(query, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to fetch user' });
    } else if (result.length === 0) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.status(200).json(result[0]);
    }
  });
};

// 사용자 수정
exports.updateUser = (req, res) => {
  const userId = req.params.id;
  const { name, email } = req.body;

  const query = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
  const values = [name, email, userId];

  conn.query(query, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to update user' });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.status(200).json({ message: 'User updated successfully' });
    }
  });
};

// 사용자 삭제
exports.deleteUser = (req, res) => {
  const userId = req.params.id;

  const query = 'DELETE FROM users WHERE id = ?';
  const values = [userId];

  conn.query(query, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to delete user' });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.status(200).json({ message: 'User deleted successfully' });
    }
  });
};
