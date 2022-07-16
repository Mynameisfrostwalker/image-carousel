import path from "path";
import type { Configuration } from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";


const config: Configuration = {
  mode: "production",
  entry: {
    index: "./src/scripts/index.ts",
    images: "./src/scripts/images.ts",
    carouselDisplay: "./src/scripts/carouselDisplay.ts",
    transitions: "./src/scripts/transitions.ts",
    pubsub: "./src/scripts/pubsub.ts",
    circlenav: "./src/scripts/circlenav.ts",
  },
  module: {
    rules: [
      {
        test: /\.ts$/i,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|svg|jpeg|gif|)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html",
      favicon: "./src/assets/favicon.ico",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};

export default config;
