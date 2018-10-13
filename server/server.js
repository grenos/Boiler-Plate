const path = require('path');
const express = require('express');
var expressStaticGzip = require('express-static-gzip');
const app = express();
const publicPath = path.join(__dirname, '..', 'dist');
const port = process.env.PORT || 3000;

// serve all assets from dist folder
// app.use(express.static(publicPath));
app.use('/', expressStaticGzip(publicPath));

// app.get('/dist/scripts/*.js', (req, res, next) => {
//   req.url = req.url + '.gz';
//   console.log(req.url);
//   res.set('Content-Encoding', 'gzip');
//   res.set('Content-Type', 'text/javascript');
//   next();
// });

// app.get('/dist/styles/*.css', function(req, res, next) {
//   req.url = req.url + '.gz';
//   console.log(req.url);
//   res.set('Content-Encoding', 'gzip');
//   res.set('Content-Type', 'text/css');
//   next();
// });

app.listen(port, () => {
  console.log('server is running');
});
