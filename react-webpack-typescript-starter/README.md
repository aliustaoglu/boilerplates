Steps to create

yarn add -D webpack webpack-cli webpack-dev-server
yarn add -D typescript ts-loader source-map-loader
yarn add -D @types/react-dom @types/react

Update webpack

```javascript
module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  devtool: "inline-source-map",
  entry: "./src/index.tsx",
  output: {
    path: __dirname + "/build",
    filename: "bundle.js",
  },
  devServer: {
    inline: true,
    contentBase: "./build",
    port: 3000,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, exclude: /node_modules/, loader: "ts-loader" },
      { test: /\.js$/, use: ["source-map-loader"], enforce: "pre" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
  plugins: [],
};

```

Update tsconfig.json

```js
{
  "compilerOptions": {
    "outDir": "./build/",
    "sourceMap": true,
    "noImplicitAny": true,
    "module": "commonjs",
    "target": "es5",
    "jsx": "react",
    "resolveJsonModule": true,
    "skipLibCheck" : true,
    "esModuleInterop": true
  },
  "include" : [
      "./src/**/*"
  ],
  "exclude" : [
      "./test/**/*"
  ]
}
```