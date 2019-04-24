const CopyPlugin = require("copy-webpack-plugin");
const MODE = process.env.NODE_ENV || "development";
const DEV = MODE == "development";

const copyRules = [
  {
    from: __dirname + "/src/index.html",
    to: __dirname + "/dist/index.html"
  },
  {
    from: __dirname + "/assets/**",
    to: __dirname + "/dist"
  }
];

module.exports = {
  mode: MODE,
  devtool: DEV ? "inline-source-map" : "source-map",
  resolve: {
    alias: {
      fs: __dirname + "/src/lib/fs.ts"
    },
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader/url" }, { loader: "file-loader" }]
      }
    ]
  },
  plugins: [new CopyPlugin(copyRules)]
};
