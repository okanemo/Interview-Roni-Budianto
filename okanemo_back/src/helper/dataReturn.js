const dataReturn = (response, status, data) => {
  const result = {};
  result.status = status || 200;
  result.data = data || 200;

  return response.status(result.status).json(result);
};

module.exports = {
  dataReturn,
};
