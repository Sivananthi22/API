const express =require ('express');
const app = express ();
const port = 5000;

app.use(express.urlencoded({extended:true}));    //middleware to parse URL-encoded payloads
app.use(express.json());                        //middleware to parse JSON payloads

const employeeRoutes = require('./routes/employee');    //import routes

app.use('/employees', employeeRoutes); // Correct syntax


app.listen(port,() =>{
    console.log('Server is running on port ${port}');   // to start the server    
}) 