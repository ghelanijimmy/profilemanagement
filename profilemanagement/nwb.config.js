const path = require("path");
const __PACKAGE__ = require("./package.json");

module.exports = {
  // devServer: {
  //   //   proxy: {
  //   //     "/test": "http://localhost:3005"
  //   //   }
  //   // },
  type: "react-app",
  webpack: {
    publicPath: "",
    rules: {
      "sass-css": {
        url: true,
        // modules: true,
        localIdentName:
          process.env.NODE_ENV === "production"
            ? "[hash:base64:5]"
            : "[name]__[local]__[hash:base64:5]",
        sourceMap: true,
        modules: true
      },
      postcss: {
        plugins: [require("autoprefixer")()]
      }
    },
    extractCSS: {
      filename: `${__PACKAGE__.distName.toLowerCase()}.css`
    },
    autoprefixer: "> 1%, last 2 versions, Firefox ESR, ios >= 8",
    extra: {
      output: {
        filename: `${__PACKAGE__.distName.toLowerCase()}.js`,
        library: `${__PACKAGE__.libraryName}`,
        libraryTarget: "var"
      },
      optimization: {
        runtimeChunk: false
      },
      devtool: "source-map",
      // output: {
      //   filename: "main.js",
      //   path: path.resolve(__dirname, "dist")
      // },
      watch: true,
      resolve: {
        extensions: [".js", ".ts", ".json", ".scss", ".css", ".jsx", ".html"]
      }
    }
  }
};