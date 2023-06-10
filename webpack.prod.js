const path = require("path");
const { merge } = require("webpack-merge");
// eslint-disable-next-line import/extensions
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "image-slider.js",
        path: path.resolve(__dirname, "dist"),
        globalObject: "this",
        library: {
            name: "imageSlider",
            type: "umd",
            export: "default",
        },
        clean: true,
    },
});
