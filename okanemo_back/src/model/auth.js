const connect = require('../config/mysql');

module.exports = {
  userLogin: (data) => {
    return new Promise((resolve, reject) => {
      connect.query(
        'SELECT user.id, user.name, user.username, user.role FROM user WHERE user.username = ? and user.password = ?',
        [data.username, data.password],
        (err, res) => {
          if (!err) {
            resolve(res);
          }
          reject(new Error(err));
        }
      );
    });
  },
};
