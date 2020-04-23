const { dataReturn } = require('../helper/dataReturn');

const roleCheck = (req, res, next) => {
  if (req.body.role === '' || req.body.id === '') {
    return dataReturn(res, 400, { msg: 'Data Tidak Boleh Kosong' });
  } else {
    next();
  }
};

const dataCheck = (req, res, next) => {
  if (
    req.body.password === '' ||
    req.body.password === undefined ||
    req.body.name === '' ||
    req.body.id === ''
  ) {
    return dataReturn(res, 400, { msg: 'Data Tidak Boleh Kosong' });
  } else {
    next();
  }
};

module.exports = {
  dataCheck,
  roleCheck,
};
