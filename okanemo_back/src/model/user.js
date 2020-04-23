const connect = require('../config/mysql');

const dataChange = (setData, id) => {
  return new Promise((resolve, reject) => {
    connect.query(
      'UPDATE user SET ? WHERE user.id = ?',
      [setData, id],
      (err, res) => {
        if (!err) {
          resolve(res);
        }
        reject(new Error());
      }
    );
  });
};

const getAllUser = () => {
  return new Promise((resolve, reject) => {
    connect.query('SELECT id, name, username, role FROM user', (err, res) => {
      if (!err) {
        resolve(res);
      }
      reject(new Error());
    });
  });
};

module.exports = {
  dataChange,
  getAllUser,
};
