// https://expressjs.com/ko/starter/hello-world.html

const express = require('express')
var cors = require('cors')
const app = express()
const port = 8080

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/dog', (req, res) => {
  res.json({'sound':'Hello dog!'})
})
app.get('/cat', (req, res) => {
  res.json({'sound':'Hello cat!'})
})
app.get('/user/:id', (req, res) => {
  const q = req.params;
  res.send('Hello ' + q.id);
})
app.get('/sound/:name', (req, res) => {
  const { name } = req.params;
  console.log(name);
  res.json({'sound':name})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// https://www.youtube.com/watch?v=Tt_tKhhhJqY
// 19분 19초