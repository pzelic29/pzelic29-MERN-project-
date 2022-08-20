const app = require('./app')  // Express aplikacija
const http = require('http')
const config = require('./util/config')

const server = http.createServer(app)  //naš server
 
server.listen(config.PORT, () => {
  console.log(`Server je pokrenut na portu ${config.PORT}`)
})