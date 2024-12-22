const path = require("path");

module.exports = {
    mode: "development",
    entry: "./validationProgram.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        library: "ValidationProgram",
    },
};
