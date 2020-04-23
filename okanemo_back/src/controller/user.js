const { dataChange, getAllUser } = require('../model/user');
const jwt = require('jsonwebtoken');
const config = require('../../config.json');
const { dataReturn } = require('../helper/dataReturn');
const md5 = require('md5');

const roleChanged = async (req, res) => {
  try {
    let setData = {
      role: req.body.role,
    };
    let id = req.body.id;
    let data = '';
    const token = req.headers.authorization;
    jwt.verify(token, config.secret, (err, result) => {
      if (!err) {
        data = result;
      } else {
        return dataReturn(res, 400, err);
      }
    });

    if (data.resultLogin[0].role === 'Super') {
      const dataRole = await dataChange(setData, id);
      return dataReturn(res, 200, { msg: 'Data Berhasil Diubah' });
    } else {
      return dataReturn(res, 400, {
        msg: 'Anda Tidak Memiliki Hak Akses Untuk ini',
      });
    }
  } catch (error) {
    return dataReturn(res, 400, { msg: 'Terjadi Kesalahan' });
  }
};

const dataChanged = async (req, res) => {
  try {
    let setData = {
      name: req.body.name,
      password: md5(req.body.password),
    };
    let id = req.body.id;
    let data = '';
    const token = req.headers.authorization;

    jwt.verify(token, config.secret, (err, result) => {
      if (!err) {
        data = result;
      } else {
        return dataReturn(res, 400, err);
      }
    });

    if (
      data.resultLogin[0].role === 'Super' ||
      data.resultLogin[0].role === 'Admin'
    ) {
      const dataRole = await dataChange(setData, id);
      return dataReturn(res, 200, { msg: 'Data Berhasil Diubah' });
    } else {
      return dataReturn(res, 400, {
        msg: 'Anda Tidak Memiliki Hak Akses Untuk ini',
      });
    }
  } catch (error) {
    return dataReturn(res, 400, { msg: 'Terjadi Kesalahan' });
  }
};

const getAllUsers = async (req, res) => {
  try {
    let data = '';
    const token = req.headers.authorization;
    jwt.verify(token, config.secret, (err, result) => {
      if (!err) {
        data = result;
      } else {
        return dataReturn(res, 400, err);
      }
    });

    if (
      data.resultLogin[0].role === 'Super' ||
      data.resultLogin[0].role === 'Admin'
    ) {
      const resultUser = await getAllUser();
      return dataReturn(res, 200, resultUser);
    } else {
      return dataReturn(res, 400, {
        msg: 'Anda Tidak Memiliki Hak Akses Untuk Ini',
      });
    }
  } catch (error) {
    return dataReturn(res, 400, { msg: 'Terjadi Kesalahan' });
  }
};

module.exports = {
  roleChanged,
  getAllUsers,
  dataChanged,
};
