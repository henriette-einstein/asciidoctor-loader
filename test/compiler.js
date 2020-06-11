import path from 'path'
import webpack from 'webpack'
import MemoryFS from 'memory-fs'
const fs = new MemoryFS()

export default (fixture, options = {}) => {
  const compiler = webpack({
    context: __dirname,
    entry: `./${fixture}`,
    output: {
      path: path.resolve(__dirname),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        test: /\.adoc$/,
        use: {
          loader: path.resolve(__dirname, '../loader.js'),
          options: {
            safe: 'unsafe',
            esModule: false // just for testing. Otherwise node-eval won't work
          }
        }
      }]
    }
  })

  compiler.outputFileSystem = fs

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) reject(err)
      if (stats.hasErrors()) reject(new Error(stats.errors))

      resolve(stats)
    })
  })
}
