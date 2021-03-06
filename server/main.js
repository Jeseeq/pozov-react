import path from 'path'
import webpack from 'webpack'
import webpackConfig from '../build/webpack.config'
import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import authentication from './middleware/authentication'
import historyApiFallback from 'connect-history-api-fallback'
import _debug from 'debug'
import config from '../config'

const debug = _debug('app:server')
const paths = config.utils_paths
const app = express()
var db = require('./db')
db.connect()

// This rewrites all routes requests to the root /index.html file
// (ignoring file requests). If you want to implement isomorphic
// rendering, you'll want to remove this middleware.

app.use(historyApiFallback({
  verbose: false
}))

// Apply middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())
app.use(authentication.decodeToken)
// Should be placed before express.static

// Routes
import users from './api/users'
app.use('/api/', users)
// ------------------------------------
// Apply Webpack HMR Middleware
// ------------------------------------
if (config.env === 'development') {
  const compiler = webpack(webpackConfig)

  // Enable webpack-dev and webpack-hot middleware
  const { publicPath } = webpackConfig.output

  // Serve hot-reloading bundle to client
  app.use(require('webpack-dev-middleware')(compiler, {
    contentBase: paths.client(),
    hot: true,
    quiet: config.compiler_quiet,
    noInfo: config.compiler_quiet,
    lazy: false,
    stats: config.compiler_stats,
    publicPath: publicPath
  }))
  app.use(require('webpack-hot-middleware')(compiler))

  // Serve static assets from ~/src/static since Webpack is unaware of
  // these files. This middleware doesn't need to be enabled outside
  // of development since this directory will be copied into ~/dist
  // when the application is compiled.
  app.use('/', express.static(paths.client('static')))
  app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

  // app.use(convert(serve(paths.client('static'))))
} else {
  debug(
    'Server is being run outside of live development mode. This starter kit ' +
    'does not provide any production-ready server functionality. To learn ' +
    'more about deployment strategies, check out the "deployment" section ' +
    'in the README.'
  )

  app.use(compress({
    filter: function (req, res) {
      return (/json|text|javascript|css|font|svg/).test(res.getHeader('Content-Type'))
    },
    level: 9
  }))
  // Serving ~/dist by default. Ideally these files should be served by
  // the web server and not the app server, but this helps to demo the
  // server in production.
  app.use('/', express.static(paths.dist()))
  app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
}

export default app
