const express = require('express')
const app = express()
const morgan = require('morgan')
const port = 3000

app.use(morgan('combined'))

app.get('/', (req, res) => {
  res.send('Hello World! ${c}')
})

app.get('/tin-tuc', (req, res) => {
    res.send('Tin tuc page !')
  })
  
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})