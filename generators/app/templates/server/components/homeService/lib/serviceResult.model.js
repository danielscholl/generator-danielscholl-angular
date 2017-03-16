module.exports = function ServiceResult ({ success = false, message = null, data = null } = {}) {
  return {
    success: success,
    message: message,
    data: data
  };
};
