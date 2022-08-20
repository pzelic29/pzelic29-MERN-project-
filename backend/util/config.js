require('dotenv').config()  //čitanje vrijednosti iz ".env" datoteke
 
const PORT = process.env.PORT
 
// Baza podataka
const password = process.env.ATLAS_PASS
const username=process.env.USER
const dbname = process.env.NODE_ENV === 'test'
? 'mern-api-test'
: 'mern'
const DB_URI = `mongodb+srv://${username}:${password}@cluster0.twuc04y.mongodb.net/${dbname}?retryWrites=true&w=majority`

module.exports = {PORT, DB_URI}