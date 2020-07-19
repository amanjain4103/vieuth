const express = require('express');
const app = express();
const cors = require('cors');
const {getEnvironmentRoute} = require('./routes/getEnvironment');
const {setEnvironment} = require('./routes/setEnvironment');
const {createEnvironment} = require('./routes/createEnvironment');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/getEnvironment',getEnvironmentRoute);
app.use('/setEnvironment',setEnvironment);
app.use('/createEnvironment',createEnvironment);

app.get('/',(req,res) => {
    res.send("Hello");
})

app.listen(4000,()=>{
    console.log("listening at port 4000")
});