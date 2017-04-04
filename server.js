import express from 'express';
import webpack from 'webpack';
import webpack_config from './webpack.config.js';

const app = express();
const compiler = webpack(webpack_config);

app.use('/', express.static('dist'));

compiler.watch({
  poll: true,
  aggregateTimeout: 300
}, (err, stats) => {
  if (err) {
    console.log('Fatal error!\n')
    console.log(err);
  } else {
    console.log(stats.toString('minimal'));
  }
});

console.log('Listening on port 8080')
app.listen(8080);
