const path = require('path');
const fs = require('fs');

const fileUploadController = {};

let filePath;

fileUploadController.upload = (req, res, next) => {
  try {
    filePath = req.body;
    console.log(req.body);
  } catch (err) {
    console.log(error);
    next({
      log: error
    });
  }
};
module.exports = fileUploadController, { upload: filePath };

// export a var for use in astraDBmodels