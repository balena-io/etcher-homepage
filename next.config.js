const path = require('path');
const glob = require('glob');

module.exports = {
  webpack: (config, { dev }) => {
    // if (config.resolve.alias) {
    //   delete config.resolve.alias['react']
    //   delete config.resolve.alias['react-dom']
    // }
    console.log({dev})

    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      }
    ,
      {
        test: /\.css$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader']
      }
    ,
      {
        test: /\.s(a|c)ss$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader',
          { loader: 'sass-loader',
            options: {
              includePaths: ['styles', 'node_modules']
                .map((d) => path.join(__dirname, d))
                .map((g) => glob.sync(g))
                .reduce((a, c) => a.concat(c), [])
            }
          }
        ]
      }
    )

    return config
  },
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/changelog": { page: "/changelog" },
      "/cli": { page: "/cli" }
    }
  }
}
