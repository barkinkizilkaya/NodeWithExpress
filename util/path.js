const path = require("path");

// for operating system diffeceny we neet to use like that
module.exports = path.dirname(require.main.filename);
