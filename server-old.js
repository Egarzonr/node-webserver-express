const express = require('express')
const app = express()


//middleware
app.use(express.static(__dirname + '/public'))

// Express HBS engine
app.set('view engine', 'hbs');
app.get('/', (req, res) => {
    // res.send('Hola Mundo')


    res.send(salida)
})

app.listen(3000, () => {
    console.log('Escuchando por el puerto 3000');
})