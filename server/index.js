const server = require('./server')

const port = process.ENV.PORT || 3000

server.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port)
})
