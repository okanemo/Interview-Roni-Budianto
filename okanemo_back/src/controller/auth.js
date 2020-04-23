const { userLogin } = require('../model/auth');
const config = require('../../config.json');
const jwt = require('jsonwebtoken');
const md5 = require('md5');
const { dataReturn } = require('../helper/dataReturn');

module.exports = {
  userLogin: async (req, res) => {
    try {
      const data = {
        username: req.body.username,
        password: md5(req.body.password),
      };

      const resultLogin = await userLogin(data);
      const token = jwt.sign({ resultLogin }, config.secret, {
        expiresIn: '12h',
      });

      if (resultLogin.length) {
        return res.json({ status: 200, token, data: { ...resultLogin[0] } });
      } else {
        return dataReturn(res, 400, { msg: 'Username Atau Password Salah' });
      }
    } catch (error) {
      return dataReturn(res, 400, { msg: 'Terjadi Kesalahan' });
    }
  },
};
