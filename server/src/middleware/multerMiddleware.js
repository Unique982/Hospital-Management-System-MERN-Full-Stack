const multer = require("multer");
// file fillter
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpg", "image/png", "image/jpeg"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only image uploaded jpg,png,jpeg!"), false);
  }
};
// storage config garnu  paro
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./src/upload"); // ipload vann folder ho
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // file name eg : abc.png
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: fileFilter,
});
module.exports = { upload, storage };
