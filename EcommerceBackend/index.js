const express = require('express')
const dotenv = require('dotenv');
const { mongoose } = require('mongoose');
const productRouter = require('./routes/products');
const cors = require('cors') ;
const app = express()
const port = 3000

dotenv.config() ;

app.use(cors()) ; 
app.use(express.json({limit:'10mb'}))
app.use(express.urlencoded({limit:'10mb', extended: true }));


// routes 
app.use('/api/products', productRouter);

mongoose.connect(process.env.MONGO_URL).then(()=>{console.log("Database Connected!")}).catch((err)=>{console.log(err)})

//app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))