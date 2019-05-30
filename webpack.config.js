const CopyPlugin = require("copy-webpack-plugin");
const Dotenv = require("dotenv-webpack");
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

function createPlugins() {
  const common = [new CopyPlugin(copyRules)];
  return DEV
    ? common.concat(new Dotenv())
    : common.concat(
        new webpack.EnvironmentPlugin(
          ["FIREBASE_API_KEY",
          "FIREBASE_AUTH_DOMAIN",
          "FIREBASE_DATABASE_URL",
          "FIREBASE_PROJECT_ID"]
        )
      );
}

module.exports = {
  mode: MODE,
  devtool: DEV ? "inline-source-map" : "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  devServer: {
    historyApiFallback: true
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
  plugins: createPlugins()
};
