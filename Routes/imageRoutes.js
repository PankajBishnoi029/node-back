const express = require("express");
const {
  uploadimage,
} = require("../controllers/imageuploading/cloudinaryimage.js");
const uploads = require("../middleware/multerMiddleware.js");
const imageRoutes = express.Router();

//
imageRoutes.post("/image", uploads, uploadimage);

module.exports = imageRoutes;
