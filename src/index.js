const path = require('path')
const express = require('express')
const exphbs  = require('express-handlebars')
const app = express()
const morgan = require('morgan')
const port = 3000
const route = require('./routes')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

//HTTP Logger
// app.use(morgan('combined'))

//Template handle bars
app.engine('.hbs', exphbs({
  extname:'.hbs',
  defaultLayout: 'main',
  layoutsDir: 'src/resources/views/layouts',
  partialsDir: 'src/resources/views/partials'
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views')); 
// console.log(__dirname)

//Routes init
route(app)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})