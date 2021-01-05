const path = require('path')
const express = require('express')
const exphbs  = require('express-handlebars')
const app = express()
const morgan = require('morgan')
const port = 3000


app.use(express.static(path.join(__dirname, 'public')))
//HTTP Logger
app.use(morgan('combined'))

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

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/news', (req, res) => {
    res.render('news');
  })
  
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})