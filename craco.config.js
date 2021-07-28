const { resolve } = require("path");

const resolves = dir => resolve(__dirname, dir);
module.exports = {
    webpack:{
        alias:{
            "@":resolves("src"),
            "components":resolves("src/components")
        }
    }
}